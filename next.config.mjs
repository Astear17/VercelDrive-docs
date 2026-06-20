import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.jsx',
  defaultShowCopyCode: true
})

export default withNextra({
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'en'
  },
  async redirects() {
    return [
      {
        source: '/vi-VN',
        destination: '/vi',
        permanent: true
      },
      {
        source: '/vi-VN/:path*',
        destination: '/vi/:path*',
        permanent: true
      },
      {
        source: '/sponsor',
        destination: '/sponsor/ways',
        permanent: true
      }
    ]
  },
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
})
