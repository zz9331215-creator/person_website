import { useParams, Link } from 'react-router-dom'
import { useI18n } from '../i18n/i18n'
import { blogPosts } from './BlogPage'

export default function BlogPostPage() {
  const { id } = useParams()
  const { lang, t } = useI18n()

  const post = blogPosts.find((p) => p.id === id)

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 py-20">
        <h1 className="text-2xl font-semibold text-[color:var(--ink)]">404 - Post Not Found</h1>
        <Link to="/blog" className="text-cyan-400 hover:underline">
          {t('blog.back')}
        </Link>
      </div>
    )
  }

  const title = lang === 'zh' ? post.title.zh : post.title.en
  const content = lang === 'zh' ? post.content.zh : post.content.en

  // Basic Markdown-like rendering (simplified)
  const renderContent = (text: string) => {
    return text.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="art-title mb-6 mt-8 text-3xl font-bold tracking-tight text-[color:var(--ink)]">{line.replace('# ', '')}</h1>
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="mb-4 mt-8 text-2xl font-semibold tracking-tight text-[color:var(--ink)]">{line.replace('## ', '')}</h2>
      }
      if (line.startsWith('- ')) {
        return <li key={index} className="ml-4 list-disc text-[color:var(--muted)]">{line.replace('- ', '')}</li>
      }
      if (line.trim() === '') {
        return <br key={index} />
      }
      return <p key={index} className="mb-4 text-[color:var(--muted)] leading-relaxed">{line}</p>
    })
  }

  return (
    <article className="mx-auto max-w-2xl lg:max-w-3xl">
      <header className="flex flex-col">
        <Link
          to="/blog"
          className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
          aria-label={t('blog.back')}
        >
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-4 w-4 stroke-current text-[color:var(--muted)] group-hover:text-[color:var(--ink)]">
            <path d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        <time className="flex items-center text-base text-[color:var(--muted)]">
          <span className="h-4 w-0.5 rounded-full bg-white/20" />
          <span className="ml-3">{post.date}</span>
        </time>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-[color:var(--ink)] sm:text-5xl">
          {title}
        </h1>
      </header>

      <div className="mt-8 prose prose-invert max-w-none">
        {renderContent(content)}
      </div>

      <footer className="mt-16 border-t border-white/10 pt-8">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs text-[color:var(--muted)]">
              #{tag}
            </span>
          ))}
        </div>
      </footer>
    </article>
  )
}
