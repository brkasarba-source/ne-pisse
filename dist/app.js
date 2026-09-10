const $ = s => document.querySelector(s);
let people = 2, mode = 'Tümü', current = null, sessionSeen = [];
const byId = new Map(meals.map(m => [m.id, m]));
function canonical(id) { return mealAliases[id] || id; }
function readSaved() {
  try {
    const value = JSON.parse(localStorage.getItem('nePisse')) || {};
    const favorites = [...new Set((Array.isArray(value.favorites) ? value.favorites : []).map(canonical).filter(id => byId.has(id)))];
    const history = (Array.isArray(value.history) ? value.history : []).filter(h => h && byId.has(canonical(h.id))).map(h => ({id: canonical(h.id), date: typeof h.date === 'string' ? h.date : ''}));
    return {favorites, history: history.filter((h,i) => history.findIndex(x => x.id === h.id) === i).slice(0,10)};
  } catch { return {favorites: [], history: []}; }
}
const saved = readSaved();
function persist() {
  try { localStorage.setItem('nePisse', JSON.stringify(saved)); }
  catch { toast('Tarayıcı kaydetmeye izin vermiyor; seçimler yalnızca bu oturumda tutulacak.'); }
  renderHistory(); $('#favoriteCount').textContent = saved.favorites.length;
}
function filters() { return {mode, people, maxTime: Number($('#time').value), calorie: $('#calorie').value, includeIdeas: false}; }
function baseEligible() { return meals.filter(m => matchesMeal(m, filters())); }
function eligible() {
  const recent = saved.history.slice(0,5).map(h => h.id);
  return baseEligible().filter(m => !recent.includes(m.id) && !sessionSeen.includes(m.id) && m.id !== current?.id);
}
function updateStatus() {
  const total = baseEligible().length;
  $('#status').textContent = total ? `${eligible().length} yeni seçenek · ${total} filtreye uygun yemek` : 'Bu seçimlere uyan yemek yok. Süreyi veya kalori seçimini değiştirebilirsin.';
  const maxTime = Number($('#time').value);
  const timeInfo = $('#timeExclusions');
  if (!Number.isFinite(maxTime)) {
    timeInfo.hidden = true;
  } else {
    const withoutTime = meals.filter(m => matchesMeal(m, {...filters(), maxTime: Infinity}));
    const longer = withoutTime.filter(m => Number.isFinite(m.time) && !m.extraPrep && m.yieldPeople >= people && m.time > maxTime).length;
    const uncertain = withoutTime.filter(m => !Number.isFinite(m.time) || m.extraPrep || !m.yieldPeople || m.yieldPeople < people).length;
    const parts = [];
    if (longer) parts.push(`${longer} tarif seçtiğin süreden uzun`);
    if (uncertain) parts.push(`${uncertain} tarifin toplam süresi net değil`);
    $('#timeExclusionText').textContent = parts.length ? `${parts.join(' · ')}.` : 'Bu kategoride süre nedeniyle dışarıda kalan tarif yok.';
    timeInfo.hidden = false;
  }
  const recent = saved.history.slice(0,5).map(h => h.id);
  $('#resetSeen').hidden = eligible().length > 0 || !baseEligible().some(m => sessionSeen.includes(m.id) && !recent.includes(m.id) && m.id !== current?.id);
}
function timeText(m) { return Number.isFinite(m.time) ? `${m.time} dk` : (m.waitLabel || 'Doğrulanmadı'); }
function calorieText(m, count=1) { return Number.isFinite(m.cal) ? `≈ ${(m.cal*count).toLocaleString('tr-TR')} kcal` : 'Bilinmiyor'; }
function detailsText(m) {
  if (!m.source) return m.note;
  return `${m.variant} · Kaynak: ${m.yieldLabel}. ${m.prep} dk hazırlık + ${m.cook} dk pişirme.${m.waitLabel ? ` ${m.waitLabel}.` : ''} ${m.note} Eşlikçiler dahil değil.`;
}
function gcd(a, b) {
  while (b) [a, b] = [b, a % b];
  return a;
}
function friendlyNumber(value) {
  const rounded = Math.round(value);
  if (Math.abs(value - rounded) < 0.001) return String(rounded);
  // Mixed fractions such as “1 1/2” are hard to scan on a phone. Use a
  // decimal comma above one; reserve familiar fractions for values below one.
  if (value >= 1) return value.toLocaleString('tr-TR',{maximumFractionDigits:2});
  const familiar = [[1,4],[1,3],[1,2],[2,3],[3,4]];
  const match = familiar.find(([n,d]) => Math.abs(value - n/d) < 0.011);
  if (match) return `${match[0]}/${match[1]}`;
  return value.toLocaleString('tr-TR',{maximumFractionDigits:2});
}
function splitMeasure(value, unit, smallerUnit, factor) {
  const whole = Math.floor(value + 0.001);
  const remainder = (value - whole) * factor;
  const parts = [];
  if (whole) parts.push(`${whole} ${unit}`);
  if (remainder > 0.001) parts.push(`${friendlyNumber(remainder)} ${smallerUnit}`);
  return parts.join(' + ');
}
function practicalAmount(value, unit, name) {
  if (unit.endsWith('yemek kaşığı') || unit === 'çorba kaşığı') {
    if (value >= 1) {
      const halfStep = Math.round(value * 2) / 2;
      if (Math.abs(value - halfStep) < 0.011) return `${friendlyNumber(halfStep)} ${unit} ${name}`;
      const whole = Math.floor(value);
      const teaspoons = Math.round((value - whole) * 3 * 2) / 2;
      return `${whole} ${unit} + ${friendlyNumber(teaspoons)} çay kaşığı ${name}`;
    }
    return practicalAmount(value * 3, 'çay kaşığı', name);
  }
  if (unit.endsWith('tatlı kaşığı')) {
    if (Math.abs(value - Math.round(value)) < 0.011) return `${Math.round(value)} ${unit} ${name}`;
    const teaspoons = Math.max(0.25, Math.round(value * 2 * 2) / 2);
    return `yaklaşık ${friendlyNumber(teaspoons)} çay kaşığı ${name}`;
  }
  if (unit.endsWith('çay kaşığı')) {
    const step = value >= 1 ? 2 : 4;
    const usable = Math.max(0.25, Math.round(value * step) / step);
    const prefix = Math.abs(usable - value) > 0.001 ? 'yaklaşık ' : '';
    return `${prefix}${friendlyNumber(usable)} ${unit} ${name}`;
  }
  if (unit === 'gram' || unit === 'mililitre') {
    const usable = value >= 20 ? Math.round(value / 5) * 5 : Math.round(value);
    const prefix = Math.abs(usable - value) > 0.001 ? 'yaklaşık ' : '';
    return `${prefix}${usable} ${unit} ${name}`;
  }
  if (unit === 'su bardağı' && Math.abs(value - Math.round(value)) > 0.001) {
    const millilitres = Math.round(value * 200 / 5) * 5;
    const familiar = friendlyNumber(value);
    return familiar.includes('/') ? `${familiar} ${unit} ${name} (yaklaşık ${millilitres} ml)` : `yaklaşık ${millilitres} ml ${name}`;
  }
  if (unit === 'çay bardağı' && Math.abs(value - Math.round(value)) > 0.001) {
    const millilitres = Math.max(5, Math.round(value * 100 / 5) * 5);
    return `yaklaşık ${millilitres} ml ${name}`;
  }
  if (['kase','fincan','kahve fincanı','büyük su bardağı'].includes(unit) && Math.abs(value - Math.round(value)) > 0.001) {
    const nearest = Math.round(value);
    if (nearest >= 1 && Math.abs(value - nearest) <= 0.15) return `yaklaşık ${nearest} ${unit} ${name}`;
    if (value < 1) {
      const quarter = Math.max(.25, Math.round(value*4)/4);
      return `yaklaşık ${friendlyNumber(quarter)} ${unit} ${name}`;
    }
    const whole = Math.floor(value), remainder = value - whole;
    const fraction = remainder < .38 ? 'çeyrek' : remainder < .63 ? 'yarım' : 'dörtte üç';
    return `${whole} ${unit} + yaklaşık ${fraction} ${unit} ${name}`;
  }
  const countable = ['adet','diş','dal','yaprak','dilim','parça'].includes(unit);
  if (countable && Math.abs(value - Math.round(value)) > 0.001) {
    const shopping = Math.ceil(value);
    let usage;
    if (value < 1) {
      const fractions = [[.25,'dörtte birini'],[1/3,'1/3’ünü'],[.5,'yarısını'],[2/3,'2/3’ünü'],[.75,'dörtte üçünü'],[1,'tamamını']];
      const nearest = fractions.reduce((best, candidate) => Math.abs(candidate[0]-value) < Math.abs(best[0]-value) ? candidate : best);
      usage = value < .25 ? `%${Math.max(1, Math.round(value*100))}’ini` : nearest[1];
    }
    else {
      const rounded = Math.round(value * 4) / 4, whole = Math.floor(rounded), remainder = rounded - whole;
      const fraction = remainder < .125 ? '' : remainder < .375 ? ' ve çeyreğini' : remainder < .625 ? ' ve yarısını' : remainder < .875 ? ' ve dörtte üçünü' : '';
      usage = `${whole} ${unit}${fraction ? fraction.replace(' ve ', ' ve birinin ') : ''} kullan`;
    }
    return `${shopping} ${unit} ${name} al · yaklaşık ${usage}${value < 1 ? ' kullan' : ''}`;
  }
  const packaged = ['paket','kavanoz','konserve','kutu'].includes(unit) || unit.endsWith('demet');
  if (packaged && Math.abs(value - Math.round(value)) > 0.001) {
    const shopping = Math.ceil(value), whole = Math.floor(value), percent = Math.max(5, Math.round((value-whole) * 100 / 5) * 5);
    const usage = value < 1 ? `yaklaşık %${percent}'sini` : `${whole} ${unit} ve kalan paketin yaklaşık %${percent}'sini`;
    return `${shopping} ${unit} ${name} al · ${usage} kullan`;
  }
  const formatted = friendlyNumber(value);
  if (/\d+,\d{2,}/.test(formatted)) {
    const whole = Math.floor(value), percent = Math.round((value-whole)*100);
    return `yaklaşık ${whole ? `${whole} ${unit} + ` : ''}1 ${unit} ${name} ölçüsünün %${percent} kadarı`;
  }
  return `${formatted} ${unit} ${name}`;
}
function ingredientText(item, m, count=people) {
  if (typeof item === 'string') return item;
  let unit = item.unit;
  const scale = value => value * count / m.yieldPeople;
  if (Array.isArray(item.amount)) {
    const scaled = item.amount.map(scale);
    if (['adet','diş','dal','yaprak','dilim','parça'].includes(unit)) {
      return `${Math.ceil(Math.max(...scaled))} ${unit} ${item.name}`;
    }
    if (unit === 'su bardağı') {
      const millilitres = scaled.map(value => Math.round(value * 200 / 5) * 5);
      return `yaklaşık ${millilitres.join('–')} ml ${item.name}`;
    }
    if (unit === 'çay kaşığı') {
      const usable = scaled.map(value => Math.max(0.25, Math.round(value * (value >= 1 ? 2 : 4)) / (value >= 1 ? 2 : 4)));
      return `yaklaşık ${usable.map(friendlyNumber).join('–')} ${unit} ${item.name}`;
    }
    return `${scaled.map(value => friendlyNumber(value)).join('–')} ${unit} ${item.name}`;
  }
  let amount = scale(item.amount);
  if (unit === 'kilogram' && amount < 1) { unit = 'gram'; amount *= 1000; }
  if (unit === 'litre' && amount < 1) { unit = 'mililitre'; amount *= 1000; }
  return practicalAmount(amount, unit, item.name);
}
function refreshIngredientAmounts() {
  if (!current) return;
  if (selectedSides.size || $('#ingredients').shoppingCombined) { renderShopping(); return; }
  Array.from($('#ingredients').children).forEach((li, index) => {
    const label = li.children[0], input = label.children[0], span = label.children[1];
    const name = ingredientText(current.ingredients[index], current);
    span.textContent = name;
    input.setAttribute('aria-label', `${name} alındı`);
  });
  if (current.ingredients.length) $('#ingredientsNote').textContent = `${people} kişi için kaynak oranı korundu; ekranda uygulanabilir mutfak ölçüsüne çevrildi. Adetli ürünlerde alınacak miktar ve kullanılacak pay ayrı gösterilir.`;
}
function renderMetrics() {
  if (!current) return;
  $('#mealTime').textContent = timeText(current);
  $('#perCal').textContent = calorieText(current);
  $('#totalCal').textContent = calorieText(current, people);
  $('#portionNote').textContent = `${people} kişi için, kişi başı 1 kaynak porsiyonu varsayılır. ${current.cal === null ? 'Kalori hesaplanamıyor.' : 'Kalori, kaynağın yaklaşık porsiyon değeridir; bağımsız besin hesabı değildir.'}`;
  $('#filterWarning').hidden = matchesMeal(current, filters());
}
function renderHeart() {
  const fav = saved.favorites.includes(current?.id);
  $('#heart').classList.toggle('active', fav);
  $('#heart').setAttribute('aria-pressed', String(fav));
  $('#heart').setAttribute('aria-label', fav ? 'Favorilerden çıkar' : 'Favoriye ekle');
}
function showMeal(m) {
  selectedSides.clear();
  $('#ingredients').shoppingCombined = false;
  current = m;
  if (!sessionSeen.includes(m.id)) sessionSeen.push(m.id);
  $('#mealCard').classList.remove('hidden');
  $('#mealMode').textContent = m.mode;
  $('#mealSubcategory').textContent = m.subcategory;
  $('#mealName').textContent = m.name;
  $('#mealMenu').textContent = detailsText(m);
  $('#sourceActions').hidden = !m.source;
  if (m.source) $('#sourceLink').setAttribute('href', m.source);
  else $('#sourceLink').removeAttribute('href');
  const pairing = menuPairings[m.id];
  $('#menuBuilder').hidden = !pairing;
  $('#menuSuggestions').hidden = true;
  $('#menuSuggestions').replaceChildren();
  $('#buildMenu').textContent = 'Menü oluştur';
  $('#ingredients').replaceChildren();
  for (const [index, item] of m.ingredients.entries()) {
    const name = ingredientText(item, m);
    const li = document.createElement('li'), label = document.createElement('label'), input = document.createElement('input'), span = document.createElement('span');
    li.shoppingKey = typeof item === 'object' && Number.isFinite(item.amount) && m.yieldPeople > 0 ? JSON.stringify([item.name, item.unit]) : `${m.id}:${index}`;
    input.type = 'checkbox'; input.setAttribute('aria-label', `${name} alındı`); span.textContent = name;
    label.append(input, span); li.append(label); $('#ingredients').append(li);
  }
  $('#ingredientsNote').textContent = m.ingredients.length ? `${people} kişi için kaynak ölçülerinden orantılandı. Adet olarak bölünemeyen ürünleri alışverişte yukarı yuvarlayabilirsiniz.` : 'Doğrulanmış malzeme listesi yok; yanlış yönlendirmemek için gösterilmiyor.';
  renderMetrics(); renderHeart(); updateStatus();
}
$('#sourceLink').onclick = event => {
  if (!current?.source) return;
  event?.preventDefault?.();
  // Same-window navigation is reliable in iPhone standalone/PWA mode; the
  // browser's back action returns to the current card.
  window.location.assign(current.source);
};
$('#copySource').onclick = async () => {
  if (!current?.source) return;
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(current.source);
    toast('Tarif bağlantısı kopyalandı.');
  } catch {
    window.prompt('Tarif bağlantısını kopyalayın:', current.source);
  }
};
const selectedSides = new Map();
const companionIds = {'Çoban salata':'meal-141', 'Karnabahar çorbası':'meal-136', 'Mercimek çorbası':'meal-23'};
function shoppingItems() {
  const rows = new Map();
  for (const recipe of [current, ...selectedSides.values()]) {
    recipe.ingredients.forEach((item, index) => {
      const numeric = typeof item === 'object' && Number.isFinite(item.amount) && recipe.yieldPeople > 0;
      const key = numeric ? JSON.stringify([item.name, item.unit]) : `${recipe.id}:${index}`;
      const amount = numeric ? item.amount * people / recipe.yieldPeople : null;
      if (rows.has(key)) rows.get(key).item.amount += amount;
      else rows.set(key, {key, item: numeric ? {...item, amount} : item, recipe: numeric ? {yieldPeople:people} : recipe});
    });
  }
  return [...rows.values()];
}
function renderShopping() {
  $('#ingredients').shoppingCombined = true;
  const checked = new Set(Array.from($('#ingredients').children).filter(li => li.children[0].children[0].checked).map(li => li.shoppingKey));
  $('#ingredients').replaceChildren();
  for (const row of shoppingItems()) {
    const li = document.createElement('li'), label = document.createElement('label'), input = document.createElement('input'), span = document.createElement('span');
    li.shoppingKey = row.key;
    const text = ingredientText(row.item, row.recipe);
    input.type = 'checkbox'; input.checked = checked.has(row.key); input.setAttribute('aria-label', `${text} alındı`); span.textContent = text;
    label.append(input, span); li.append(label); $('#ingredients').append(li);
  }
  $('#ingredientsNote').textContent = `${people} kişi için: ${[current, ...selectedSides.values()].map(m => m.name).join(' + ')}. Aynı ad ve birimdeki malzemeler toplandı. Seçilmemiş öneriler dahil değil; miktarı olmayan malzemeler ölçüsüz gösterilir. Üstteki süre ve kalori yalnızca ana tarifindir.`;
}
function renderMenu() {
  const pairing = current && menuPairings[current.id];
  if (!pairing) return;
  const box = $('#menuSuggestions');
  box.replaceChildren();
  const groups = new Map();
  for (const item of pairing.items) {
    if (!groups.has(item.kind)) groups.set(item.kind, []);
    groups.get(item.kind).push(item.name);
  }
  for (const [category, names] of groups) {
    const row = document.createElement('div');
    const kind = document.createElement('span');
    const name = document.createElement('strong');
    kind.textContent = ['Ana yemek', 'Tatlı', 'İçecek'].includes(category) ? `${category} · isteğe bağlı` : category;
    name.textContent = names.join(' veya ');
    row.append(kind, name);
    const select = document.createElement('select');
    select.setAttribute('aria-label', `${category} seçimi`);
    const none = document.createElement('option'); none.value = ''; none.textContent = 'Ekleme'; select.append(none);
    for (const item of pairing.items.filter(item => item.kind === category)) {
      const recipe = byId.get(item.catalogId || companionIds[item.name]);
      const option = document.createElement('option');
      option.value = recipe?.id || ''; option.disabled = !recipe || recipe.status !== 'sourced';
      option.textContent = option.disabled ? `${item.name} · tarif bekleniyor` : recipe.name + (recipe.ingredients.some(x => typeof x === 'string') ? ' · malzemeler ölçüsüz' : '');
      select.append(option);
    }
    select.value = selectedSides.get(category)?.id || '';
    select.onchange = () => {
      const recipe = byId.get(select.value);
      if (recipe?.status === 'sourced') selectedSides.set(category, recipe);
      else selectedSides.delete(category);
      renderShopping();
    };
    row.append(select);
    box.append(row);
  }
  const note = document.createElement('p');
  note.textContent = 'Her gruptan bir eşlikçi seçebilirsiniz. Seçtikleriniz alışveriş listesine eklenir. Ölçülü tarifi henüz hazır olmayanlar öneri olarak kalır. Menüyü gizlemek seçimleri kaldırmaz. Süre ve kalori yalnızca ana tarifindir.';
  box.append(note);
  box.hidden = false;
  $('#buildMenu').textContent = 'Menüyü gizle';
}
$('#buildMenu').onclick = () => {
  if (!current || !menuPairings[current.id]) return;
  if (!$('#menuSuggestions').hidden) {
    $('#menuSuggestions').hidden = true;
    $('#buildMenu').textContent = 'Menü oluştur';
    return;
  }
  renderMenu();
};
function pick() {
  const list = eligible();
  if (!list.length) { updateStatus(); toast('Yeni seçenek kalmadı. Filtreyi değiştirin veya gösterilenleri yeniden dahil edin.'); return; }
  // Synchronous selection: no queued timer can overwrite a newer choice or filter.
  showMeal(list[Math.floor(Math.random()*list.length)]);
  const wheel = $('#wheel'); wheel.classList.remove('spinning'); void wheel.offsetWidth; wheel.classList.add('spinning');
}
let toastTimer;
function toast(text) { clearTimeout(toastTimer); $('#toast').textContent = text; $('#toast').classList.add('show'); toastTimer = setTimeout(() => $('#toast').classList.remove('show'), 4000); }
function renderHistory() {
  const box = $('#historyList'); box.replaceChildren();
  for (const h of saved.history.slice(0,5)) { const span = document.createElement('span'); span.textContent = byId.get(h.id).name; box.append(span); }
  if (!saved.history.length) { const span = document.createElement('span'); span.textContent = 'Henüz kayıt yok'; box.append(span); }
  updateStatus();
}
function changePeople(delta) {
  people = Math.max(1, Math.min(8, people + delta)); $('#people').textContent = people;
  $('#minus').disabled = people === 1; $('#plus').disabled = people === 8;
  renderMetrics(); refreshIngredientAmounts(); updateStatus();
}
$('#minus').onclick = () => changePeople(-1); $('#plus').onclick = () => changePeople(1);
function filtersChanged() { sessionSeen = []; renderMetrics(); updateStatus(); }
$('#modes').onclick = e => { const button = e.target.closest('button[data-mode]'); if (!button) return; mode = button.dataset.mode; document.querySelectorAll('#modes button').forEach(b => b.classList.toggle('active', b === button)); filtersChanged(); };
for (const id of ['time', 'calorie']) $(`#${id}`).onchange = filtersChanged;
$('#clearTime').onclick = () => { $('#time').value = 'Infinity'; filtersChanged(); };
$('#spin').onclick = pick; $('#again').onclick = pick;
$('#resetSeen').onclick = () => { sessionSeen = []; updateStatus(); toast('Gösterilenler tekrar dahil edildi. Son yediğiniz 5 yemek hâlâ hariç.'); };
$('#heart').onclick = () => {
  if (!current) return;
  const i = saved.favorites.indexOf(current.id);
  i < 0 ? saved.favorites.push(current.id) : saved.favorites.splice(i, 1);
  persist(); renderHeart();
};
$('#favoritesButton').onclick = () => {
  const list = baseEligible().filter(m => saved.favorites.includes(m.id) && m.id !== current?.id);
  if (!list.length) return toast('Bu filtrelere uygun başka favori yok.');
  showMeal(list[Math.floor(Math.random()*list.length)]);
};
$('#ate').onclick = () => {
  if (!current) return;
  saved.history = [{id:current.id, date:new Date().toISOString()}, ...saved.history.filter(h => h.id !== current.id)].slice(0,10);
  persist(); toast('Kaydedildi. Son yediğiniz 5 yemek rastgele seçimden çıkarılır.');
};
function wrapLines(ctx, text, width) {
  const lines = []; let line = '';
  for (const word of text.split(/\s+/)) { const next = line ? `${line} ${word}` : word; if (ctx.measureText(next).width > width && line) { lines.push(line); line = word; } else line = next; }
  if (line) lines.push(line); return lines;
}
function shareLines(m, count) {
  return [m.mode, m.name, detailsText(m), `Kaynak süresi: ${timeText(m)}`, `1 porsiyon: ${calorieText(m)} · ${count} porsiyon: ${calorieText(m,count)}`, 'Malzemeler seçilen kişi sayısına göre orantılanır. Eşlikçiler dahil değildir.', ...(m.source ? ['Kaynak: '+m.source] : []), 'Ne Pişse? · Bu akşamın yemek fikri'];
}
async function shareCard() {
  if (!current || $('#share').disabled) return;
  const meal = current, count = people;
  $('#share').disabled = true;
  try {
    const canvas = document.createElement('canvas'), ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas unavailable');
    canvas.width = 1080; ctx.font = '32px system-ui';
    const sections = shareLines(meal, count).map(text => wrapLines(ctx, text, 820));
    canvas.height = Math.max(1080, 220 + sections.reduce((n, lines) => n + lines.length * 48 + 34, 0));
    ctx.fillStyle = '#F1ECD8'; ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = '#8E342B'; ctx.fillRect(60,60,960,canvas.height-120);
    ctx.fillStyle = '#F1ECD8'; ctx.font = '32px system-ui'; let y = 130;
    for (const lines of sections) { for (const line of lines) { ctx.fillText(line, 120, y); y += 48; } y += 34; }
    const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
    if (!blob) throw new Error('PNG unavailable');
    const file = new File([blob], `ne-pisse-${meal.id}.png`, {type:'image/png'});
    if (navigator.share && navigator.canShare?.({files:[file]})) await navigator.share({files:[file], title:meal.name});
    else {
      const url = URL.createObjectURL(blob), a = document.createElement('a'); a.href = url; a.download = file.name;
      document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000); toast('Yemek kartı PNG olarak indirildi.');
    }
  } catch (error) { toast(error.name === 'AbortError' ? 'Paylaşım iptal edildi.' : 'Kart paylaşılamadı. Lütfen tekrar deneyin.'); }
  finally { $('#share').disabled = false; }
}
$('#share').onclick = shareCard;
persist();
if ('serviceWorker' in navigator) window.addEventListener('load', () => {
  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  });
  navigator.serviceWorker.register('sw.js', {updateViaCache:'none'})
    .then(registration => registration.update())
    .catch(() => toast('Çevrimdışı kullanım etkinleştirilemedi.'));
});
