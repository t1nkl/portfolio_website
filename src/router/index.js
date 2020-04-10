import Vue from "vue";
import VueRouter from "vue-router";

import Elementor from "../components/layouts/Elementor.vue";
import Index from "../views/Index.vue";
import ErrorView from "../views/404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Elementor,
    children: [
      {
        path: "/",
        name: "api.index_page",
        component: Index,
        meta: {
          title: "Index",
        },
      },
      {
        path: "/skills",
        name: "api.skills_page",
        component: () =>
          import(/* webpackChunkName: "skills" */ "../views/Skills.vue"),
        meta: {
          title: "Skills",
        },
      },
      {
        path: "/works",
        name: "api.works_page",
        component: () =>
          import(/* webpackChunkName: "works" */ "../views/Works.vue"),
        meta: {
          title: "Works",
        },
      },
      {
        path: "/life",
        name: "api.life_page",
        component: () =>
          import(/* webpackChunkName: "life" */ "../views/Life.vue"),
        meta: {
          title: "Life",
        },
      },
      {
        path: "/contact",
        name: "api.contact_page",
        component: () =>
          import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
        meta: {
          title: "Contact",
        },
      },
      {
        path: "*",
        name: "api.404_page",
        component: ErrorView,
        meta: {
          title: "404",
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
