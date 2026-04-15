import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/i18n'

export type BlogPost = {
  id: string
  date: string
  title: { zh: string; en: string }
  summary: { zh: string; en: string }
  content: { zh: string; en: string }
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 'first-blog-post',
    date: '2026-04-09',
    title: {
      zh: '欢迎来到我的博客',
      en: 'Welcome to my blog',
    },
    summary: {
      zh: '这是我博客的第一篇文章，介绍一下建立这个博客的初衷。',
      en: 'This is the first post of my blog, introducing why I started it.',
    },
    content: {
      zh: `
# 欢迎来到我的博客

这是我的第一篇博客文章。在这个博客里，我将分享：

- **技术见解**：我在前端、后端或其他技术领域的探索。
- **个人思考**：关于生活、工作和学习的随笔。
- **项目回顾**：对我所做项目标深度剖析和复盘。

希望你能在这里找到有趣的内容！
      `,
      en: `
# Welcome to my blog

This is my first blog post. In this blog, I will share:

- **Technical Insights**: My explorations in frontend, backend, or other technical fields.
- **Personal Reflections**: Essays about life, work, and learning.
- **Project Retrospectives**: In-depth analysis and review of the projects I have worked on.

I hope you find something interesting here!
      `,
    },
    tags: ['Personal', 'Welcome'],
  },
]

export default function BlogPage() {
  const { lang, t } = useI18n()

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-12">
      <header className="text-center">
        <h1 className="art-title text-3xl font-semibold tracking-tight md:text-4xl">
          {t('blog.title')}
        </h1>
        <p className="mt-2 max-w-2xl mx-auto text-[color:var(--muted)]">{t('blog.subtitle')}</p>
      </header>

      <div className="grid gap-8">
        {blogPosts.length > 0 ? (
          blogPosts.map((post) => (
            <article key={post.id} className="group relative flex flex-col items-start">
              <h2 className="text-xl font-semibold tracking-tight text-[color:var(--ink)]">
                <Link to={`/blog/${post.id}`}>
                  <span className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative z-10">{lang === 'zh' ? post.title.zh : post.title.en}</span>
                </Link>
              </h2>
              <time className="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-[color:var(--muted)]">
                <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                  <span className="h-4 w-0.5 rounded-full bg-white/20" />
                </span>
                {post.date}
              </time>
              <p className="relative z-10 mt-2 text-sm text-[color:var(--muted)] line-clamp-3">
                {lang === 'zh' ? post.summary.zh : post.summary.en}
              </p>
              <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-cyan-400">
                {t('blog.readMore')}
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
                  <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </article>
          ))
        ) : (
          <p className="text-center text-[color:var(--muted)]">{t('blog.empty')}</p>
        )}
      </div>
    </div>
  )
}
