const CACHE = 'ne-pisse-v42';
const ASSETS = ['./', 'index.html', 'style.css', 'catalog.js', 'app.js', 'manifest.webmanifest', 'icons/icon.svg', 'icons/icon-180.png', 'icons/icon-192.png', 'icons/icon-512.png',
  // Fontlar onbellege alinmazsa cevrimdisi acilista arayuz Georgia'ya duser.
  'fonts/inter-latin.woff2', 'fonts/inter-latin-ext.woff2', 'fonts/lora-latin.woff2', 'fonts/lora-latin-ext.woff2', 'fonts/lora-latin-italic.woff2', 'fonts/lora-latin-ext-italic.woff2'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil(caches.keys()
  .then(keys => Promise.all(keys.filter(key => key.startsWith('ne-pisse-') && key !== CACHE).map(key => caches.delete(key))))
  .then(() => self.clients.claim())));
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(caches.open(CACHE).then(async cache => {
    try {
      const response = await fetch(event.request);
      if (response.ok) cache.put(event.request, response.clone());
      return response;
    } catch {
      return (await cache.match(event.request)) || (event.request.mode === 'navigate' ? cache.match('index.html') : Response.error());
    }
  }));
});
