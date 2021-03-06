import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Transition from '../components/Transition'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Icon from '../components/Icon'
import Radio from '../components/Radio'
import Checkbox from '../components/Checkbox'
import Input from '../components/Input'
import NotFound from '../components/NotFound'
Vue.use(VueRouter)


let children = [
    //内置动画
    { path: "/transition", component: Transition, name: "Transition" },
    // Basic
    { path: "/layout", component: Layout, name: "Layout" },
    { path: "/container", component: Container, name: "Container" },
    { path: "/icon", component: Icon, name: "Icon" },
    { path: "/radio", component: Radio, name: "Radio" },
    { path: "/checkbox", component: Checkbox, name: "Checkbox" },
    { path: "/input", component: Input, name: "Input" },
]

let list = [{
        l: 1,
        title: "Transition"
    },
    {
        title: "Basic",
        l: 3
    },
    {
        title: "Form",
        l: 3
    },

]

let l1 = 0
list.forEach((item1, index) => {
    list[index].form = []
    let l2 = list[index].l
    l1 += l2
    children.forEach((item, index1) => {
        if (index1 >= (l1 - l2) && index1 < l1) {
            let obj = { title: children[index1].name, link: children[index1].path.toLowerCase() }
            list[index].form.push(obj)
        }
    })
})


//储存给demoList
localStorage.removeItem("list")
localStorage.setItem("list", JSON.stringify(list))


const routes = [{
    path: '/',
    component: Home,
    redirect: "/layout",
    children
},{
    path:'*',
    component:NotFound,
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router