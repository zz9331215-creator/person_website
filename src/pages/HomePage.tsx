import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/i18n'
import heroImg from '../assets/hero.png'

export default function HomePage() {
  const { t } = useI18n()

  return (
    <div className="relative min-h-[calc(100vh-80px)] overflow-hidden flex flex-col items-center justify-center px-6 py-12">
      <div className="bg-text opacity-5 select-none text-white">
        WANG YAN
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="order-2 md:order-1 text-center md:text-left space-y-8 flex flex-col items-center md:items-start">
          <div className="space-y-4">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-zinc-500 flex items-center justify-center md:justify-start gap-3">
              <span className="h-px w-8 bg-zinc-800" />
              A Brave Explorer in Technology
            </h2>
            <h1 className="art-title text-5xl md:text-7xl font-black leading-tight text-white">
              Hi, I am <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-300">Wang Yan</span>
            </h1>
          </div>

          <p className="text-lg text-zinc-400 max-w-md leading-relaxed text-center md:text-left">
            {t('home.subtitle')}
          </p>

          <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
            <Link
              to="/projects"
              className="px-8 py-4 rounded-full bg-white text-black font-bold text-sm transition-transform hover:scale-105 active:scale-95"
            >
              {t('home.cta.projects')}
            </Link>
            <Link
              to="/notes"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-sm backdrop-blur-md transition-all hover:bg-white/10"
            >
              {t('home.cta.notes')}
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/5 w-full max-w-md">
            <div className="text-center md:text-left">
              <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Status</div>
              <div className="text-xs font-medium text-zinc-300">Open for Projects</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Focus</div>
              <div className="text-xs font-medium text-zinc-300">Embedded and Web</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Location</div>
              <div className="text-xs font-medium text-zinc-300">China</div>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center items-center relative">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[120%] h-[120%] rounded-full border border-white/[0.03] animate-[spin_20s_linear_infinite]" />
            <div className="w-[110%] h-[110%] rounded-full border border-white/[0.05] animate-[spin_15s_linear_infinite_reverse]" />
          </div>

          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-[12px] border-white/5 shadow-2xl">
            <img
              src={heroImg}
              alt="Hero"
              className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 hover:scale-110"
            />
          </div>

          <div className="absolute -bottom-4 -right-4 md:bottom-12 md:right-12 glass rounded-2xl p-4 border border-white/10 shadow-2xl animate-bounce">
            <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-1">Latest Update</div>
            <div className="text-xs font-medium text-white">Naval Almanack Updated</div>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            to="/notes"
            className="group glass rounded-3xl p-8 transition-all duration-500 hover:bg-white/[0.05] hover:scale-[1.02] hover:border-white/20 flex flex-col items-center text-center"
          >
            <div className="flex flex-col items-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Reading Notes</div>
                <div className="art-title text-xl font-bold mt-1 text-white">{t('home.card.readingTitle')}</div>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">Book highlights and key takeaways</p>
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              <span className="px-3 py-1 text-[10px] font-medium bg-white/5 rounded-full text-zinc-400">Naval Ravikant</span>
              <span className="px-3 py-1 text-[10px] font-medium bg-white/5 rounded-full text-zinc-400">Charlie Munger</span>
            </div>
          </Link>

          <Link
            to="/notes"
            className="group glass rounded-3xl p-8 transition-all duration-500 hover:bg-white/[0.05] hover:scale-[1.02] hover:border-white/20 flex flex-col items-center text-center"
          >
            <div className="flex flex-col items-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-rose-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Learning Notes</div>
                <div className="art-title text-xl font-bold mt-1 text-white">{t('home.card.learningTitle')}</div>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">Knowledge systems and practical insights</p>
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              <span className="px-3 py-1 text-[10px] font-medium bg-white/5 rounded-full text-zinc-400">Embedded</span>
              <span className="px-3 py-1 text-[10px] font-medium bg-white/5 rounded-full text-zinc-400">Web Dev</span>
            </div>
          </Link>

          <Link
            to="/code"
            className="group glass rounded-3xl p-8 transition-all duration-500 hover:bg-white/[0.05] hover:scale-[1.02] hover:border-white/20 flex flex-col items-center text-center"
          >
            <div className="flex flex-col items-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500/20 to-amber-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Code and Programs</div>
                <div className="art-title text-xl font-bold mt-1 text-white">{t('home.card.codeTitle')}</div>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">Reusable snippets and small templates</p>
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              <span className="px-3 py-1 text-[10px] font-medium bg-white/5 rounded-full text-zinc-400">C/C++</span>
              <span className="px-3 py-1 text-[10px] font-medium bg-white/5 rounded-full text-zinc-400">Python</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-12 left-6 hidden xl:block">
        <div className="text-[10px] font-bold text-zinc-700 uppercase tracking-[0.5em] vertical-text">
          Est. 2026 / Studio Notes
        </div>
      </div>
    </div>
  )
}
