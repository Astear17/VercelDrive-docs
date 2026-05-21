import { withLocales } from 'nextra/locales'

export const middleware = withLocales((request) => {
  // Empty middleware to just trigger Nextra's default i18n rewrite
})
