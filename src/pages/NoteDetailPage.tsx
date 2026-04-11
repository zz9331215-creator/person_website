import { useParams, Link } from 'react-router-dom'
import { useI18n } from '../i18n/i18n'
import { notes } from './NotesPage'

export default function NoteDetailPage() {
  const { id } = useParams()
  const { lang, t } = useI18n()

  const note = notes.find((n) => n.id === id)

  if (!note) {
    return (
      <div className="py-20 text-center">
        <p className="text-[color:var(--muted)]">{t('notes.empty')}</p>
        <Link to="/notes" className="mt-4 inline-block text-[color:var(--ink)] hover:underline">
          {t('blog.back')}
        </Link>
      </div>
    )
  }

  // Simple Markdown-like to HTML conversion for the content
  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
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
        return null // Skip code block markers for now or handle better
      }
      if (line.trim() === '') {
        return <br key={index} />
      }
      return <p key={index} className="mb-4 leading-relaxed">{line}</p>
    })
  }

  return (
    <article className="mx-auto max-w-3xl">
      <Link
        to="/notes"
        className="mb-8 inline-flex items-center text-sm text-[color:var(--muted)] hover:text-[color:var(--ink)] transition-colors"
      >
        <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        {t('blog.back')}
      </Link>

      <header className="mb-12">
        <div className="flex items-center space-x-3 text-sm text-[color:var(--muted)] mb-4">
          <span>{note.date}</span>
          <span>?</span>
          <span className="rounded-full bg-white/5 px-2 py-0.5">
            {lang === 'zh' ? note.kind.zh : note.kind.en}
          </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">
          {lang === 'zh' ? note.title.zh : note.title.en}
        </h1>
        <p className="text-xl text-[color:var(--muted)] italic">
          {lang === 'zh' ? note.summary.zh : note.summary.en}
        </p>
      </header>

      <div className="prose prose-invert max-w-none">
        {renderContent(lang === 'zh' ? note.content.zh : note.content.en)}
      </div>
    </article>
  )
}
