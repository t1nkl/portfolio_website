import { defineStore } from 'pinia'
import type { Project } from '@/models/Project'

interface ProjectsState {
  projectsList: Project[]
}

export const useProjectsStore = defineStore({
  id: 'projects',
  state: (): ProjectsState =>
    <ProjectsState>{
      projectsList: [
        {
          title: 'Classified',
          image: '/img/works/svitla-classified-2.png',
          type: 'Enterprise Risks Management',
          stack: 'Classified',
          company: '<a href="https://svitla.com" target="_blank">Svitla Systems Inc.</a>',
          url: null
        },
        {
          title: 'Classified',
          image: '/img/works/svitla-classified-1.png',
          type: 'Enterprise Video Analytics',
          stack: 'Classified',
          company: '<a href="https://svitla.com" target="_blank">Svitla Systems Inc.</a>',
          url: null
        },
        {
          title: 'Boosteroid Cloud',
          image: '/img/works/boosteroid-cloud.png',
          type: 'Product',
          stack: 'Classified',
          company: '<a href="https://boosteroid.com" target="_blank">Boosteroid S.R.L.</a>',
          url: 'https://cloud.boosteroid.com'
        },
        {
          title: 'Boosteroid Partners',
          image: '/img/works/boosteroid-partners.png',
          type: 'Product',
          stack: 'Laravel - Octane - Vue.js<br/>PostgreSQL',
          company: '<a href="https://boosteroid.com" target="_blank">Boosteroid S.R.L.</a>',
          url: 'https://boosteroid.partners'
        },
        {
          title: 'SARS-COV-2 Statistics',
          image: '/img/works/sars-cov-2-app.jpg',
          type: 'Website',
          stack: 'Vue.js 3',
          company: 'Personal',
          url: 'https://sars-cov-2-app.web.app'
        },
        {
          title: 'FasterPay',
          image: '/img/works/fasterpay.png',
          type: 'Enterprise Payment System',
          stack: 'Classified',
          company: '<a href="https://www.paymentwall.com" target="_blank">PaymentWall Inc.</a>',
          url: 'https://www.fasterpay.com'
        },
        {
          title: 'Terminal 3',
          image: '/img/works/terminal3.png',
          type: 'Enterprise E-Commerce System',
          stack: 'Laravel - React - MySQL',
          company: '<a href="https://www.paymentwall.com" target="_blank">PaymentWall Inc.</a>',
          url: 'https://www.terminal3.com'
        },
        {
          title: 'Samsonite',
          image: '/img/works/samsonite.jpg',
          type: 'E-Commerce',
          stack: 'DeltaCMS',
          company: '<a href="https://cf.digital" target="_blank">CF digital agency</a>',
          url: 'https://samsonite.ua'
        },
        {
          title: 'Solente',
          image: '/img/works/solente.jpg',
          type: 'Catalog',
          stack: 'DeltaCMS',
          company: '<a href="https://cf.digital" target="_blank">CF digital agency</a>',
          url: 'https://solente.ua'
        },
        {
          title: 'Julia Chulska',
          image: '/img/works/chulska.jpg',
          type: 'Portfolio',
          stack: 'DeltaCMS',
          company: '<a href="https://cf.digital" target="_blank">CF digital agency</a>',
          url: 'https://chulska.com'
        },
        {
          title: 'DeltaCMS',
          image: '/img/works/delta.jpg',
          type: 'CMS',
          stack: 'Laravel - Vue.js - ElementUI<br/>MySQL',
          company: '<a href="https://cf.digital" target="_blank">CF digital agency</a>',
          url: 'http://206.189.53.55/auth/login'
        },
        {
          title: 'UltraGroup',
          image: '/img/works/ultragroup.jpg',
          type: 'Corporate',
          stack: 'Laravel - MySQL',
          company: '<a href="https://cf.digital" target="_blank">CF digital agency</a>',
          url: 'https://ultragroup.com.ua'
        },
        {
          title: 'Imperium Investments',
          image: '/img/works/imperium.jpg',
          type: 'Corporate',
          stack: 'Laravel - MySQL',
          company: '<a href="https://cf.digital" target="_blank">CF digital agency</a>',
          url: 'https://imperiuminvestments.co.uk'
        },
        {
          title: "L'Oreal",
          image: '/img/works/loreal.jpg',
          type: 'Corporate',
          stack: 'Laravel - MySQL',
          company: '<a href="https://cf.digital" target="_blank">CF digital agency</a>',
          url: 'https://loreal.ua'
        },
        {
          title: 'CatChat',
          image: '/img/works/catchat.jpg',
          type: 'Landing',
          stack: 'Laravel - MySQL',
          company: '<a href="https://cf.digital" target="_blank">CF digital agency</a>',
          url: 'https://catchat.life'
        },
        {
          title: 'Puzata Hata',
          image: '/img/works/puzatahata.jpg',
          type: 'Corporate',
          stack: 'Laravel - MySQL',
          company: '<a href="https://cf.digital" target="_blank">CF digital agency</a>',
          url: 'https://puzatahata.ua'
        },
        {
          title: 'VESNAmedia',
          image: '/img/works/vesnamedia.jpg',
          type: 'Blog',
          stack: 'Laravel - Bootstrap - jQuery<br/>Slick - Modernizr<br/>MySQL',
          company: '<a href="https://leodigital.com.ua" target="_blank">LeoDigital agency</a>',
          url: 'https://www.vesnamedia.com'
        },
        {
          title: 'Barometer',
          image: '/img/works/barometer.jpg',
          type: 'Landing',
          stack: 'Laravel - Bootstrap - jQuery<br/>Vue.js - Lodash<br/>MySQL',
          company: '<a href="https://leodigital.com.ua" target="_blank">LeoDigital agency</a>',
          url: 'http://2017.barometer.show'
        },
        {
          title: 'Harveast Portal',
          image: '/img/works/harvest.jpg',
          type: 'Corporate',
          stack: 'Laravel - Bootstrap - jQuery<br/>Vue.js - Lodash<br/>MySQL',
          company: '<a href="https://leodigital.com.ua" target="_blank">LeoDigital agency</a>',
          url: 'https://harveast.com'
        },
        {
          title: 'Skydiving Center',
          image: '/img/works/skydiving.jpg',
          type: 'Corporate',
          stack: 'Laravel - jQuery - Moment.js<br/>Vue.js - Polyfill<br/>MySQL',
          company: '<a href="https://leodigital.com.ua" target="_blank">LeoDigital agency</a>',
          url: 'https://skydiving.com.ua'
        },
        {
          title: 'Anna-Ki',
          image: '/img/works/annaki.jpg',
          type: 'Corporate',
          stack: 'Laravel - jQuery - Moment.js<br/>Vue.js - Polyfill<br/>MySQL',
          company: '<a href="https://leodigital.com.ua" target="_blank">LeoDigital agency</a>',
          url: 'https://annaki.com.ua'
        },
        {
          title: 'Svyatopetrovsky RC',
          image: '/img/works/svyatopetrovskyi.jpg',
          type: 'Corporate',
          stack: 'Laravel - Bootstrap - jQuery<br/>MySQL',
          company: '<a href="https://leodigital.com.ua" target="_blank">LeoDigital agency</a>',
          url: 'https://www.svyatopetrovskyi.com.ua'
        },
        {
          title: 'Chaikivskyi',
          image: '/img/works/chaikivskyi.jpg',
          type: 'Portfolio',
          stack: 'Laravel - jQuery - MySQL',
          company: '<a href="https://leodigital.com.ua" target="_blank">LeoDigital agency</a>',
          url: null
        },
        {
          title: 'As Breus',
          image: '/img/works/asbreus.jpg',
          type: 'Portfolio',
          stack: 'Laravel - Bootstrap - jQuery<br/>OWL Carousel - FancyBox<br/>MySQL',
          company: '<a href="https://leodigital.com.ua" target="_blank">LeoDigital agency</a>',
          url: 'https://as-breus.com'
        },
        {
          title: 'Impire Tattoo',
          image: '/img/works/imperiatatu.jpg',
          type: 'Portfolio',
          stack: 'Laravel - jQuery - MySQL',
          company: '<a href="https://leodigital.com.ua" target="_blank">LeoDigital agency</a>',
          url: null
        },
        {
          title: 'LeoDigital',
          image: '/img/works/leodigital.jpg',
          type: 'Corporate',
          stack: 'Laravel - jQuery - MySQL',
          company: '<a href="https://leodigital.com.ua" target="_blank">LeoDigital agency</a>',
          url: 'https://leodigital.com.ua'
        },
        {
          title: 'Matrasik',
          image: '/img/works/matrasik.jpg',
          type: 'E-Commerce',
          stack: 'WordPress',
          company: '<a href="https://leodigital.com.ua" target="_blank">LeoDigital agency</a>',
          url: 'https://matrasik.kiev.ua'
        }
      ]
    },
  getters: {
    getProjectsList: (state) => state.projectsList
  }
})
