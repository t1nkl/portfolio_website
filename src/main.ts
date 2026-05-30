import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as Sentry from '@sentry/vue'

import App from './App.vue'
import router from './router'

import './assets/tailwind.css'
import './assets/fonts.css'
import './assets/main.scss'

const app = createApp(App)

if (import.meta.env.PROD) {
  // Sentry
  Sentry.init({
    app,
    dsn: 'https://a07193bde31740a5bbce6e30d6dc593d@o4504968911126528.ingest.sentry.io/4504969106030592',
    integrations: [Sentry.browserTracingIntegration({ router }), Sentry.replayIntegration()],
    tracePropagationTargets: ['localhost', 't1nkl.dev', /^\//],
    tracesSampleRate: 1.0,
    // This sets the sample rate to be 10%. You may want this to be 100% while
    // in development and sample at a lower rate in production
    replaysSessionSampleRate: 0.1,
    // If the entire session is not sampled, use the below sample rate to sample
    // sessions when an error occurs.
    replaysOnErrorSampleRate: 1.0,
    release: 'portfolio_website@3.1.0'
  })
}

app.use(createPinia())
app.use(router)

app.mount('#app')
