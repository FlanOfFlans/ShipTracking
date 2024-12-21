import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createApp } from 'vue'
import { router } from './router.ts' 
import App from './App.vue'

const vuetify = createVuetify({
    components,
    directives
});

// TODO set up custom Vuetify themes here

createApp(App)
    .use(vuetify)
    .use(router)
    .mount('#app');