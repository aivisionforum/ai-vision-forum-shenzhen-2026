"""Regenerate production Chinese subsets from Adobe's 14_SourceHanSerifCN.zip.

Requires: pip install fonttools brotli
Usage: python scripts/subset-chinese-fonts.py /path/to/14_SourceHanSerifCN.zip
Source: https://github.com/adobe-fonts/source-han-serif/releases/tag/2.003R
"""

import argparse
from io import BytesIO
from pathlib import Path
from zipfile import ZipFile

from fontTools import subset
from fontTools.ttLib import TTFont


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("archive", type=Path)
    args = parser.parse_args()
    root = Path(__file__).resolve().parents[1]
    codepoints = set()
    for directory in ("app", "components", "lib", "i18n"):
        for path in (root / directory).rglob("*"):
            if path.suffix not in (".ts", ".tsx", ".json"):
                continue
            for char in path.read_text(encoding="utf-8"):
                cp = ord(char)
                if (0x2E80 <= cp <= 0x9FFF or 0xF900 <= cp <= 0xFAFF
                        or 0xFF00 <= cp <= 0xFFEF or 0x2000 <= cp <= 0x206F):
                    codepoints.add(cp)

    with ZipFile(args.archive) as archive:
        for style, weight in (("Medium", 500), ("SemiBold", 600)):
            font = TTFont(BytesIO(archive.read(f"SubsetOTF/CN/SourceHanSerifCN-{style}.otf")))
            if font["OS/2"].usWeightClass != weight:
                raise ValueError(f"Unexpected source weight for {style}")
            missing = codepoints - set(font.getBestCmap())
            if missing:
                raise ValueError(f"Source font lacks: {''.join(chr(cp) for cp in sorted(missing))}")
            subsetter = subset.Subsetter(options=subset.Options())
            subsetter.populate(unicodes=codepoints)
            subsetter.subset(font)
            font.flavor = "woff2"
            output = root / "public/fonts" / f"source-han-serif-cn-{style.lower()}.woff2"
            font.save(output)
            print(f"{output.name}: {len(codepoints)} characters, weight {weight}")


if __name__ == "__main__":
    main()
