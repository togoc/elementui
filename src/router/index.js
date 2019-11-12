import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Transition from '../components/Transition'
import Layout from '../components/Transition'
import Homelist from '../components/Homelist'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Home,
    children: [
        { path: "", component: Homelist },
        { path: "/transition", component: Transition, name: "Transition" },
        { path: "/layout", component: Layout, name: "Layout" },
    ]
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router