import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = ()=> import( '../views/Home/Home')
const Category = ()=> import( '../views/Category/Category')
const Cart = ()=> import( '../views/Cart/Cart')
const User = ()=> import( '../views/User/User')

const routes = [
    {path: '/', redirect: '/home'},
    {path: '/home', name: 'home', component: Home,meta: {title: '首页'}},
    {path: '/category', name: 'category', component: Category,meta: {title: '分类'}},
    {path: '/cart', name: 'cart', component: Cart,meta: {title: '购物车'}},
    {path: '/user', name: 'user', component: User,meta: {title: '我的'}},
]

const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'mui-active'
})
router.beforeEach((to,from,next) => {
    if(to.meta.title) {
        document.title = to.meta.title
    }
    next()
})
export default router