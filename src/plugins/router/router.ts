import { NavigationFailure, RouteLocationNormalized, createRouter, createWebHistory } from 'vue-router'

import routes from '@constants/routes';
import { useUserStore } from '@stores/user.store';

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
    scrollBehavior(to, _, savedPosition) {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (savedPosition) {
                    resolve(savedPosition)
                    return;
                }

                if (to.hash) {
                    resolve({
                        el: to.hash,
                        behavior: 'smooth',
                    })
                    return;
                }

                resolve({ top: 0 })
            }, 500)
        })

    }
})

router.beforeEach((to: RouteLocationNormalized) => {
    // instead of having to check every route record with
    const { user } = useUserStore();
    console.log('----', user)
    if (to.meta.requiresAuth && !user) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        return {
            path: '/login',
            // save the location we were at to come back later
            query: { redirect: to.fullPath },
        }
    }
    if (to.path === '/login' && user) {
        return {
            path: ''
        }
    }
})

router.afterEach((to: RouteLocationNormalized, from: RouteLocationNormalized, failure: NavigationFailure | void) => {
    if (failure) {
        // sendToAnalytics(to, from, failure)
    }
})

export default router;