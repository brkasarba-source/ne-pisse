#!/usr/bin/env python3
"""Lora ve Inter fontlarini dist/fonts/ icine self-host icin uretir.

Neden: CDN kullanmak cevrimdisi acilisi bozar, sistemde font yoksa arayuz
Georgia'ya duser. Tam font dosyalari ~250 KB; uygulama metni sabit oldugu
icin yalnizca gercekten kullanilan karakterler alinir (~40 KB).

Kullanim:
    npm install                      # @fontsource-variable/* devDependency
    python3 scripts/build-fonts.py

Karakter kumesi dist/ icindeki metinden cikarilir, ustune Turkce alfabesi ve
arayuzde kullanilan tipografik isaretler eklenir. Script yazmadan once her
dosyanin kapsamini dogrular: gereken bir karakter subset'te yoksa hata verir
ve hicbir sey yazilmaz. Yeni bir karakter (ornegin yeni bir simge) arayuze
girerse bu script tekrar calistirilmalidir.
"""
import subprocess
import sys
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / "dist"
OUT = DIST / "fonts"
MODULES = ROOT / "node_modules" / "@fontsource-variable"

# Metnin gectigi her dosya: katalog tarif adlari, app.js arayuz metinleri,
# index.html sabit etiketleri. Kod noktalama isaretleri de ASCII oldugu icin
# hepsini almak maliyetsiz.
SOURCES = ["catalog.js", "app.js", "index.html", "style.css", "manifest.webmanifest"]

# Kaynak metinde bulunmasa bile garanti altina alinan karakterler: Turkce
# alfabesinin tamami (yeni tarif adlari icin) ve arayuzde kullanilan isaretler.
EXTRA = (
    "abcdefghijklmnopqrstuvwxyz"
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    "0123456789"
    "çÇğĞıİöÖşŞüÜâÂîÎûÛ"
    " .,:;!?'\"()[]{}<>/\\|-_+=*&%#@~^$"
    "·…‘’“”–—≈°×÷↗↑→↓←✓♡♥№€₺"
)

# Hangi yuz hangi dosyadan uretilir. fontsource dosyalari zaten alt kumelere
# bolunmus durumda; ikisi de gerekli cunku Turkce s-cedilla (U+015F) ve
# g-breve (U+011F) latin-ext'te, i-dotless (U+0131) latin'de.
FACES = [
    ("inter", "normal", "inter-latin-wght-normal.woff2", "inter-latin.woff2"),
    ("inter", "normal", "inter-latin-ext-wght-normal.woff2", "inter-latin-ext.woff2"),
    ("lora", "normal", "lora-latin-wght-normal.woff2", "lora-latin.woff2"),
    ("lora", "normal", "lora-latin-ext-wght-normal.woff2", "lora-latin-ext.woff2"),
    ("lora", "italic", "lora-latin-wght-italic.woff2", "lora-latin-italic.woff2"),
    ("lora", "italic", "lora-latin-ext-wght-italic.woff2", "lora-latin-ext-italic.woff2"),
]


def wanted_characters() -> set:
    chars = set(EXTRA)
    for name in SOURCES:
        path = DIST / name
        if not path.exists():
            sys.exit(f"kaynak dosya yok: {path}")
        chars |= set(path.read_text(encoding="utf-8"))
    # Kontrol karakterleri ve ozel alanlar fontta zaten yok.
    return {c for c in chars if c.isprintable() or c == " "}


def font_cmap(path: Path) -> set:
    from fontTools.ttLib import TTFont

    with TTFont(path, fontNumber=0, lazy=True) as font:
        return {chr(code) for table in font["cmap"].tables for code in table.cmap}


def main() -> None:
    if not MODULES.exists():
        sys.exit("@fontsource-variable paketleri yok. Once 'npm install' calistir.")
    OUT.mkdir(parents=True, exist_ok=True)
    wanted = wanted_characters()
    text_file = OUT / "_subset-chars.txt"
    text_file.write_text("".join(sorted(wanted)), encoding="utf-8")

    total = 0
    try:
        for package, style, source_name, output_name in FACES:
            source = MODULES / package / "files" / source_name
            if not source.exists():
                sys.exit(f"font dosyasi yok: {source}")
            target = OUT / output_name
            # Kaynakta olmayan karakter beklenmez; her dosya kendi alt
            # kumesinin disini zaten kapsamaz, bu yuzden kesisim alinir.
            available = font_cmap(source)
            expected = wanted & available
            if not expected:
                sys.exit(f"{source_name} icin gereken karakter yok")
            subprocess.run(
                [
                    sys.executable, "-m", "fontTools.subset", str(source),
                    f"--text-file={text_file}",
                    "--flavor=woff2",
                    "--ignore-missing-unicodes",
                    f"--output-file={target}",
                ],
                check=True,
                capture_output=True,
            )
            produced = font_cmap(target)
            missing = expected - produced
            if missing:
                names = ", ".join(
                    f"{c!r} (U+{ord(c):04X} {unicodedata.name(c, '?')})"
                    for c in sorted(missing)
                )
                sys.exit(f"{output_name} eksik karakter iceriyor: {names}")
            size = target.stat().st_size
            total += size
            print(f"{output_name}: {len(produced)} karakter, {size/1024:.1f} KB")
    finally:
        text_file.unlink(missing_ok=True)
    print(f"toplam {total/1024:.1f} KB, {len(FACES)} dosya dogrulandi")


if __name__ == "__main__":
    main()
