import Vue from "vue"
import VueRouter from "vue-router"

import Home from '@/views/Home'
import User from '@/views/User'
import Mall from '@/views/Mall'
import PageOne from '@/views/PageOne'
import PageTwo from '@/views/PageTwo'
import Main from '@/views/Main'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Main,
    redirect: '/home', //重定向
    children: [
        //首页
        {
            path: 'home',
            component: Home
        },
        //用户管理
        {
            path: 'user',
            component: User
        },
        //商品管理
        {
            path: 'mall',
            component: Mall
        },
        //其他-->页面1
        {
            path: 'page1',
            component: PageOne
        },
        //其他-->页面2
        {
            path: 'page2',
            component: PageTwo
        }
    ]
}, ]

const router = new VueRouter({
    routes
})

export default router