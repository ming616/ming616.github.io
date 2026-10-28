// Central site metadata: identity, section registry, and i18n copy.
// Content bodies live in src/content/{zh,en}/<section>.md; this file only
// carries the navigation / chrome strings so the layout can render both
// languages from one source of truth.

export type Lang = 'zh' | 'en';

export const identity = {
  nameZh: '刘小明',
  nameEn: 'Xiaoming Liu',
  titleZh: '副教授 · 工学博士 · 硕士生导师',
  titleEn: 'Associate Professor, Ph.D., Master’s Supervisor',
  orgZh: '中原工学院 人工智能学院',
  orgEn: 'School of Artificial Intelligence, Zhongyuan University of Technology',
  taglineZh:
    '面向真实行业需求的专业化智能服务及其可靠性研究',
  taglineEn:
    'Reliable, domain-specialized intelligent services driven by real industry needs',
  email: 'ming616@zut.edu.cn',
  emailAlt: 'ming616@gmail.com',
  github: 'ming616',
  phone: ['15617875707', '13641117846'],
} as const;

// Section registry. `slug` is the file name in src/content/<lang>/<slug>.md.
// `path` is the English route; Chinese is the same path without /en.
export interface Section {
  slug: string;
  path: string; // e.g. '/research' (zh) -> '/en/research' (en)
  zh: string; // nav label (Chinese)
  en: string; // nav label (English)
}

// Home page structured content (custom hero design, not markdown).
export const home = {
  zh: {
    tagline:
      '面向真实行业需求的专业化智能服务及其可靠性研究——在数据、算力、专业知识与业务规则等约束下，运用大模型、智能体协作、知识表示、图学习与因果智能，构建满足复杂专业任务需求的可靠智能服务系统。',
    themesTitle: '研究方向',
    themes: [
      { t: '专业化智能服务与多智能体协作', en: 'Agentic AI', d: '任务分解、协同规划、动态调度与模型—工具协作' },
      { t: '智能服务可靠性评价与增强', en: 'Reliability', d: '可信、忠实、可解释、一致、泛化维度下的失效发现与增强' },
      { t: '知识表示、图学习与因果智能', en: 'Causal Intelligence', d: '因果不变学习、因果一致性、知识约束推理' },
      { t: '智能服务软件体系与工程', en: 'Systems & Engineering', d: '多模型、多智能体、多工具的可运行可评价系统' },
    ],
    domainsTitle: '重点应用领域',
    domains: ['智能工业设计与工程制图', '智慧医疗与呼吸重症', '智慧康养与异常行为检测', '智能教育教学服务', '跨境电子商务智能服务'],
    moreLinks: [
      { href: '/research', label: '研究方向' },
      { href: '/publications', label: '论文成果' },
      { href: '/projects', label: '科研项目' },
      { href: '/team', label: '团队与培养' },
    ],
    moreTitle: '进一步了解',
    contactTitle: '联系方式',
  },
  en: {
    tagline:
      'Reliable, domain-specialized intelligent services driven by real industry needs — leveraging large models, agentic collaboration, knowledge representation, graph learning and causal intelligence to build reliable systems for complex professional tasks.',
    themesTitle: 'Research Themes',
    themes: [
      { t: 'Specialized Services & Multi-Agent Collaboration', en: 'Agentic AI', d: 'Task decomposition, planning, dynamic scheduling, model–tool collaboration' },
      { t: 'Reliability Assessment & Enhancement', en: 'Reliability', d: 'Trustworthiness, faithfulness, interpretability, consistency, generalization' },
      { t: 'Knowledge, Graph Learning & Causal Intelligence', en: 'Causal Intelligence', d: 'Causal invariance, causal consistency, knowledge-constrained reasoning' },
      { t: 'Intelligent Service Software Systems', en: 'Systems & Engineering', d: 'Runnable, testable, evaluable multi-model multi-agent systems' },
    ],
    domainsTitle: 'Key Application Domains',
    domains: ['Industrial Design & Engineering Drawing', 'Smart Healthcare & Respiratory Care', 'Smart Elder Care & Anomaly Detection', 'Intelligent Education', 'Cross-Border E-Commerce'],
    moreLinks: [
      { href: '/en/research', label: 'Research' },
      { href: '/en/publications', label: 'Publications' },
      { href: '/en/projects', label: 'Projects' },
      { href: '/en/team', label: 'Team' },
    ],
    moreTitle: 'Explore More',
    contactTitle: 'Contact',
  },
} as const;

export const sections: Section[] = [
  { slug: 'index', path: '/', zh: '首页', en: 'Home' },
  { slug: 'research', path: '/research', zh: '研究', en: 'Research' },
  { slug: 'publications', path: '/publications', zh: '论文', en: 'Papers' },
  { slug: 'projects', path: '/projects', zh: '项目', en: 'Projects' },
  { slug: 'code', path: '/code', zh: '代码', en: 'Code' },
  { slug: 'team', path: '/team', zh: '团队', en: 'Team' },
  { slug: 'teaching', path: '/teaching', zh: '教学', en: 'Teaching' },
  { slug: 'collaboration', path: '/collaboration', zh: '合作', en: 'Collab' },
  { slug: 'about', path: '/about', zh: '简介', en: 'About' },
];
