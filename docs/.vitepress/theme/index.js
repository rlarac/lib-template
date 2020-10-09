import DefaultTheme from 'vitepress/dist/client/theme-default'

export default {
  Layout: DefaultTheme.Layout,
  NotFound: DefaultTheme.NotFound, // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
  }
}