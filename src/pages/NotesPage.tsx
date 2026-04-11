import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/i18n'

type Topic = {
  id: string
  zh: string
  en: string
}

export type Note = {
  id: string
  topicId: string
  date: string
  title: { zh: string; en: string }
  kind: { zh: string; en: string }
  summary: { zh: string; en: string }
  content: { zh: string; en: string }
}

const topics: Topic[] = [
  { id: 'reading', zh: '读书', en: 'Reading' },
  { id: 'frontend', zh: '嵌入式学习', en: 'Embedded learning' },
  { id: 'backend', zh: '软件和网站', en: 'Software and website' },
  { id: 'tools', zh: '工具', en: 'Tools' },
]

export const notes: Note[] = [
  { 
    id: 'note-reading-1',
    topicId: 'reading',
    date: '2026-04-08',
    kind: { zh: '读书笔记', en: 'Reading note' },
    title: { zh: '《纳瓦尔宝典》读书笔记', en: 'Narvalist notes' },
    summary: {
      zh: '财富，健康，幸福，自我救赎，是我一生的追求',
      en: 'Wealth, health, happiness, and redemption, are my life\'s pursuit.',
    },
    content: {
      zh: `
# 《纳瓦尔宝典》读书笔记

## 关于财富
- 追求财富，而不是金钱或地位。财富是指在你睡觉时也能为你赚钱的资产。
- 互联网极大地扩展了职业生涯的职业空间。

## 关于幸福
- 幸福是一种选择，一种可以培养的技能。
- 幸福是当你不再缺某些东西时，内心感到的平静。

## 总结
财富，健康，幸福，自我救赎，是我一生的追求。
      `,
      en: `
# Notes on The Almanack of Naval Ravikant

## On Wealth
- Seek wealth, not money or status. Wealth is having assets that earn while you sleep.
- The internet has massively broadened the possible space of careers.

## On Happiness
- Happiness is a choice, a skill that can be developed.
- Happiness is what's there when you remove the sense that something is missing in your life.

## Conclusion
Wealth, health, happiness, and redemption, are my life's pursuit.
      `,
    },
  },
  { 
    id: 'note-fe-1',
    topicId: 'frontend',
    date: '2026-04-08',
    kind: { zh: '学习笔记', en: 'Study note' },
    title: { zh: '嵌入式学习笔记（示例）', en: 'Embedded learning notes (example)' },
    summary: {
      zh: '记录你学到的知识点、常见坑，以及一段最小可运行示例。',
      en: 'Capture what you learned, common pitfalls, and a minimal working example.',
    },
    content: {
      zh: `
# 嵌入式学习笔记

## 核心知识点
- 掌握寄存器操作和内存映射。
- 理解中断处理机制和低功耗设计。

## 常见坑
- 忽略看门狗复位。
- 堆栈溢出导致系统崩溃。

## 示例代码
\`\`\`c
void main() {
  // 初始化
  SystemInit();
  while(1) {
    // 主循环
  }
}
\`\`\`
      `,
      en: `
# Embedded Learning Notes

## Key Concepts
- Master register operations and memory mapping.
- Understand interrupt handling and low-power design.

## Common Pitfalls
- Ignoring watchdog reset.
- Stack overflow leading to system crashes.

## Example Code
\`\`\`c
void main() {
  // Initialization
  SystemInit();
  while(1) {
    // Main loop
  }
}
\`\`\`
      `,
    },
  },
  {
    id: 'note-reading-2',
    topicId: 'reading',
    date: '2026-04-11',
    kind: { zh: '读书笔记', en: 'Reading note' },
    title: { zh: '《穷查理宝典》读书笔记', en: 'Poor Charlie\'s Almanack notes' },
    summary: {
      zh: '查理·芒格说：“如果你只有一把锤子，你会发现所有问题都像钉子。”',
      en: 'Charlie Munger\'s wisdom: worldly wisdom, mental models, and multidisciplinary learning.',
    },
    content: {
      zh: `
# 《穷查理宝典》读书笔记

## 摘抄
- 如果我要有拥有一种观点，如果我不能够比全世界最聪明、最有能力，最有资格反驳这个观点的人更能够证否自己，我就不配拥有这个观点。


## 普世智慧
- 掌握多种思维模型。如果你只有一把锤子，你会发现所有问题都像钉子。
- 逆向思维：反过来想，总是反过来想。

## 投资原则
- 待在你的“能力圈”内。
- 投资就是寻找价格低于价值的机会。

## 总结
通过跨学科学习，构建一套完整的思维模型，才能在复杂的世界中做出正确的决策。
      `,
      en: `
# Notes on Poor Charlie's Almanack

## Worldly Wisdom
- Master multiple mental models. If you only have a hammer, everything looks like a nail.
- Inversion: Invert, always invert.

## Investment Principles
- Stay within your "Circle of Competence".
- Investing is finding opportunities where price is below value.

## Conclusion
Build a complete set of mental models through multidisciplinary learning to make correct decisions in a complex world.
      `,
    },
  },
]

export default function NotesPage() {
  const { lang, t } = useI18n()
  const [activeTopicId, setActiveTopicId] = useState<string>('all')

  const filtered = useMemo(() => {
    if (activeTopicId === 'all') return notes
    return notes.filter((n) => n.topicId === activeTopicId)
  }, [activeTopicId])

  return (
    <div className="space-y-6">
      <header>
        <h1 className="art-title text-3xl font-semibold tracking-tight md:text-4xl">
          {t('notes.title')}
        </h1>
        <p className="mt-2 max-w-2xl text-[color:var(--muted)]">{t('notes.subtitle')}</p>
      </header>

      <div className="grid gap-6 md:grid-cols-[220px_1fr]">
        <aside className="md:sticky md:top-6 md:self-start">
          <div className="glass-card rounded-3xl p-4">
            <div className="text-sm font-medium text-[color:var(--ink)]">{t('notes.topics')}</div>
            <div className="mt-3 grid gap-1">
              <button
                type="button"
                onClick={() => setActiveTopicId('all')}
                className={`w-full rounded-xl px-3 py-2 text-left text-sm transition hover:bg-white/10 ${
                  activeTopicId === 'all'
                    ? 'bg-white/10 text-[color:var(--ink)]'
                    : 'text-[color:var(--muted)]'
                }`}
              >
                {t('notes.all')}
              </button>

              {topics.map((tp) => (
                <button
                  key={tp.id}
                  type="button"
                  onClick={() => setActiveTopicId(tp.id)}
                  className={`w-full rounded-xl px-3 py-2 text-left text-sm transition hover:bg-white/10 ${
                    activeTopicId === tp.id
                      ? 'bg-white/10 text-[color:var(--ink)]'
                      : 'text-[color:var(--muted)]'
                  }`}
                >
                  {lang === 'zh' ? tp.zh : tp.en}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <main className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.length > 0 ? (
            filtered.map((note) => (
              <Link
                key={note.id}
                to={`/notes/${note.id}`}
                className="glass-card group flex flex-col rounded-3xl p-5 transition hover:-translate-y-0.5 hover:border-white/20"
              >
                <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-[color:var(--muted)]">
                  <span>{lang === 'zh' ? note.kind.zh : note.kind.en}</span>
                  <span>{note.date}</span>
                </div>
                <h3 className="art-title mt-3 text-base font-semibold text-[color:var(--ink)] group-hover:text-white transition-colors">
                  {lang === 'zh' ? note.title.zh : note.title.en}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-[color:var(--muted)] line-clamp-3">
                  {lang === 'zh' ? note.summary.zh : note.summary.en}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-[10px] font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <span>{t('blog.readMore')}</span>
                  <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 stroke-current">
                    <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-sm text-[color:var(--muted)]">
              {t('notes.empty')}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
