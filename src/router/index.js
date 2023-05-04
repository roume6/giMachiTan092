import Vue from 'vue';
import Router from 'vue-router';
import Home_default from '@/components/Home_default.vue';
import News from '@/components/News.vue';
import Discography from '@/components/Discography.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home_default',
      component: Home_default
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/Discography',
      name: 'Discography',
      component: Discography
    }
  ]
});