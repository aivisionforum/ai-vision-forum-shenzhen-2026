import type { Metadata } from "next";
import ChineseFontPreview from "./ChineseFontPreview";

export const metadata: Metadata = {
  title: "中文字体预览 · 两日议题 | AIVF’26",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ChineseFontPreview />;
}
