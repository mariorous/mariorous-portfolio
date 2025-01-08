import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import Blog from '../components/Blog.vue'; // Página del blog

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog, // Componente de la página del blog
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
