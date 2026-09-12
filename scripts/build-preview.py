import base64, os.path, re, sys

DIST = 'dist'
OUT  = 'ne-pisse-onizleme.html'

html = open(f'{DIST}/index.html', encoding='utf-8').read()
css  = open(f'{DIST}/style.css',  encoding='utf-8').read()
cat  = open(f'{DIST}/catalog.js', encoding='utf-8').read()
app  = open(f'{DIST}/app.js',     encoding='utf-8').read()

# Remove the whole service-worker registration block by brace matching,
# never by regex: the block contains semicolons inside its callbacks.
marker = "if ('serviceWorker' in navigator)"
i = app.find(marker)
if i == -1:
    sys.exit('service worker block not found - check app.js')
j = app.index('{', i)
depth = 0
for k in range(j, len(app)):
    if app[k] == '{': depth += 1
    elif app[k] == '}':
        depth -= 1
        if depth == 0:
            end = k + 1
            break
else:
    sys.exit('unbalanced braces in service worker block')
while end < len(app) and app[end] in ');\n':
    end += 1
app = app[:i] + '/* service worker: onizlemede devre disi */\n' + app[end:]

# Fontlar tek dosyalik onizlemede yan yana durmaz; goreli url(fonts/...) yolu
# cozulmez ve tipografi Georgia'ya duserdi. Onizlemenin amaci tasarimi
# gostermek oldugu icin woff2 dosyalari data URI olarak gomulur.
def embed_font(match):
    rel = match.group(1)
    path = os.path.join(DIST, rel)
    if not os.path.exists(path):
        sys.exit(f'onizleme icin font bulunamadi: {path}')
    with open(path, 'rb') as f:
        data = base64.b64encode(f.read()).decode('ascii')
    return f"url(data:font/woff2;base64,{data})"

css, embedded = re.subn(r'url\((fonts/[^)]+\.woff2)\)', embed_font, css)
if embedded == 0:
    sys.exit('style.css icinde gomulecek font bulunamadi - yol degismis olabilir')

html = re.sub(r'<link rel="stylesheet" href="style\.css[^"]*"\s*/?>',
              lambda m: f'<style>{css}</style>', html)
html = re.sub(r'<script src="catalog\.js[^"]*"></script>',
              lambda m: f'<script>{cat}</script>', html)
html = re.sub(r'<script src="app\.js[^"]*"></script>',
              lambda m: f'<script>{app}</script>', html)
html = re.sub(r'<link rel="manifest"[^>]*>', '', html)

open(OUT, 'w', encoding='utf-8').write(html)

# Verify every inlined script parses before declaring success.
import subprocess, tempfile, os
for n, block in enumerate(re.findall(r'<script>(.*?)</script>', html, re.S)):
    with tempfile.NamedTemporaryFile('w', suffix='.js', delete=False, encoding='utf-8') as f:
        f.write(block); path = f.name
    r = subprocess.run(['node', '--check', path], capture_output=True, text=True)
    os.unlink(path)
    if r.returncode != 0:
        sys.exit(f'SYNTAX ERROR in inlined script #{n}:\n{r.stderr}')
    print(f'script #{n}: OK ({len(block)} chars)')
print('preview built and verified:', OUT)
