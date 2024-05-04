import { NavigationFailure, RouteLocationNormalized, createMemoryHistory, createRouter } from 'vue-router'

import routes from '@constants/routes';

const router = createRouter({
    history: createMemoryHistory(),
    routes,
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
    // to.matched.some(record => record.meta.requiresAuth)
    if (to.meta.requiresAuth) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        return {
            path: '/login',
            // save the location we were at to come back later
            query: { redirect: to.fullPath },
        }
    }
})

router.afterEach((to: RouteLocationNormalized, from: RouteLocationNormalized, failure: NavigationFailure | void) => {
    if (failure) {
        // sendToAnalytics(to, from, failure)
    }
    to.meta.transition = 'slide-x-transition'
})

export default router;