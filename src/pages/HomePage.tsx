import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/i18n'

export default function HomePage() {
  const { t } = useI18n()

  return (
    <div className="space-y-10">
      <section className="glass rounded-3xl p-6 md:p-8">
        <div className="flex items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <div className="h-px flex-1 bg-gradient-to-r from-white/15 via-white/5 to-transparent" />
        </div>

        <h1 className="art-title mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
          {t('home.title')}
        </h1>
        <p className="mt-3 max-w-2xl text-zinc-200/80">
          {t('home.subtitle')}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/8"
            to="/blog"
          >
            <span className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <span className="absolute -left-16 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-violet-400/25 blur-2xl" />
              <span className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-2xl" />
            </span>
            <span className="relative">{t('home.cta.blog')}</span>
          </Link>
          <Link
            className="rounded-xl border border-white/15 bg-transparent px-4 py-2 text-sm font-medium text-white/90 transition hover:border-white/25 hover:bg-white/8 hover:text-white"
            to="/notes"
          >
            {t('home.cta.notes')}
          </Link>
          <Link
            className="rounded-xl border border-white/15 bg-transparent px-4 py-2 text-sm font-medium text-white/90 transition hover:border-white/25 hover:bg-white/8 hover:text-white"
            to="/projects"
          >
            {t('home.cta.projects')}
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="glass-card rounded-3xl p-5 transition hover:-translate-y-0.5 hover:border-white/20">
          <div className="text-xs uppercase tracking-wide text-zinc-400">{t('home.card.reading')}</div>
          <div className="mt-2 art-title text-lg font-semibold">{t('home.card.readingTitle')}</div>
          <div className="mt-2 text-sm text-zinc-200/75">{t('home.card.readingDesc')}</div>
        </div>
        <div className="glass-card rounded-3xl p-5 transition hover:-translate-y-0.5 hover:border-white/20">
          <div className="text-xs uppercase tracking-wide text-zinc-400">{t('home.card.learning')}</div>
          <div className="mt-2 art-title text-lg font-semibold">{t('home.card.learningTitle')}</div>
          <div className="mt-2 text-sm text-zinc-200/75">{t('home.card.learningDesc')}</div>
        </div>
        <div className="glass-card rounded-3xl p-5 transition hover:-translate-y-0.5 hover:border-white/20">
          <div className="text-xs uppercase tracking-wide text-zinc-400">{t('home.card.code')}</div>
          <div className="mt-2 art-title text-lg font-semibold">{t('home.card.codeTitle')}</div>
          <div className="mt-2 text-sm text-zinc-200/75">{t('home.card.codeDesc')}</div>
        </div>
      </section>
    </div>
  )
}


