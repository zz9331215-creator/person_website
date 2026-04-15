import { useI18n } from '../i18n/i18n'

type Tool = {
  id: string
  name: string
  description: string
  category: 'tools' | 'websites' | 'ai'
  url?: string
  icon?: string
}

const tools: Tool[] = [
  {
    id: 'tool-1',
    name: 'JSON 格式化工具',
    description: '在线格式化和验证 JSON 数据',
    category: 'tools',
    url: 'https://jsonformatter.curiousconcept.com/',
    icon: '🔧'
  },
  {
    id: 'tool-2',
    name: '颜色选择器',
    description: '获取颜色代码和调色板',
    category: 'tools',
    url: 'https://coolors.co/',
    icon: '🎨'
  },
  {
    id: 'tool-3',
    name: 'Markdown 编辑器',
    description: '实时预览 Markdown 内容',
    category: 'tools',
    url: 'https://dillinger.io/',
    icon: '📝'
  },
  {
    id: 'website-1',
    name: 'GitHub',
    description: '代码托管和版本控制平台',
    category: 'websites',
    url: 'https://github.com/',
    icon: '💻'
  },
  {
    id: 'website-2',
    name: 'Stack Overflow',
    description: '编程问答社区',
    category: 'websites',
    url: 'https://stackoverflow.com/',
    icon: '❓'
  },
  {
    id: 'website-3',
    name: 'MDN Web Docs',
    description: 'Web 开发文档',
    category: 'websites',
    url: 'https://developer.mozilla.org/',
    icon: '📚'
  },
  {
    id: 'website-4',
    name: 'IMDb',
    description: '电影数据库和评分网站',
    category: 'websites',
    url: 'https://www.imdb.com/',
    icon: '🎬'
  },
  {
    id: 'ai-1',
    name: 'OpenAI ChatGPT',
    description: '强大的 AI 语言模型',
    category: 'ai',
    url: 'https://chat.openai.com/',
    icon: '🤖'
  },
  {
    id: 'ai-2',
    name: 'Claude',
    description: 'Anthropic 的 AI 助手',
    category: 'ai',
    url: 'https://claude.ai/',
    icon: '🧠'
  },
  {
    id: 'ai-3',
    name: 'Bard',
    description: 'Google 的 AI 对话系统',
    category: 'ai',
    url: 'https://bard.google.com/',
    icon: '🔍'
  }
]

export default function CodePage() {
  const { t } = useI18n()

  // 按分类分组工具
  const groupedTools = tools.reduce((acc, tool) => {
    if (!acc[tool.category]) {
      acc[tool.category] = []
    }
    acc[tool.category].push(tool)
    return acc
  }, {} as Record<string, Tool[]>)

  // 分类名称映射
  const categoryNames = {
    tools: '小工具',
    websites: '网站',
    ai: 'AI 网站'
  }

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-8">
      <header className="text-center">
        <h1 className="art-title text-3xl font-semibold tracking-tight md:text-4xl">
          工具集
        </h1>
        <p className="mt-2 max-w-2xl mx-auto text-[color:var(--muted)]">
          实用小工具、网站和 AI 资源集合
        </p>
      </header>

      {Object.entries(groupedTools).map(([category, items]) => (
        <section key={category} className="space-y-4">
          <h2 className="text-2xl font-semibold">{categoryNames[category as keyof typeof categoryNames]}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((tool) => (
              <a 
                key={tool.id} 
                href={tool.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card rounded-3xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{tool.icon}</div>
                  <div>
                    <h3 className="art-title text-lg font-semibold">{tool.name}</h3>
                    <p className="mt-1 text-sm text-[color:var(--muted)]">{tool.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

