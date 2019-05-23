import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    // route level code-splitting for lazy loading routes
    {
      path: '/men',
      name: 'men',
      component: () => import(/* webpackChunkName: "men" */ './views/Men.vue'),
    },
    {
      path: '/women',
      name: 'women',
      component: () => import(/* webpackChunkName: "women" */ './views/Women.vue'),
    },
  ],
});
