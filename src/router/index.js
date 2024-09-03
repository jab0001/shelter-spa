import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../views/HomeView.vue";
import ErrorView from "../views/ErrorView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: MainPage,
  },
  {
    path: "/shelters",
    name: "shelters",
    component: () =>
      import(/* webpackChunkName: "shelters" */ "../views/SheltersView.vue"),
  },
  {
    path: "/shelters/:id", // Исправленный синтаксис
    name: "shelter",
    component: () =>
      import(/* webpackChunkName: "shelter" */ "../views/ShelterView.vue"),
  },
  {
    path: "/blogs",
    name: "blogs",
    component: () =>
      import(/* webpackChunkName: "blogs" */ "../views/BlogsView.vue"),
  },
  {
    path: "/blogs/:id", // Исправленный синтаксис
    name: "blog",
    component: () =>
      import(/* webpackChunkName: "blog" */ "../views/BlogView.vue"),
  },
  {
    path: "/new-topic", // Исправленный синтаксис
    name: "new-topic",
    component: () =>
      import(/* webpackChunkName: "new-topic" */ "../views/NewTopicView.vue"),
  },
  {
    path: "/get-in-touch", // Исправленный синтаксис
    name: "get-in-touch",
    component: () =>
      import(/* webpackChunkName: "get-touch" */ "../views/GetTouchView.vue"),
  },
  {
    path: "/privacy", // Исправленный синтаксис
    name: "privacy",
    component: () =>
      import(/* webpackChunkName: "privacy" */ "../views/PrivacyView.vue"),
  },
  {
    path: "/terms", // Исправленный синтаксис
    name: "terms",
    component: () =>
      import(/* webpackChunkName: "terms" */ "../views/TermsView.vue"),
  },
  {
    path: "/disclaimer", // Исправленный синтаксис
    name: "disclaimer",
    component: () =>
      import(/* webpackChunkName: "privacy" */ "../views/DisclaimerView.vue"),
  },
  {
    path: "/support", // Исправленный синтаксис
    name: "support",
    component: () =>
      import(/* webpackChunkName: "support" */ "../views/SupportView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "shelters" */ "../views/AboutView.vue"),
  },

  { path: "*", name: "404", component: ErrorView },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
});

export default router;
