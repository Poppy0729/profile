// src/plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@/styles/main.scss'
import { en } from 'vuetify/locale';


export const vuetify = createVuetify({
    ssr: true,
    components: {
        ...components,
    },
    locale: {
        locale: 'th-GB', // Set default locale
        fallback: 'en',  // Fallback to English if not found
        messages: {
            'th-GB': {
              ...en,
            },
          },
      },
    directives,
    theme: {
        defaultTheme: 'light',
        themes: {
            light: {
                colors: {
                    greenish: '#1094FB',
                    background: "#FFFFFF",
                    accent: "#3D87E4",
                    surface: '#FFFFFF',
                    primary: '#4a148c',
                    secondary: '#1094FB',
                    error: '#E60000',
                    info: '#2196F3',
                    success: '#1AAA55',
                    warning: '#FB8C00',
                    anchor: '#8c9eff',
                },
                dark: false,
                variables: {
                    'border-color': '#E2DFDF',
                    'border-opacity': 1,
                    'high-emphasis-opacity': 0.87,
                    'medium-emphasis-opacity': 1,
                    'disabled-opacity': 0.38,
                    'idle-opacity': 0.04,
                    'hover-opacity': 0.12,
                    'focus-opacity': 0.5,
                    'selected-opacity': 0.08,
                    'activated-opacity': 0.12,
                    'pressed-opacity': 0.5,
                    'dragged-opacity': 0.08,
                    'theme-kbd': '#FFDD33',
                    'theme-on-kbd': '#FFDD33',
                    'theme-code': '#4CAF50',
                    'theme-on-code': '#FFDD33',
                }
            },
        }
    }
})
 