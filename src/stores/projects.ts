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
          url: '<a href="https://cloud.boosteroid.com" target="_blank">VISIT</a>'
        },
        {
          title: 'Boosteroid Partners',
          image: '/img/works/boosteroid-partners.png',
          type: 'Product',
          stack: 'Classified',
          company: '<a href="https://boosteroid.com" target="_blank">Boosteroid S.R.L.</a>',
          url: '<a href="https://boosteroid.partners" target="_blank">VISIT</a>'
        },
        {
          title: 'SARS-COV-2 Statistics',
          image: '/img/works/sars-cov-2-app.jpg',
          type: 'Website',
          stack: 'Vue.js (Vue SLI)',
          company: 'Personal',
          url: '<a href="https://sars-cov-2-app.web.app" target="_blank">VISIT</a>'
        },
        {
          title: 'FasterPay',
          image: '/img/works/fasterpay.png',
          type: 'Enterprise Payment System',
          stack: 'Classified',
          company: '<a href="https://www.paymentwall.com" target="_blank">PaymentWall Inc.</a>',
          url: '<a href="https://www.fasterpay.com" target="_blank">VISIT</a>'
        },
        {
          title: 'Terminal 3',
          image: '/img/works/terminal3.png',
          type: 'Enterprise E-Commerce System',
          stack: 'Classified',
          company: '<a href="https://www.paymentwall.com" target="_blank">PaymentWall Inc.</a>',
          url: '<a href="https://www.terminal3.com" target="_blank">VISIT</a>'
        },
        {
          title: 'Samsonite',
          image: '/img/works/samsonite.jpg',
          type: 'E-Commerce',
          stack: 'DeltaCMS',
          company: '<a href="https://cf.digital" target="_blank">CF digital agency</a>',
          url: '<a href="https://samsonite.ua" target="_blank">VISIT</a>'
        },
        {
          title: 'Solente',
          image: '/img/works/solente.jpg',
          type: 'Catalog',
          stack: 'DeltaCMS',
          company: '<a href="https://cf.digital" target="_blank">CF digital agency</a>',
          url: '<a href="https://solente.ua" target="_blank">VISIT</a>'
        },
        {
          title: 'Julia Chulska',
          image: '/img/works/chulska.jpg',
          type: 'Portfolio',
          stack: 'DeltaCMS',
          company: '<a href="https://cf.digital" target="_blank">CF digital agency</a>',
          url: '<a href="https://chulska.com" target="_blank">VISIT</a>'
        },
        {
          title: 'DeltaCMS',
          image: '/img/works/delta.jpg',
          type: 'CMS',
          stack: 'Laravel - Vue.js (SPA) - Tailwind.css - ElementUI - Redis - PostgreSQL',
          company: '<a href="https://cf.digital" target="_blank">CF digital agency</a>',
          url: '<a href="http://206.189.53.55/auth/login" target="_blank">VISIT</a>'
        },
        {
          title: 'UltraGroup',
          image: '/img/works/ultragroup.jpg',
          type: 'Corporate',
          stack: 'Laravel - MySQL',
          company: '<a href="https://cf.digital" target="_blank">CF digital agency</a>',
          url: '<a href="https://ultragroup.com.ua" target="_blank">VISIT</a>'
        },
        {
          title: 'Imperium Investments',
          image: '/img/works/imperium.jpg',
          type: 'Corporate',
          stack: 'Laravel - MySQL',
          company: '<a href="https://cf.digital" target="_blank">CF digital agency</a>',
          url: '<a href="http://imperiuminvestments.co.uk" target="_blank">VISIT</a>'
        },
        {
          title: "L'Oreal",
          image: '/img/works/loreal.jpg',
          type: 'Corporate',
          stack: 'Laravel - MySQL',
          company: '<a href="https://cf.digital" target="_blank">CF digital agency</a>',
          url: '<a href="https://loreal.ua" target="_blank">VISIT</a>'
        },
        {
          title: 'CatChat',
          image: '/img/works/catchat.jpg',
          type: 'Goods',
          stack: 'Laravel - MySQL',
          company: '<a href="https://cf.digital" target="_blank">CF digital agency</a>',
          url: '<a href="http://catchat.life" target="_blank">VISIT</a>'
        },
        {
          title: 'Puzata Hata',
          image: '/img/works/puzatahata.jpg',
          type: 'Corporate',
          stack: 'Laravel - MySQL',
          company: '<a href="https://cf.digital" target="_blank">CF digital agency</a>',
          url: '<a href="https://puzatahata.ua" target="_blank">VISIT</a>'
        },
        {
          title: 'VESNAmedia',
          image: '/img/works/vesnamedia.jpg',
          type: 'News',
          stack: 'Laravel - Bootstrap - jQuery - Slick - Modernizr - MySQL',
          company: '<a href="https://leodigital.com.ua" target="_blank">LeoDigital agency</a>',
          url: '<a href="https://www.vesnamedia.com" target="_blank">VISIT</a>'
        },
        {
          title: 'Barometer',
          image: '/img/works/barometer.jpg',
          type: 'Event',
          stack: 'Laravel - Bootstrap - jQuery - Vue.js - Lodash - MySQL',
          company: '<a href="https://leodigital.com.ua" target="_blank">LeoDigital agency</a>',
          url: '<a href="http://2017.barometer.show" target="_blank">VISIT</a>'
        },
        {
          title: 'Harveast Portal',
          image: '/img/works/harvest.jpg',
          type: 'Corporate',
          stack: 'Laravel - Bootstrap - jQuery - Vue.js - Lodash - MySQL',
          company: '<a href="https://leodigital.com.ua" target="_blank">LeoDigital agency</a>',
          url: '<a href="https://harveast.com" target="_blank">VISIT</a>'
        },
        {
          title: 'Skydiving Center',
          image: '/img/works/skydiving.jpg',
          type: 'Corporate',
          stack: 'Laravel - jQuery - Vue.js - Moment.js - Polyfill - MySQL',
          company: '<a href="https://leodigital.com.ua" target="_blank">LeoDigital agency</a>',
          url: '<a href="http://skydiving.com.ua" target="_blank">VISIT</a>'
        },
        {
          title: 'Anna-Ki',
          image: '/img/works/annaki.jpg',
          type: 'Corporate',
          stack: 'Laravel - jQuery - Vue.js - Moment.js - Polyfill - MySQL',
          company: '<a href="https://leodigital.com.ua" target="_blank">LeoDigital agency</a>',
          url: '<a href="https://annaki.com.ua" target="_blank">VISIT</a>'
        },
        {
          title: 'Svyatopetrovsky RC',
          image: '/img/works/svyatopetrovskyi.jpg',
          type: 'Corporate',
          stack: 'Laravel - Bootstrap - jQuery - MySQL',
          company: '<a href="https://leodigital.com.ua" target="_blank">LeoDigital agency</a>',
          url: '<a href="http://www.svyatopetrovskyi.com.ua" target="_blank">VISIT</a>'
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
          stack: 'Laravel - Bootstrap - jQuery - FancyBox - OWL Carousel - MySQL',
          company: '<a href="https://leodigital.com.ua" target="_blank">LeoDigital agency</a>',
          url: '<a href="http://as-breus.com" target="_blank">VISIT</a>'
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
          url: '<a href="https://leodigital.com.ua" target="_blank">VISIT</a>'
        },
        {
          title: 'Matrasik',
          image: '/img/works/matrasik.jpg',
          type: 'E-Commerce',
          stack: 'WordPress',
          company: '<a href="https://leodigital.com.ua" target="_blank">LeoDigital agency</a>',
          url: '<a href="https://matrasik.kiev.ua" target="_blank">VISIT</a>'
        }
      ]
    },
  getters: {
    getProjectsList: (state) => state.projectsList
  }
})
