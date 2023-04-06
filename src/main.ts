import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as Sentry from '@sentry/vue'

import App from './App.vue'
import router from './router'

import './assets/main.scss'

const app = createApp(App)

// Sentry
Sentry.init({
  app,
  dsn: 'https://a07193bde31740a5bbce6e30d6dc593d@o4504968911126528.ingest.sentry.io/4504969106030592',
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracePropagationTargets: ['localhost', 't1nkl.dev', /^\//]
    }),
    new Sentry.Replay()
  ],
  tracesSampleRate: 1.0,
  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,
  // If the entire session is not sampled, use the below sample rate to sample
  // sessions when an error occurs.
  replaysOnErrorSampleRate: 1.0,
  release: 'portfolio_website@3.0.1'
})

app.use(createPinia())
app.use(router)

app.mount('#app')
