import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import List from './views/List.vue';
import Shop from './views/ShopCard.vue';
import Suer from './views/Suer.vue';
import Detail from './views/Detail.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/opp',
      name: 'List',
      component: List,

    },
    {
      path: '/S',
      name: 'Shop',
      component: Shop,
    },
    {
      path: '/Ssss',
      name: 'Detail',
      component: Detail,
    },
    {
      path: '/u',
      name: 'Suer',
      component: Suer,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
