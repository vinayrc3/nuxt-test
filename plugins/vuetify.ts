// import this after install `@mdi/font` package
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import vuetifyConfig from '~/vuetify/config';

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ...vuetifyConfig,
    components,
    directives,
    ssr: true,
  })
  app.vueApp.use(vuetify)
})
