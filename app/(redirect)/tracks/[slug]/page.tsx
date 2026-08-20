import { PROGRAM_DAYS } from "@/lib/program";

export function generateStaticParams() {
  return PROGRAM_DAYS.flatMap((day) => day.topics.map((topic) => ({ slug: topic.slug })));
}

export default async function TrackRedirectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const redirectScript = `
(() => {
  const supported = ['en', 'zh-cn'];
  let locale;
  try {
    const saved = window.localStorage.getItem('aivf-locale');
    if (saved && supported.includes(saved)) locale = saved;
  } catch {}
  if (!locale) {
    const languages = navigator.languages?.length ? navigator.languages : [navigator.language || 'en'];
    const preferred = languages.map((l) => l.toLowerCase()).find((l) => l.startsWith('zh') || l.startsWith('en'));
    locale = preferred?.startsWith('zh') ? 'zh-cn' : 'en';
  }
  window.location.replace('/' + locale + '/tracks/${slug}/');
})();
`;
  return (
    <main className="grid min-h-screen place-items-center bg-background px-6 text-center">
      <script dangerouslySetInnerHTML={{ __html: redirectScript }} />
      <p>
        <a className="underline" href={`/en/tracks/${slug}/`}>English</a>
        {" · "}
        <a className="underline" href={`/zh-cn/tracks/${slug}/`}>中文</a>
      </p>
    </main>
  );
}
