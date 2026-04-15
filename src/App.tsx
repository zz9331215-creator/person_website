import { NavLink, Route, Routes, Link } from 'react-router-dom'
import { useI18n } from './i18n/i18n'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import NotesPage from './pages/NotesPage'
import NoteDetailPage from './pages/NoteDetailPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import CodePage from './pages/CodePage'

function App() {
  const { lang, setLang, t } = useI18n()

  return (
    <div className="min-h-dvh selection:bg-fuchsia-400/25 selection:text-zinc-50 flex flex-col">
      <header className="sticky top-0 z-30 border-b border-white/5 bg-[#050508]/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-violet-500 to-cyan-400 p-0.5 transition-transform group-hover:scale-110">
              <div className="h-full w-full rounded-full bg-[#050508] flex items-center justify-center text-[10px] font-bold text-white">
                WY
              </div>
            </div>
            <span className="art-title text-sm font-bold tracking-widest uppercase hidden sm:block text-white">
              {t('site.title')}
            </span>
          </Link>

          <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
            {[
              { to: '/', label: t('nav.home') },
              { to: '/projects', label: t('nav.projects') },
              { to: '/blog', label: t('nav.blog') },
              { to: '/notes', label: t('nav.notes') },
              { to: '/about', label: t('nav.about') },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  [
                    'px-5 py-1.5 text-xs font-medium transition-all rounded-full text-center min-w-[80px]',
                    isActive ? 'bg-white text-black shadow-lg' : 'text-zinc-400 hover:text-white hover:bg-white/5',
                  ].join(' ')
                }
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-white">
            <button
              onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
              className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 hover:text-white transition-colors"
            >
              {lang === 'zh' ? 'EN' : 'ZH'}
            </button>
            <a
              href="#"
              className="hidden sm:flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-bold transition-all hover:bg-white hover:text-black border border-white/10"
            >
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 16l-5-5h10l-5 5zm0-12c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" />
              </svg>
              PDF Resume
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/notes/:id" element={<NoteDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/code" element={<CodePage />} />
        </Routes>
      </main>

      <footer className="mt-auto border-t border-[color:var(--border)] py-12">
        <div className="mx-auto max-w-5xl px-4 text-center text-sm text-[color:var(--muted)]">
          <p>{t('footer.builtWith')}</p>
          <p className="mt-2 opacity-50">(c) {new Date().getFullYear()} Studio</p>
        </div>
      </footer>
    </div>
  )
}

export default App
