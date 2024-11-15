import { RouteRecordRaw } from 'vue-router';
import NotFoundView from '@pages/NotFoundView.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '',
        component: () => import('@templates/CMSLayoutView.vue'),
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: '',
                component: () => import('@pages/Home/HomeView.vue'),
                meta: {
                    requiresAuth: true,
                }
            },
            {
                path: '/about',
                component: () => import('@pages/About/AboutView.vue'),
                meta: {
                    requiresAuth: true,
                }
            },
        ]
    },
    {
        path: '/login',
        component: () => import('@pages/User/LoginView.vue'),
        meta: {
            requiresAuth: false
        }
    },
    { path: '/:pathMatch(.*)*', component: NotFoundView },
]

export default routes;