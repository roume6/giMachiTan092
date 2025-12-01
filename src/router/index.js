import { createRouter, createWebHashHistory } from 'vue-router';
import Home_default from '@/components/Home_default.vue';
import GuestHouse from '@/components/GuestHouse.vue';
import Cafetantan from '@/components/Cafetantan.vue';
import Consultant from '@/components/Consultant.vue';
import NewsDetail from '@/components/NewsDetail.vue';

const routes = [
    {
      path: '/',
      name: 'Home_default',
      component: Home_default,
      props: true
    },
    {
      path: '/GuestHouse',
      name: 'GuestHouse',
      component: GuestHouse,
      props: true
    },
    {
      path: '/Cafetantan',
      name: 'Cafetantan',
      component: Cafetantan,
      props: true
    },
    {
      path: '/Consultant',
      name: 'Consultant',
      component: Consultant,
      props: true
    },
    {
      path: '/NewsDetail',
      name: 'NewsDetail',
      component: NewsDetail,
      props: true
    },
  ]

export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});