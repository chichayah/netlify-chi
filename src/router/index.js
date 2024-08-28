import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/AboutMe.vue';
import Work from '../components/MyWork.vue';

const routes = [
  {
    path: '/',
    name: 'AboutMe',
    component: About,
  },
  {
    path: '/work',
    name: 'MyWork',
    component: Work,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
