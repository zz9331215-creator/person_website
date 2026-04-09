import { useMemo, useState } from 'react'
import { useI18n } from '../i18n/i18n'

type Topic = {
  id: string
  zh: string
  en: string
}

type Note = {
  id: string
  topicId: string
  date: string
  title: { zh: string; en: string }
  kind: { zh: string; en: string }
  summary: { zh: string; en: string }
}

const topics: Topic[] = [
  { id: 'reading', zh: '读书', en: 'Reading' },
  { id: 'frontend', zh: '前端', en: 'Frontend' },
  { id: 'backend', zh: '后端', en: 'Backend' },
  { id: 'tools', zh: '工具', en: 'Tools' },
]

const notes: Note[] = [
  {
    id: 'note-reading-1',
    topicId: 'reading',
    date: '2026-04-08',
    kind: { zh: '读书笔记', en: 'Reading note' },
    title: { zh: '《XXX》读书笔记（示例）', en: 'Book XXX notes (example)' },
    summary: {
      zh: '用 3-5 句话概括这本书的核心观点、你最受启发尊章节与行动建议。',
      en: 'Write 3-5 sentences: key ideas, most inspiring chapters, and actionable takeaways.',
    },
  },
  {
    id: 'note-fe-1',
    topicId: 'frontend',
    date: '2026-04-08',
    kind: { zh: '学习笔记', en: 'Study note' },
    title: { zh: 'React Router 入门（示例）', en: 'React Router quick start (example)' },
    summary: {
      zh: '记录你学到的知识点、常见坑，以及一段最小可运行示例。',
      en: 'Capture what you learned, common pitfalls, and a minimal working example.',
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
              <div
                key={note.id}
                className="glass-card flex flex-col rounded-3xl p-5 transition hover:-translate-y-0.5 hover:border-white/20"
              >
                <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-[color:var(--muted)]">
                  <span>{lang === 'zh' ? note.kind.zh : note.kind.en}</span>
                  <span>{note.date}</span>
                </div>
                <h3 className="art-title mt-3 text-base font-semibold text-[color:var(--ink)]">
                  {lang === 'zh' ? note.title.zh : note.title.en}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-[color:var(--muted)] line-clamp-3">
                  {lang === 'zh' ? note.summary.zh : note.summary.en}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-[10px] font-medium text-cyan-400">
                  <span>VIEW DETAILS</span>
                  <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 stroke-current">
                    <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
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
