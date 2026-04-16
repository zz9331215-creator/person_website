import { useParams, Link } from 'react-router-dom'
import { useState, useMemo } from 'react'
import { useI18n } from '../i18n/i18n'
import { notes } from './NotesPage'

export default function NoteDetailPage() {
  const { id } = useParams()
  const { lang, t } = useI18n()
  const [activeChapter, setActiveChapter] = useState<string | null>(null)

  const note = notes.find((n) => n.id === id)

  const chapters = useMemo(() => {
    if (!note) return []
    const content = lang === 'zh' ? note.content.zh : note.content.en
    const lines = content.split('\n')
    const result: { title: string; startIndex: number; endIndex: number }[] = []
    
    lines.forEach((line, index) => {
      if (line.startsWith('## ')) {
        if (result.length > 0) {
          result[result.length - 1].endIndex = index
        }
        result.push({
          title: line.replace('## ', '').trim(),
          startIndex: index,
          endIndex: lines.length
        })
      }
    })
    return result
  }, [note, lang])

  if (!note) {
    return (
      <div className="py-20 text-center">
        <p className="text-[color:var(--muted)]">{t('notes.empty')}</p>
        <Link to="/notes" className="mt-4 inline-block text-[color:var(--ink)] hover:underline">
          {t('notes.back')}
        </Link>
      </div>
    )
  }

  const renderContent = (contentLines: string[]) => {
    return contentLines.map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="mb-6 text-3xl font-bold">{line.replace('# ', '')}</h1>
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="mb-4 mt-8 text-2xl font-semibold">{line.replace('## ', '')}</h2>
      }
      if (line.startsWith('- ')) {
        return <li key={index} className="ml-4 list-disc mb-2">{line.replace('- ', '')}</li>
      }
      if (line.startsWith('```')) {
        return null
      }
      if (line.trim() === '') {
        return <div key={index} className="h-4" />
      }
      // Check for numbered list (e.g. "1. ")
      if (/^\d+\.\s/.test(line)) {
        return <p key={index} className="mb-4 leading-relaxed pl-4 -indent-4">{line}</p>
      }
      return <p key={index} className="mb-4 leading-relaxed">{line}</p>
    })
  }

  const contentLines = (lang === 'zh' ? note.content.zh : note.content.en).split('\n')
  
  const displayContent = activeChapter 
    ? contentLines.slice(
        chapters.find(c => c.title === activeChapter)?.startIndex ?? 0,
        chapters.find(c => c.title === activeChapter)?.endIndex ?? contentLines.length
      )
    : contentLines.slice(0, chapters.length > 0 ? chapters[0].startIndex : contentLines.length)

  return (
    <article className="mx-auto max-w-3xl">
      <div className="mb-8 flex items-center justify-between">
        <Link
          to="/notes"
          className="inline-flex items-center text-sm text-[color:var(--muted)] hover:text-[color:var(--ink)] transition-colors"
        >
          <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t('notes.back')}
        </Link>
        
        {activeChapter && (
          <button
            onClick={() => setActiveChapter(null)}
            className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            {lang === 'zh' ? '?????????' : 'Back to Chapters'}
          </button>
        )}
      </div>

      <header className="mb-12">
        {note.cover && (
          <div className="mb-8 overflow-hidden rounded-2xl">
            <img 
              src={note.cover} 
              alt={lang === 'zh' ? note.title.zh : note.title.en}
              className="w-full h-64 object-cover"
            />
          </div>
        )}
        <div className="flex items-center space-x-3 text-sm text-[color:var(--muted)] mb-4">
          <span>{note.date}</span>
          <span className="opacity-30">?</span>
          <span className="rounded-full bg-white/5 px-2 py-0.5 border border-white/10">
            {lang === 'zh' ? note.kind.zh : note.kind.en}
          </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6 text-white">
          {lang === 'zh' ? note.title.zh : note.title.en}
        </h1>
        <p className="text-xl text-[color:var(--muted)] italic border-l-4 border-white/10 pl-6 py-2 bg-white/[0.02] rounded-r-lg">
          {lang === 'zh' ? note.summary.zh : note.summary.en}
        </p>
      </header>

      {/* Chapter Directory */}
      {!activeChapter && chapters.length > 0 && (
        <div className="mb-12 glass-card rounded-3xl p-8 border border-white/10 bg-white/[0.02]">
          <h3 className="text-lg font-semibold mb-6 flex items-center text-white">
            <svg className="mr-2 h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            {lang === 'zh' ? '?????' : 'Chapters'}
          </h3>
          <div className="grid gap-3">
            {chapters.map((chapter, idx) => (
              <button
                key={idx}
                onClick={() => setActiveChapter(chapter.title)}
                className="group flex items-center justify-between rounded-2xl bg-white/5 p-4 text-left transition hover:bg-white/10 border border-transparent hover:border-white/10"
              >
                <span className="font-medium text-[color:var(--muted)] group-hover:text-white transition-colors">
                  {chapter.title}
                </span>
                <svg className="h-4 w-4 text-[color:var(--muted)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="prose prose-invert max-w-none text-[color:var(--ink)]">
        {renderContent(displayContent)}
      </div>

      {activeChapter && (
        <div className="mt-12 pt-8 border-t border-white/10 flex justify-center">
          <button
            onClick={() => {
              setActiveChapter(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center space-x-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-sm font-medium transition-all border border-white/10"
          >
            <svg className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            <span>{lang === 'zh' ? '?????????' : 'View more chapters'}</span>
          </button>
        </div>
      )}
    </article>
  )
}
