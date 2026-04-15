import { useI18n } from '../i18n/i18n'

type CodeItem = {
  title: string
  desc: string
  language: string
  code: string
}

const items: CodeItem[] = [
  {
    title: 'fetch \u5c01\u88c5\uff08\u793a\u4f8b\uff09',
    desc: '\u4e00\u4e2a\u8f7b\u91cf\u7684 JSON \u8bf7\u6c42\u5c01\u88c5\uff0c\u9002\u5408\u5c0f\u9879\u76ee\u5feb\u901f\u590d\u7528\u3002',
    language: 'ts',
    code: `export async function getJson<T>(url: string): Promise<T> {
  const res = await fetch(url)
  if (!res.ok) throw new Error(\`HTTP \${res.status}\`)
  return (await res.json()) as T
}
`,
  },
  {
    title: '\u53bb\u91cd\uff08\u793a\u4f8b\uff09',
    desc: '\u7528 Set \u5feb\u901f\u53bb\u91cd\u6570\u7ec4\u3002',
    language: 'ts',
    code: `export function uniq<T>(arr: T[]): T[] {
  return Array.from(new Set(arr))
}
`,
  },
]

export default function CodePage() {
  const { t } = useI18n()

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-6">
      <header className="text-center">
        <h1 className="art-title text-3xl font-semibold tracking-tight md:text-4xl">
          {t('code.title')}
        </h1>
        <p className="mt-2 max-w-2xl mx-auto text-[color:var(--muted)]">
          {t('code.subtitle')}
        </p>
      </header>

      <div className="grid gap-4">
        {items.map((it) => (
          <article key={it.title} className="glass-card rounded-3xl p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="art-title text-lg font-semibold">{it.title}</h2>
                <p className="mt-1 text-sm text-[color:var(--muted)]">{it.desc}</p>
              </div>
              <span className="rounded-full border border-[color:var(--border)] bg-white/5 px-2.5 py-1 text-xs text-[color:var(--ink)]">
                {it.language}
              </span>
            </div>

            <pre className="code-block mt-4 overflow-x-auto rounded-xl p-4 text-sm">
              <code>{it.code}</code>
            </pre>
          </article>
        ))}
      </div>
    </div>
  )
}

