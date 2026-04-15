import { useI18n } from '../i18n/i18n'

const projects = [
  {
    name: '反恐排爆救援机器人项目',
    desc: '自主设计制作一款满足竞赛尺寸规范的反恐排爆救援机器人，通过多模块协同实现二维码读取、颜色识别、激光打标、物体抓取、自主导航等核心功能，可在规定场地内完成排爆、反恐、救援全流程任务。',
    tags: ['STM32', 'K230', 'PID','C语言','Python'],
    link: 'https://github.com/yourname/your-project',
  },
  {
    name: '项目 B（示例）',
    desc: '可以写成工具、课程项目、开源贡献等。',
    tags: ['Node.js', 'API'],
    link: 'https://github.com/yourname/another-project',
  },
]

export default function ProjectsPage() {
  const { t } = useI18n()

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-6">
      <header className="text-center">
        <h1 className="art-title text-3xl font-semibold tracking-tight md:text-4xl">
          {t('projects.title')}
        </h1>
        <p className="mt-2 max-w-2xl mx-auto text-[color:var(--muted)]">
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
