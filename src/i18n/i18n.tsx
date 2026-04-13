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
  'nav.blog': '博客',
  'nav.code': '代码',
  'nav.lang': '语言',

  'site.title': '个人网站',
  'footer.builtWith': '由 Vite + React 构建',

  'home.title': '你好，我是 忘言',
  'home.subtitle':
    '这里是我的个人网站，用来整理读书笔记、学习笔记，展示一些代码，项目经历。',
  'home.cta.notes': '去看笔记',
  'home.cta.blog': '阅读博客',
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
    '怕什么真理无穷，进一寸有一寸的欢喜',
  'about.section.basic': '基本信息',
  'about.basic.city': '爱好:足球/摄影/电影/读书',
  'about.basic.focus': '方向：嵌入式软件',
  'about.basic.contact': '联系：邮箱 / GitHub / 公众号',

  'projects.title': '项目',
  'projects.subtitle': '这里集中展示我做过的一些小项目。',

  'notes.title': '笔记',
  'notes.subtitle': '按主题归档，方便快速查找与复习。',
  'notes.topics': '主题',
  'notes.all': '全部',
  'notes.empty': '这个主题下还没有笔记。',

  'blog.title': '博客',
  'blog.subtitle': '分享一些日常生活，记录生活的美好，谈一些个人的看法和理解。',
  'blog.readMore': '阅读全文',
  'notes.back': '返回列表',
  'blog.empty': '还没有发布任何博客。',

  'code.title': '代码与程序',
  'code.subtitle': '这里适合放你常用的代码片段、脚本、小工具，或链接到 GitHub 仓库。',
}

const en: Dict = {
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.projects': 'Projects',
  'nav.notes': 'Notes',
  'nav.blog': 'Blog',
  'nav.code': 'Code',
  'nav.lang': 'Language',

  'site.title': 'Personal Site',
  'footer.builtWith': 'Built with Vite + React',

  'home.title': "Hi, I'm WY",
  'home.subtitle':
    'This is my personal website for reading notes, study notes, code snippets, projects, and a short introduction.',
  'home.cta.notes': 'Read notes',
  'home.cta.blog': 'Read blog',
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
    'Fear nothing, for every moment is a fresh beginning.',
  'about.section.basic': 'Basics',
  'about.basic.city': 'Hobbies: Football / Photography / Movie / Reading',
  'about.basic.focus': 'Focus: Embedded Software',
  'about.basic.contact': 'Contact: Email / GitHub / WeChat',

  'projects.title': 'Projects',
  'projects.subtitle':
    'Showcase your work here: links, screenshots, and short retrospectives.',

  'notes.title': 'Notes',
  'notes.subtitle': 'Organized by topics for quick lookup and review.',
  'notes.topics': 'Topics',
  'notes.all': 'All',
  'notes.empty': 'No notes in this topic yet.',

  'blog.title': 'Blog',
  'blog.subtitle': 'Daily sharing and life stories.',
  'blog.readMore': 'Read More',
  'notes': 'Back to list',
  'blog.empty': 'No blog posts yet.',

  'code.title': 'Code & Programs',
  'code.subtitle': 'Reusable snippets, scripts, small utilities, or links to GitHub.',
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
