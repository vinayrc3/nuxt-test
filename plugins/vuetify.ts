// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import { createVuetify } from 'vuetify'

import 'vuetify/styles'
import '@/settings.scss';

import vuetifyConfig from '~/vuetify/config';

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ...vuetifyConfig,
    ssr: true,
  })
  app.vueApp.use(vuetify)
})
