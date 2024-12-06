import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://tripalium101.github.io',
  base: '/',
  integrations: [starlight({
    title: 'Tripalium101',
    logo: {
      src: './src/assets/logo.png'
    },
    social: {
      github: 'https://github.com/louisescher/starlight-ion-theme'
    },
    sidebar: [{
      label: '[home] Home',
      link: '/'
    }, {
      label: '[list] Features',
      link: '/features/'
    },
    {
      label: '[box] Targeted Markets',
      autogenerate: {
        directory: 'TargetedMarkets'
      }
    },
    {
      label: '[box] Reclamation',
      autogenerate: {
        directory: 'reclamation'
      }
    }
  
  ],
    components: {
      ThemeProvider: './src/components/ThemeProvider.astro',
      ThemeSelect: './src/components/ThemeSelect.astro',
      SiteTitle: './src/components/SiteTitle.astro',
      Sidebar: './src/components/Sidebar.astro',
      Pagination: './src/components/Pagination.astro',
      Hero: './src/components/Hero.astro',
      Head: './src/components/Head.astro',
      PageTitle: './src/components/PageTitle.astro'
    },
    customCss: [
      '@fontsource-variable/space-grotesk/index.css',
      '@fontsource/space-mono/400.css',
      '@fontsource/space-mono/700.css',
      './src/styles/theme.css'
    ],
    expressiveCode: {
      themes: ['github-dark']
    },
    pagination: false,
    lastUpdated: true
  })],
  output: "static"
});