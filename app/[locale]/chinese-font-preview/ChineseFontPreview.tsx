"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import { ProgramOverview } from "@/components/program/ProgramOverview";
import styles from "./preview.module.css";

type Weight = { value: string; name: string; family: string };
type FontOption = {
  id: string; name: string; description: string; source: string;
  heading: string; body: string; weights: Weight[];
};
const originalFont: Weight = { value: "original", name: "原版 Regular", family: "SourceHanSerif" };
const fonts: FontOption[] = [
  {
    id: "serif", name: "思源宋体", description: "典雅、正式，延续现在的书卷气。",
    source: "https://github.com/adobe-fonts/source-han-serif", heading: "600", body: "500",
    weights: [originalFont,
      { value: "500", name: "500 · 中等", family: "Han Preview Medium" },
      { value: "600", name: "600 · 半粗", family: "Han Preview SemiBold" },
      { value: "700", name: "700 · 粗体", family: "Han Preview Bold" }],
  },
  {
    id: "sans", name: "Noto Sans SC · 黑体", description: "线条简洁、笔画均匀，现代而清晰。",
    source: "https://fonts.google.com/specimen/Noto+Sans+SC", heading: "600", body: "500",
    weights: [
      { value: "500", name: "500 · 中等", family: "Han Preview Sans Medium" },
      { value: "600", name: "600 · 半粗", family: "Han Preview Sans SemiBold" },
      { value: "700", name: "700 · 粗体", family: "Han Preview Sans Bold" }],
  },
  {
    id: "wenkai", name: "霞鹜文楷", description: "柔和的书写感，更亲切，也更有文人气息。",
    source: "https://github.com/lxgw/LxgwWenKai", heading: "500", body: "500",
    weights: [{ value: "500", name: "500 · Medium", family: "Han Preview WenKai" }],
  },
  {
    id: "xiaowei", name: "站酷小薇体", description: "有装饰细节的宋体风格，看看更鲜明的标题气质。",
    source: "https://fonts.google.com/specimen/ZCOOL+XiaoWei", heading: "400", body: "400",
    weights: [{ value: "400", name: "400 · Regular", family: "Han Preview XiaoWei" }],
  },
];

export default function ChineseFontPreview() {
  const [selected, setSelected] = useState("serif");
  const [heading, setHeading] = useState("600");
  const [body, setBody] = useState("500");
  const [original, setOriginal] = useState(false);
  const [readyKey, setReadyKey] = useState("");
  const [failedKey, setFailedKey] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  const font = fonts.find((option) => option.id === selected)!;
  const headingFont = original ? originalFont : font.weights.find((weight) => weight.value === heading)!;
  const bodyFont = original ? originalFont : font.weights.find((weight) => weight.value === body)!;
  const loadKey = `${headingFont.family}/${bodyFont.family}`;
  const status = readyKey === loadKey ? "字体已就绪" : failedKey === loadKey ? "字体未加载，请刷新重试" : "字体加载中…";
  const summary = `中文：${original ? "思源宋体原版" : font.name}，标题 ${headingFont.name}，正文 ${bodyFont.name}；英文保持 Source Serif 4 / 500，正文 18px。`;

  useEffect(() => {
    let active = true;
    Promise.all([headingFont, bodyFont].map((choice) => document.fonts.load(`500 24px "${choice.family}"`, "智能体时代的开源")))
      .then((results) => {
        if (!active) return;
        if (results.every((faces) => faces.length)) setReadyKey(loadKey);
        else setFailedKey(loadKey);
      })
      .catch(() => { if (active) setFailedKey(loadKey); });
    return () => { active = false; };
  }, [headingFont, bodyFont, loadKey]);

  function choose(id: string) {
    const next = fonts.find((option) => option.id === id)!;
    setSelected(id); setHeading(next.heading); setBody(next.body); setOriginal(false); setCopyStatus("");
  }

  function change(nextHeading: string, nextBody: string) {
    setHeading(nextHeading); setBody(nextBody); setOriginal(false); setCopyStatus("");
  }

  return (
    <main className={styles.page}>
      <section className={styles.controls} aria-label="中文字体设置">
        <div className={styles.topline}><span>AIVF’26 / 中文选字</span><Link href="/zh-cn/#programs">返回首页这一区域 ↗</Link></div>
        <div className={styles.intro}><h1>四种字体，同一段议题。</h1><p>宋体、黑体、文楷，放在实际页面里比较。<br />只切换中文；英文、字号、颜色与布局保持一致。</p></div>
        <div className={styles.fontCards} role="group" aria-label="选择中文字体">
          {fonts.map((option, index) => {
            const sampleFont = option.weights.find((weight) => weight.value === option.heading)!;
            return <button key={option.id} type="button" aria-pressed={!original && selected === option.id} onClick={() => choose(option.id)}>
              <span className={styles.cardTop}>0{index + 1} · {option.name}</span>
              <span className={styles.cardSample} style={{fontFamily: `"${sampleFont.family}", "SourceHanSerif", serif`}}>智能体时代<br />开源与未来</span>
              <span className={styles.cardDescription}>{option.description}</span>
              <span className={styles.cardChoice}>{!original && selected === option.id ? "● 正在预览" : "切换看效果 ↗"}</span>
            </button>;
          })}
        </div>
        <p className={styles.note}>文楷使用 Medium，小薇体使用原生 Regular。下方只提供已加载的真实字重，方便比较各自的字形。</p>
      </section>
      <div className={styles.toolbar}>
        <div className={styles.settings}>
          <label>字体<select aria-label="预览区域字体" value={selected} onChange={(event) => choose(event.target.value)}>{fonts.map((option) => <option key={option.id} value={option.id}>{option.name}</option>)}</select></label>
          <label>标题<select aria-label="中文标题字重" value={heading} disabled={font.weights.length === 1} onChange={(event) => change(event.target.value, body)}>{font.weights.map((weight) => <option key={weight.value} value={weight.value}>{weight.name}</option>)}</select></label>
          <label>正文<select aria-label="中文正文字重" value={body} disabled={font.weights.length === 1} onChange={(event) => change(heading, event.target.value)}>{font.weights.map((weight) => <option key={weight.value} value={weight.value}>{weight.name}</option>)}</select></label>
          <button type="button" className={styles.compare} aria-pressed={original} onClick={() => { setOriginal(!original); setCopyStatus(""); }}>{original ? "回到候选字体" : "对照最初宋体"}</button>
          <span className={styles.status} aria-live="polite">{original ? "原版 · " : ""}{status}</span>
        </div>
      </div>
      <div className={styles.sample} style={{ "--han-heading": `"${headingFont.family}"`, "--han-body": `"${bodyFont.family}"` } as CSSProperties}>
        <ProgramOverview />
      </div>
      <section className={styles.selection}>
        <div><p aria-live="polite">{summary}</p><p className={styles.note}>选好后复制方案告诉我，再统一应用到网站。</p></div>
        <button type="button" onClick={async () => {
          try { await navigator.clipboard.writeText(summary); setCopyStatus("已复制 ✓"); }
          catch { setCopyStatus("请直接复制左侧方案文字"); }
        }}>{copyStatus || "复制方案 ↗"}</button>
      </section>
      <p className={styles.sources}>字体资料：{fonts.map((option) => <a key={option.id} href={option.source} target="_blank" rel="noreferrer">{option.name} ↗</a>)}</p>
    </main>
  );
}
