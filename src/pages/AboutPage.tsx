import { useI18n } from '../i18n/i18n'

export default function AboutPage() {
  const { t } = useI18n()

  return (
    <div className="space-y-6">
      <header>
        <h1 className="art-title text-3xl font-semibold tracking-tight md:text-4xl">
          {t('about.title')}
        </h1>
        <p className="mt-2 max-w-2xl text-zinc-200/80">
          {t('about.subtitle')}
        </p>
      </header>

      <section className="glass-card rounded-3xl p-6 md:p-8">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
        <h2 className="art-title mt-5 text-lg font-semibold">{t('about.section.basic')}</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-200/75">
          <li>{t('about.basic.city')}</li>
          <li>{t('about.basic.focus')}</li>
          <li>{t('about.basic.contact')}</li>
        </ul>
      </section>
    </div>
  )
}


