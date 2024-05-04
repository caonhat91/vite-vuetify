import { RouteRecordRaw } from 'vue-router';
import NotFoundView from '@pages/NotFoundView.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@pages/Home/HomeView.vue')
    },
    {
        path: '/about',
        component: () => import('@pages/About/AboutView.vue')
    },
    {
        path: '/login',
        component: () => import('@pages/User/LoginView.vue')
    },
    { path: '/:pathMatch(.*)*', component: NotFoundView },
]

export default routes;