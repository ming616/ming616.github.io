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

export const sections: Section[] = [
  { slug: 'index', path: '/', zh: '首页', en: 'Home' },
  { slug: 'research', path: '/research', zh: '研究方向', en: 'Research' },
  { slug: 'publications', path: '/publications', zh: '论文成果', en: 'Publications' },
  { slug: 'projects', path: '/projects', zh: '科研项目', en: 'Projects' },
  { slug: 'code', path: '/code', zh: '研究代码', en: 'Code' },
  { slug: 'team', path: '/team', zh: '团队与培养', en: 'Team' },
  { slug: 'teaching', path: '/teaching', zh: '教学', en: 'Teaching' },
  { slug: 'collaboration', path: '/collaboration', zh: '合作方向', en: 'Collaboration' },
  { slug: 'about', path: '/about', zh: '负责人简介', en: 'About' },
];
