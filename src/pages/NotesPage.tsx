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
  { id: 'reading', zh: '\u8bfb\u4e66', en: 'Reading' },
  { id: 'frontend', zh: '\u524d\u7aef', en: 'Frontend' },
  { id: 'backend', zh: '\u540e\u7aef', en: 'Backend' },
  { id: 'tools', zh: '\u5de5\u5177', en: 'Tools' },
]

const notes: Note[] = [
  {
    id: 'note-reading-1',
    topicId: 'reading',
    date: '2026-04-08',
    kind: { zh: '\u8bfb\u4e66\u7b14\u8bb0', en: 'Reading note' },
    title: { zh: '\u300aXXX\u300b\u8bfb\u4e66\u7b14\u8bb0\uff08\u793a\u4f8b\uff09', en: 'Book XXX notes (example)' },
    summary: {
      zh: '\u7528 3-5 \u53e5\u8bdd\u6982\u62ec\u8fd9\u672c\u4e66\u7684\u6838\u5fc3\u89c2\u70b9\u3001\u4f60\u6700\u53d7\u542f\u53d1\u7684\u7ae0\u8282\u4e0e\u884c\u52a8\u5efa\u8bae\u3002',
      en: 'Write 3-5 sentences: key ideas, most inspiring chapters, and actionable takeaways.',
    },
  },
  {
    id: 'note-fe-1',
    topicId: 'frontend',
    date: '2026-04-08',
    kind: { zh: '\u5b66\u4e60\u7b14\u8bb0', en: 'Study note' },
    title: { zh: 'React Router \u5165\u95e8\uff08\u793a\u4f8b\uff09', en: 'React Router quick start (example)' },
    summary: {
      zh: '\u8bb0\u5f55\u4f60\u5b66\u5230\u7684\u77e5\u8bc6\u70b9\u3001\u5e38\u89c1\u5751\uff0c\u4ee5\u53ca\u4e00\u6bb5\u6700\u5c0f\u53ef\u8fd0\u884c\u793a\u4f8b\u3002',
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

        <section className="grid gap-4">
          {filtered.length === 0 ? (
            <div className="glass-card rounded-3xl p-6 text-sm text-[color:var(--muted)]">
              {t('notes.empty')}
            </div>
          ) : (
            filtered.map((n) => (
              <article key={n.id} className="glass-card rounded-3xl p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[color:var(--muted)]">
                  <span className="rounded-full border border-[color:var(--border)] bg-white/5 px-2 py-1 text-[color:var(--ink)]">
                    {lang === 'zh' ? n.kind.zh : n.kind.en}
                  </span>
                  <span>{n.date}</span>
                </div>
                <h2 className="art-title mt-3 text-lg font-semibold">
                  {lang === 'zh' ? n.title.zh : n.title.en}
                </h2>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  {lang === 'zh' ? n.summary.zh : n.summary.en}
                </p>
              </article>
            ))
          )}
        </section>
      </div>
    </div>
  )
}
