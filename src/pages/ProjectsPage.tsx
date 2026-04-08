import { useI18n } from '../i18n/i18n'

const projects = [
  {
    name: '\u9879\u76ee A\uff08\u793a\u4f8b\uff09',
    desc: '\u4e00\u53e5\u8bdd\u8bf4\u660e\u8fd9\u4e2a\u9879\u76ee\u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898\uff0c\u6280\u672f\u6808\u662f\u4ec0\u4e48\u3002',
    tags: ['React', 'TypeScript'],
    link: 'https://github.com/yourname/your-project',
  },
  {
    name: '\u9879\u76ee B\uff08\u793a\u4f8b\uff09',
    desc: '\u53ef\u4ee5\u5199\u6210\u5de5\u5177\u3001\u8bfe\u7a0b\u9879\u76ee\u3001\u5f00\u6e90\u8d21\u732e\u7b49\u3002',
    tags: ['Node.js', 'API'],
    link: 'https://github.com/yourname/another-project',
  },
]

export default function ProjectsPage() {
  const { t } = useI18n()

  return (
    <div className="space-y-6">
      <header>
        <h1 className="art-title text-3xl font-semibold tracking-tight md:text-4xl">
          {t('projects.title')}
        </h1>
        <p className="mt-2 max-w-2xl text-[color:var(--muted)]">
          {t('projects.subtitle')}
        </p>
      </header>

      <div className="grid gap-4">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="glass-card block rounded-3xl p-6 transition hover:-translate-y-0.5 hover:border-white/20"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="art-title text-lg font-semibold">{p.name}</div>
                <div className="mt-2 text-sm text-[color:var(--muted)]">{p.desc}</div>
              </div>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[color:var(--border)] bg-white/5 px-2.5 py-1 text-xs text-[color:var(--ink)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

