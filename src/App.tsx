import { NavLink, Route, Routes } from 'react-router-dom'
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
    <div className="min-h-dvh selection:bg-fuchsia-400/25 selection:text-zinc-50">
      <header className="sticky top-0 z-20 border-b border-[color:var(--border)] bg-[color:rgba(10,10,14,0.18)] backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4">
          <div className="flex items-baseline gap-2">
            <div className="art-title text-lg font-semibold tracking-tight">
              {t('site.title')}
            </div>
            <div className="hidden h-1.5 w-1.5 rounded-full bg-white/30 md:block" />
            <div className="hidden text-xs text-[color:var(--muted)] md:block">
              studio notes - blog - projects - code
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-1.5 text-sm text-[color:var(--muted)]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                [
                  'relative rounded-md px-3 py-1.5 transition hover:text-white',
                  'after:pointer-events-none after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px',
                  'after:bg-gradient-to-r from-violet-300 via-cyan-200 to-rose-300 after:opacity-0 after:transition',
                  isActive ? 'bg-white/6 text-white after:opacity-100' : 'hover:bg-white/5 hover:after:opacity-80',
                ].join(' ')
              }
              end
            >
              {t('nav.home')}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                [
                  'relative rounded-md px-3 py-1.5 transition hover:text-white',
                  'after:pointer-events-none after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px',
                  'after:bg-gradient-to-r from-violet-300 via-cyan-200 to-rose-300 after:opacity-0 after:transition',
                  isActive ? 'bg-white/6 text-white after:opacity-100' : 'hover:bg-white/5 hover:after:opacity-80',
                ].join(' ')
              }
            >
              {t('nav.about')}
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                [
                  'relative rounded-md px-3 py-1.5 transition hover:text-white',
                  'after:pointer-events-none after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px',
                  'after:bg-gradient-to-r from-violet-300 via-cyan-200 to-rose-300 after:opacity-0 after:transition',
                  isActive ? 'bg-white/6 text-white after:opacity-100' : 'hover:bg-white/5 hover:after:opacity-80',
                ].join(' ')
              }
            >
              {t('nav.projects')}
            </NavLink>
            <NavLink
              to="/notes"
              className={({ isActive }) =>
                [
                  'relative rounded-md px-3 py-1.5 transition hover:text-white',
                  'after:pointer-events-none after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px',
                  'after:bg-gradient-to-r from-violet-300 via-cyan-200 to-rose-300 after:opacity-0 after:transition',
                  isActive ? 'bg-white/6 text-white after:opacity-100' : 'hover:bg-white/5 hover:after:opacity-80',
                ].join(' ')
              }
            >
              {t('nav.notes')}
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                [
                  'relative rounded-md px-3 py-1.5 transition hover:text-white',
                  'after:pointer-events-none after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px',
                  'after:bg-gradient-to-r from-violet-300 via-cyan-200 to-rose-300 after:opacity-0 after:transition',
                  isActive ? 'bg-white/6 text-white after:opacity-100' : 'hover:bg-white/5 hover:after:opacity-80',
                ].join(' ')
              }
            >
              {t('nav.blog')}
            </NavLink>
            <NavLink
              to="/code"
              className={({ isActive }) =>
                [
                  'relative rounded-md px-3 py-1.5 transition hover:text-white',
                  'after:pointer-events-none after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px',
                  'after:bg-gradient-to-r from-violet-300 via-cyan-200 to-rose-300 after:opacity-0 after:transition',
                  isActive ? 'bg-white/6 text-white after:opacity-100' : 'hover:bg-white/5 hover:after:opacity-80',
                ].join(' ')
              }
            >
              {t('nav.code')}
            </NavLink>

            <div className="ml-2 hidden h-6 w-px bg-white/10 md:block" />
            <div className="flex items-center gap-2 pl-1">
              <span className="hidden text-xs text-[color:var(--muted)] md:inline">
                {t('nav.lang')}
              </span>
              <button
                type="button"
                onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
                className="rounded-md bg-white/5 px-2 py-1 transition hover:bg-white/10 hover:text-white"
              >
                {lang === 'zh' ? 'EN' : '??'}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-12 md:py-20">
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
          <p className="mt-2 opacity-50">? {new Date().getFullYear()} Studio</p>
        </div>
      </footer>
    </div>
  )
}

export default App
