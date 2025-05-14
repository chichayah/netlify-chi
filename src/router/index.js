import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import About from '../components/AboutMe.vue';
import Work from '../components/MyWork.vue';
import Contact from '../components/ContactMe.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/work',
    name: 'MyWork',
    component: Work,
  },
    {
    path: '/about',
    name: 'AboutMe',
    component: About,
  },
    {
    path: '/contact',
    name: 'ContactMe',
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
