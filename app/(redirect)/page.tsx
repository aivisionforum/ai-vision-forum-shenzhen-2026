import Link from "next/link";
import { EVENT_BRAND } from "@/lib/constants";

const redirectScript = `
(() => {
  const supported = ['en', 'zh-cn'];
  let locale;

  try {
    const saved = window.localStorage.getItem('aivf-locale');
    if (saved && supported.includes(saved)) locale = saved;
  } catch {}

  if (!locale) {
    const languages = navigator.languages?.length
      ? navigator.languages
      : [navigator.language || 'en'];
    const preferred = languages
      .map((language) => language.toLowerCase())
      .find((language) => language.startsWith('zh') || language.startsWith('en'));
    locale = preferred?.startsWith('zh')
      ? 'zh-cn'
      : 'en';
  }

  window.location.replace('/' + locale + '/' + window.location.search + window.location.hash);
})();
`;

export default function LocaleRedirectPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-background px-6 text-center">
      <script dangerouslySetInnerHTML={{ __html: redirectScript }} />
      <div>
        <p className="text-sm font-black uppercase tracking-[0.14em] text-muted-foreground">
          {EVENT_BRAND.bilingual} Shenzhen 2026
        </p>
        <p className="mt-4 text-lg font-semibold">Choosing your language…</p>
        <noscript>
          <p className="mt-6">
            <Link className="underline" href="/en/">English</Link>
            {" · "}
            <Link className="underline" href="/zh-cn/">中文</Link>
          </p>
        </noscript>
      </div>
    </main>
  );
}
