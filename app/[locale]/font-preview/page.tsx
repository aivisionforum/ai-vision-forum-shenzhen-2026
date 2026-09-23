import type { Metadata } from "next";
import FontPreview from "./FontPreview";

export const metadata: Metadata = {
  title: "英文选字室 · AI Vision Forum",
  robots: { index: false, follow: false },
};

export default function FontPreviewPage() {
  return <FontPreview />;
}
