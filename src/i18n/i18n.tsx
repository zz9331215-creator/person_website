import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

export type Lang = 'zh' | 'en'

type Dict = Record<string, string>

const zh: Dict = {
  'nav.home': '首页',
  'nav.about': '关于',
  'nav.projects': '项目',
  'nav.notes': '笔记',
  'nav.code': '代码',
  'nav.lang': '语言',

  'site.title': '个人网站',
  'footer.builtWith': '由 Vite + React 构建',

  'home.title': '你好，我是（你的名字）',
  'home.subtitle':
    '这里是我的个人网站，用来整理读书笔记、学习笔记，展示一些代码与小项目，也会放个人介绍与项目经历。',
  'home.cta.notes': '去看笔记',
  'home.cta.projects': '查看项目',
  'home.card.reading': '读书笔记',
  'home.card.readingTitle': '书籍要点与摘录',
  'home.card.readingDesc': '按书籍与主题归档，方便回顾与检索。',
  'home.card.learning': '学习笔记',
  'home.card.learningTitle': '知识体系与实践',
  'home.card.learningDesc': '记录学习路径、踩坑与实践结论。',
  'home.card.code': '代码与程序',
  'home.card.codeTitle': '小工具与示例',
  'home.card.codeDesc': '沉淀可复用的代码片段与项目模板。',

  'about.title': '关于我',
  'about.subtitle':
    '这里可以写你的简介、擅长领域、职业方向、以及你希望读者从这个网站获得什么。',
  'about.section.basic': '基本信息',
  'about.basic.city': '所在城市：待填写',
  'about.basic.focus': '方向：前端 / 后端 / 数据 / 其他（可改）',
  'about.basic.contact': '联系：邮箱 / GitHub / 公众号（可改）',

  'projects.title': '项目',
  'projects.subtitle': '这里集中展示你做过的项目与个人作品，可以放链接、截图、与简要复盘。',

  'notes.title': '笔记',
  'notes.subtitle': '按主题归档，方便快速查找与复习。',
  'notes.topics': '主题',
  'notes.all': '全部',
  'notes.empty': '这个主题下还没有笔记。',

  'code.title': '代码与程序',
  'code.subtitle': '这里适合放你常用的代码片段、脚本、小工具，或链接到 GitHub 仓库。',
}

const en: Dict = {
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.projects': 'Projects',
  'nav.notes': 'Notes',
  'nav.code': 'Code',
  'nav.lang': 'Language',

  'site.title': 'Personal Site',
  'footer.builtWith': 'Built with Vite + React',

  'home.title': "Hi, I'm (Your Name)",
  'home.subtitle':
    'This is my personal website for reading notes, study notes, code snippets, projects, and a short introduction.',
  'home.cta.notes': 'Read notes',
  'home.cta.projects': 'View projects',
  'home.card.reading': 'Reading Notes',
  'home.card.readingTitle': 'Key takeaways & highlights',
  'home.card.readingDesc': 'Organized by books and topics for easy review.',
  'home.card.learning': 'Study Notes',
  'home.card.learningTitle': 'Concepts & practice',
  'home.card.learningDesc': 'Learning path, pitfalls, and practical conclusions.',
  'home.card.code': 'Code & Programs',
  'home.card.codeTitle': 'Snippets & utilities',
  'home.card.codeDesc': 'Reusable snippets and small templates.',

  'about.title': 'About',
  'about.subtitle':
    'Write your bio, strengths, focus area, and what readers can gain from this site.',
  'about.section.basic': 'Basics',
  'about.basic.city': 'City: TBD',
  'about.basic.focus': 'Focus: Frontend / Backend / Data / Other',
  'about.basic.contact': 'Contact: Email / GitHub / etc.',

  'projects.title': 'Projects',
  'projects.subtitle':
    'Showcase your work here: links, screenshots, and short retrospectives.',

  'notes.title': 'Notes',
  'notes.subtitle': 'Organized by topics for quick lookup and review.',
  'notes.topics': 'Topics',
  'notes.all': 'All',
  'notes.empty': 'No notes in this topic yet.',

  'code.title': 'Code',
  'code.subtitle':
    'A place for frequently used snippets, scripts, utilities, or links to GitHub repos.',
}

const dictionaries: Record<Lang, Dict> = { zh, en }

type I18nState = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nState | null>(null)

const STORAGE_KEY = 'personal-website.lang'

export function I18nProvider({ children }: PropsWithChildren) {
  const [lang, setLang] = useState<Lang>('zh')

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'zh' || saved === 'en') setLang(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
  }, [lang])

  const t = useMemo(() => {
    const dict = dictionaries[lang]
    return (key: string) => dict[key] ?? key
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}

