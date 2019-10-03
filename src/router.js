import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./layouts/Dashboard/Dashboard.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./layouts/Login/Login.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./layouts/Home/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./layouts/About/About.vue'),
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: () => import('./layouts/Teachers/Teachers.vue'),
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('./layouts/Courses/Courses.vue'),
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('./layouts/Gallery/Gallery.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('./layouts/Blog/Blog.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./layouts/Contact/Contact.vue'),
    },
    {
      path: '/404',
      name: '404',
      component: () => import('./layouts/PageNotFound/PageNotFound.vue'),
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
});
