# ming616.github.io

刘小明（Xiaoming Liu）个人学术主页：<https://ming616.github.io>

- 技术栈：**Astro**（静态优先）+ GitHub Pages（GitHub Actions 构建发布）
- **中英双版本**：默认中文在 `/`，英文版在 `/en/`，顶部可一键切换
- 9 个栏目：首页 / 研究方向 / 论文成果 / 科研项目 / 研究代码 / 团队与培养 / 教学 / 合作方向 / 负责人简介

## 目录结构

```
src/
  data/site.ts        # 站点元数据：身份、栏目注册表、中英导航文案
  layouts/Base.astro  # 公共布局：导航、语言切换、页脚、样式
  content/
    zh/*.md           # 9 个栏目中文内容
    en/*.md           # 9 个栏目英文内容
  pages/
    *.astro           # 中文路由页（/）
    en/*.astro        # 英文路由页（/en/）
.github/workflows/deploy.yml   # 构建并发布到 GitHub Pages
```

## 本地开发

```bash
npm install
npm run dev      # 本地预览 http://localhost:4321
npm run build    # 产出 dist/
```

## 部署

推送到 `master` 后，GitHub Actions（`.github/workflows/deploy.yml`）自动 `astro build` 并发布到 GitHub Pages。需在仓库 Settings → Pages 将 Source 设为 **GitHub Actions**。
