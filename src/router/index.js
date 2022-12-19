import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/HomePage.vue')
    },
    {
        path: '/cars/getAllCars',
        name: 'ourcar',
        component: () => import('../views/admin/OurCar.vue')
    },
    {
        path: '/payments/addPayment',
        name: 'addpayment',
        component: () => import('../views/CreateEvidence.vue')
    }
    // {
    //     path: '/orders',
    //     name: 'order',
    //     component: () => import('../views/admin/Orders.vue')
    // },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router