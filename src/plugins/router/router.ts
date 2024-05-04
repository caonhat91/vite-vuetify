import { createMemoryHistory, createRouter } from 'vue-router'

import routes from './routes';

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

router.beforeEach((to, from) => {
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

router.afterEach((to, from, failure) => {
    if (failure) {
        // sendToAnalytics(to, from, failure)
    }
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'

    to.meta.transition = 'fade'
})

export default router;