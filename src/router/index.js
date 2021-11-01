import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path:'/',
    redirect: '/home'
  },
  {
    path:'/Home',
    name:'/home',
    component: () => import('../components/home.vue')
  },
  {
    path:'/Order',
    name:'/Order',
    component: () => import('../components/Order')
  },
  {
    path:'/Sigin',
    name:'/Sigin',
    component: () => import('../components/Sigin')
  },
  {
    path:'/LoginBefore',
    name:'/LoginBefore',
    component: () => import('../components/loginBefore')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login')
  },
  {
    path:'/Home',
    name:'Home',
    component: () => import('../components/Home')
  },
  {
    path:'/Welcome',
    component: () => import('../components/Welcome'),
    redirect:'/goods',
    children:[
      // 后台商品详细相关路由
      {
        path:'/welcome/goods',
        component:() => import('../components/goodsList'),
      },
      {
        path:'/welcome/goods/addGoods',
        component:() => import('../components/addGoods')
      },
      {
        path:'/welcome/update',
        component:() => import('../components/Update')
      },
      //  后台商品分类相关路由
      {
        path:'/welcome/category',
        component:() => import('../components/goodsCategory'),
      },
      {
        path:'/welcome/category/addCategory',
        component:() => import('../components/addCategory')
      }
    ]
  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
