import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ElementorLayout from '@/layouts/ElementorLayout.vue'

// Maybe in the future
// const transitionRandom = ['fade', 'slide-fade'][Math.floor(Math.random() * ['fade', 'slide-fade'].length)]
const transitionRandom = 'slide-fade'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/?:(skills|projects|timeline|contacts)',
      component: ElementorLayout,
      children: [
        {
          path: '/skills',
          name: 'skills',
          meta: { transition: transitionRandom, title: 'Skills' },
          component: () => import(/* webpackChunkName: "skills" */ '@/views/SkillsView.vue')
        },
        {
          path: '/projects',
          name: 'projects',
          meta: { transition: transitionRandom, title: 'Projects' },
          component: () => import(/* webpackChunkName: "projects" */ '@/views/ProjectsView.vue')
        },
        {
          path: '/timeline',
          name: 'timeline',
          meta: { transition: transitionRandom, title: 'Timeline' },
          component: () => import(/* webpackChunkName: "timeline" */ '@/views/TimelineView.vue')
        },
        {
          path: '/contacts',
          name: 'contacts',
          meta: { transition: transitionRandom, title: 'Contacts' },
          component: () => import(/* webpackChunkName: "contacts" */ '@/views/ContactsView.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      meta: { title: 'Page not found' },
      component: () => import(/* webpackChunkName: "404" */ '@/views/404View.vue')
    }
  ]
})

const BASE_TITLE = 'Kyryll Kovalenko - Web Developer'
router.afterEach((to) => {
  const sub = to.meta.title as string | undefined
  document.title = sub ? `${sub} | ${BASE_TITLE}` : BASE_TITLE
})

export default router
