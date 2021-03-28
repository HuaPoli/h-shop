import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = ()=> import( '../views/Home/Home')

const routes = [
    {path: '/', redirect: '/home'},
    {path: '/home', name: 'home', component: Home},
]

const router = new VueRouter({
    mode: 'history',
    routes,
})
export default router