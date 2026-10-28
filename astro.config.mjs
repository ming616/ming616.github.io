import { defineConfig } from 'astro/config';

// Site: personal academic homepage for Prof. Xiaoming Liu.
// i18n via route groups: / (Chinese default) and /en/ (English).
export default defineConfig({
  site: 'https://ming616.github.io',
  trailingSlash: 'ignore',
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
