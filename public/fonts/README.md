# Site typography

English: Source Serif 4, self-hosted variable WOFF2 (Latin and Latin Extended).
English headings and body: 500, base body size 18px, optical sizing enabled.
Chinese: Source Han Serif CN SemiBold (600) for headings and editorial display,
Medium (500) for body. Navigation and captions retain their compact sizes.

Chinese faces have separate family names and CJK-only unicode ranges. Their
static outlines supply the chosen weight while CSS stays at 500 for Latin.
The old SourceHanSerifCN-subset.woff2 remains available for the original preview
and as a fallback. The comparison page shares the production font assets.

Chinese fonts are subset to characters used in app/, components/, lib/, and i18n/.
After adding Chinese text, regenerate with scripts/subset-chinese-fonts.py.
Source: Adobe Source Han Serif release 2.003R, 14_SourceHanSerifCN.zip.
License: source-han-serif-OFL.txt.
Upstream: https://github.com/adobe-fonts/source-han-serif

Source Serif 4 assets originate from the Google Fonts CSS API.
License: source-serif-4-OFL.txt.
Upstream: https://github.com/adobe-fonts/source-serif

Other font candidates remain in preview/.
