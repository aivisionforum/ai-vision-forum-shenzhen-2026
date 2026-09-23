"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n";
import styles from "./preview.module.css";

const fonts = [
  { id: "source-serif", name: "Source Serif 4", tag: "首选 · 均衡优雅", description: "保留书卷气，字形舒展。想延续现在的优雅气质，可以先从这一款看起。", family: '"SourceHanSerif", "Preview Source Serif 4", Georgia, serif', source: "https://fonts.google.com/specimen/Source+Serif+4" },
  { id: "lora", name: "Lora", tag: "柔和 · 有个性", description: "曲线更温润，带一点书写感。适合希望标题有辨识度、正文也有温度的方向。", family: '"SourceHanSerif", "Preview Lora", Georgia, serif', source: "https://fonts.google.com/specimen/Lora" },
  { id: "literata", name: "Literata", tag: "沉稳 · 阅读感", description: "更浓的书籍气质，视觉重心稳。可以重点观察长段落与小字号的阅读感受。", family: '"SourceHanSerif", "Preview Literata", Georgia, serif', source: "https://fonts.google.com/specimen/Literata" },
  { id: "source-sans", name: "Source Sans 3", tag: "简洁 · 现代", description: "无衬线对照方案，线条简洁。看看你更喜欢宋体搭配衬线英文，还是更现代的组合。", family: '"SourceHanSerif", "Preview Source Sans 3", sans-serif', source: "https://fonts.google.com/specimen/Source+Sans+3" },
] as const;

const originalFamily = '"SourceHanSerif", "Bodoni MT", "Didot", "Songti SC", Georgia, serif';
const defaultText = "Two focused forums on open source and the AI-native enterprise. A space for thoughtful conversations about AgentOS, agentic software engineering, and the future of human–AI collaboration.";
type PreviewStyle = CSSProperties & { "--sample-font": string; "--sample-weight"?: number; "--heading-weight"?: number; "--sample-size"?: string };

export default function FontPreview() {
  const { locale } = useTranslation();
  const [selected, setSelected] = useState(0);
  const [bodyWeight, setBodyWeight] = useState(500);
  const [headingWeight, setHeadingWeight] = useState(500);
  const [size, setSize] = useState(18);
  const [mixed, setMixed] = useState(true);
  const [compare, setCompare] = useState(true);
  const [surface, setSurface] = useState("blue");
  const [text, setText] = useState(defaultText);
  const [fontStatus, setFontStatus] = useState("字体加载中…");
  const [copied, setCopied] = useState(false);
  const font = fonts[selected];
  const summary = `${font.name}；标题 ${headingWeight}；正文 ${bodyWeight} / ${size}px；中文保留当前思源宋体。`;

  useEffect(() => {
    let active = true;
    Promise.all([
      document.fonts.load(`${bodyWeight} 18px "Preview ${font.name}"`),
      document.fonts.load(`${headingWeight} 48px "Preview ${font.name}"`),
    ]).then((loaded) => {
      if (active) setFontStatus(loaded.every((faces) => faces.length > 0) ? "字体已就绪" : "字体未加载，请刷新后重试");
    }).catch(() => { if (active) setFontStatus("字体未加载，请刷新后重试"); });
    return () => { active = false; };
  }, [font.name, bodyWeight, headingWeight]);

  function reset() {
    setSelected(0); setBodyWeight(500); setHeadingWeight(500); setSize(18);
    setMixed(true); setCompare(true); setSurface("blue"); setText(defaultText);
    setCopied(false);
  }

  function specimen(original: boolean) {
    const sampleStyle: PreviewStyle = {
      "--sample-font": original ? originalFamily : font.family,
      "--sample-weight": original ? 400 : bodyWeight,
      "--heading-weight": original ? 500 : headingWeight,
      "--sample-size": `${size}px`,
    };
    return (
      <article className={styles.specimen} style={sampleStyle} data-surface={surface} data-testid={original ? "original" : "candidate"}>
        <div className={styles.sampleLabel}>
          <span>{original ? "原方案 · 系统 Bodoni / Didot" : `候选 · ${font.name}`}</span>
          <span>{original ? "标题 500 / 正文 400" : `标题 ${headingWeight} / 正文 ${bodyWeight}`}</span>
        </div>
        <div className={styles.sampleContent}>
          <nav className={styles.sampleNav} aria-label={original ? "原方案导航示例" : "候选导航示例"}>
            <span>AI VISION FORUM</span><span>About · Program · Join us ↗</span>
          </nav>
          <p className={styles.eyebrow}>OCTOBER 14–15 · ZHUHAI, CHINA</p>
          {mixed && <p className={styles.chineseTitle}>AI 愿景论坛</p>}
          <h2 className={styles.sampleHeading}>AI Vision Forum<span>Shenzhen 2026</span></h2>
          <p className={styles.sampleSubtitle}>{mixed ? "构建人机协同新范式" : "Building the next chapter of human–AI collaboration."}</p>
          <p className={styles.sampleBody}>{text || defaultText}</p>
          {mixed && <p className={styles.mixedBody}>从开源生态到 AI 原生组织，围绕 AgentOS 与智能体软件工程展开深度对话。让技术、思想与实践在这里相遇。</p>}
          <div className={styles.sampleActions}><span>Explore the program ↗</span><span>View schedule →</span></div>
          <div className={styles.sampleSchedule}>
            <div><span className={styles.day}>14</span><div><h3>Open Source Day</h3><p>AgentOS · Open Ecosystems</p></div></div>
            <div><span className={styles.day}>15</span><div><h3>Enterprise Day</h3><p>The AI-Native Organization</p></div></div>
          </div>
          <p className={styles.smallSample}>小字对照 · 14px<br /><span>Registration opens at 09:00. Join 100–150 leaders for two days of thoughtful exchange.</span></p>
        </div>
      </article>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <div className={styles.topline}><span>AI VISION FORUM / TYPE STUDY 01</span><Link href={`/${locale}/`}>返回首页 ↗</Link></div>
        <header className={styles.intro}>
          <div><p className={styles.kicker}>英文选字室</p><h1>优雅，也要清晰。</h1></div>
          <p>用同一段内容，找到更舒服的英文。<br />先选字体，再调字重；中文沿用当前思源宋体。<br /><span>这里的调整仅用于预览，选定后再统一应用。</span></p>
        </header>

        <div className={styles.choices} role="group" aria-label="选择英文候选字体">
          {fonts.map((option, index) => (
            <button key={option.id} type="button" aria-pressed={selected === index} className={styles.choice} onClick={() => { if (selected !== index) { setSelected(index); setFontStatus("字体加载中…"); } setCopied(false); }}>
              <span className={styles.choiceTop}><span>0{index + 1}</span><span>{selected === index ? "● 已选" : "○ 试试看"}</span></span>
              <span className={styles.choiceName} style={{ "--sample-font": option.family } as PreviewStyle}>{option.name}</span>
              <span className={styles.choiceTag}>{option.tag}</span>
              <span className={styles.choiceDescription}>{option.description}</span>
            </button>
          ))}
        </div>

        <section className={styles.controls} aria-label="预览设置">
          <div className={styles.controlGrid}>
            <label>标题字重 <output>{headingWeight}</output><input aria-label="标题字重" type="range" min="400" max="700" step="50" value={headingWeight} onChange={(event) => { setHeadingWeight(Number(event.target.value)); setCopied(false); }} /></label>
            <label>正文字重 <output>{bodyWeight}</output><input aria-label="正文字重" type="range" min="400" max="700" step="50" value={bodyWeight} onChange={(event) => { setBodyWeight(Number(event.target.value)); setCopied(false); }} /></label>
            <label>正文字号 <output>{size}px</output><input aria-label="正文字号" type="range" min="16" max="22" step="1" value={size} onChange={(event) => { setSize(Number(event.target.value)); setCopied(false); }} /></label>
            <label>背景<select aria-label="背景" value={surface} onChange={(event) => setSurface(event.target.value)}><option value="blue">网站浅蓝</option><option value="white">纯白纸面</option><option value="dark">深色反白</option></select></label>
          </div>
          <div className={styles.controlFooter}>
            <div><label><input type="checkbox" checked={compare} onChange={(event) => setCompare(event.target.checked)} /> 并排看原方案</label><label><input type="checkbox" checked={mixed} onChange={(event) => setMixed(event.target.checked)} /> 中英混排</label></div>
            <button type="button" onClick={reset}>恢复推荐设置 ↺</button>
          </div>
          <details className={styles.customText}><summary>换成你自己的英文段落</summary><label htmlFor="sample-text">预览正文</label><textarea id="sample-text" rows={3} value={text} onChange={(event) => setText(event.target.value)} /></details>
        </section>

        <div className={styles.previewHeading}><h2>在页面里感受一下</h2><span aria-live="polite">{font.name} · {fontStatus}</span></div>
        <p className={styles.compareNote}>两侧字号与内容一致；原方案保留标题 500、正文 400，候选采用上方设置。想只比较字形，可将候选也调到 500 / 400。原字体按当前设备可用字体回退。</p>
        <div className={`${styles.previewGrid} ${compare ? "" : styles.single}`}>
          {compare && specimen(true)}
          {specimen(false)}
        </div>

        <section className={styles.decision}>
          <div><p className={styles.kicker}>你的当前方案</p><p className={styles.selection} aria-live="polite">{summary}</p><p>选好后把字体名和字重告诉我，就按这个方向统一调整。</p></div>
          <button type="button" onClick={async () => {
            try { await navigator.clipboard.writeText(summary); setCopied(true); }
            catch { setCopied(false); }
          }}>{copied ? "已复制 ✓" : "复制当前方案 ↗"}</button>
        </section>
        <p className={styles.sources}>字体资料：{fonts.map((option) => <a key={option.id} href={option.source} target="_blank" rel="noreferrer">{option.name} ↗</a>)}</p>
      </div>
    </main>
  );
}
