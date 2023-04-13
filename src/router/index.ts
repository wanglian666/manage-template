import { createRouter, createWebHashHistory } from "vue-router"

import NotFound from "@/pages/common/NotFound.vue"
const HomeView = () => import("@/pages/common/home.vue");
const StartView = () => import("@/pages/start/index.vue");
const routes = [
    {
        path: '/',
        component: HomeView,
        children: [
            {
                path: 'start/scene',
                component: StartView,
            },
            {
                path: 'start/UI',
                component: StartView,
            },
            {
                path: 'start/GUI',
                component: StartView,
            },
            {
                path: 'start/parametric',
                component: StartView,
            },
            {
                path: 'start/control',
                component: StartView,
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
// 全局路由守卫
router.beforeEach((to, from, next) => {
    next();
})
export default router
