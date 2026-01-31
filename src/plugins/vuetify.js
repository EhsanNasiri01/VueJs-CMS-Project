
// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


export const vuetify = createVuetify({
    rtl:true,
    directives,
    components,
    locale: {
        locale: 'fa',
        rtl: {
            fa: true,
        },
    },
})