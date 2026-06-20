/* eslint-disable import/no-anonymous-default-export */
import Logo from './components/logo'

const YEAR = new Date().getFullYear()

export default {
  logo: <Logo />,
  project: {
    link: 'https://github.com/Astear17/VercelDrive'
  },
  docsRepositoryBase: 'https://github.com/Astear17/VercelDrive-docs/tree/main/src/pages',
  head: (
    <>
      <meta name="msapplication-TileColor" content="#0d1117" />
      <meta name="theme-color" content="#0d1117" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="VercelDrive — OneDrive directory app powered by Vercel and Next.js" />
      <meta name="apple-mobile-web-app-title" content="VercelDrive" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  ),
  i18n: [
    { locale: 'en', name: 'English' },
    { locale: 'vi', name: 'Tiếng Việt' }
  ],
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  toc: {
    float: true
  },
  navigation: {
    prev: true,
    next: true
  },
  search: true,
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark'
  },
  color: {
    hue: 150,
    saturation: 45,
    lightness: 42
  },
  footer: {
    content: `© ${YEAR} Astear17`
  },
  editLink: {
    content: ({ locale }) => locale === 'vi' ? 'Chỉnh sửa trang này trên GitHub' : 'Edit this page on GitHub'
  },
  feedback: {
    content: null
  }
}
