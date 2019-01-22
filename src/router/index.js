import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/Home.vue'
    import Hnews from '@/components/home/Hnews.vue'
    import HnewsInfo from '@/components/home/HnewsInfo.vue'
    import Hconnect from '@/components/home/Hconnect.vue'
    import Hwords from '@/components/home/Hwords.vue'
    import Hvideo from '@/components/home/Hvideo.vue'
import PhotoShare from '@/components/photolist/PhotoShare.vue'
import PhotoInfo from '@/components/photolist/PhotoInfo.vue'
    import Outdoor from '@/components/photolist/photolists/Outdoor.vue'
    import View from '@/components/photolist/photolists/View.vue'
    import Car from '@/components/photolist/photolists/Car.vue'
    import Animal from '@/components/photolist/photolists/Animal.vue'
    import Food from '@/components/photolist/photolists/Food.vue'
    import Fruit from '@/components/photolist/photolists/Fruit.vue'
import GoodsList from '@/components/goods/GoodsList.vue'
import GoodsInfo from '@/components/goods/GoodsInfo.vue'
import GoodsDesc from '@/components/goods/GoodsDesc.vue'
import GoodsComment from '@/components/goods/GoodsComment.vue'
     /* import Recommend from '@/components/photolist/photolists/Recommend.vue'
     import Outdoor from '@/components/photolist/photolists/Outdoor.vue' */
import Set from '@/components/tabbar/Set.vue'
    import UserReg from '@/components/set/UserReg.vue'
    import ResetPassword from '@/components/set/ResetPassword.vue'
import Search from '@/components/tabbar/Search.vue'
import AddList from '@/components/tabbar/AddList'


Vue.use(Router)

export default new Router({
  linkActiveClass:'actives',
  mode: 'history',
  routes: [
    { path: '/', 
      redirect: '/home'
    },
    {
      path: '/home',  
      component: Home
    },
          {
            path: '/home/hnews',          
            component: Hnews
          },
          {
            path: '/home/hnews/hnewsinfo/:title',        
            component: HnewsInfo
          },
          { 
            path: '/home/hconnect', 
            component: Hconnect 
          },    
          { 
            path: '/home/hwords', 
            component: Hwords 
          },    
          { 
            path: '/home/hvideo', 
            component: Hvideo 
          },    
    {
      path: '/home/photolist', 
      component: PhotoShare,
    },
    {
      path: '/home/photolist/photoinfo',
      component: PhotoInfo
    }, 
          {
            path: '/home/outdoor',
            component: Outdoor
          },
          {
            path: '/home/view',
            component: View
          },
          {
            path: '/home/car',
            component: Car
          },
          {
            path: '/home/animal',
            component: Animal
          },
          {
            path: '/home/food',
            component: Food
          },
          {
            path: '/home/fruit',
            component: Fruit
          },
    {
      path: '/home/goodslist',
      component: GoodsList
    },     
      {
        path: '/home/goodslist/goodsinfo',
        name:'goodsinfo',
        component: GoodsInfo
      },   
      {
        path: '/home/goodslist/goodsdesc',
        name:'goodsdesc',
        component: GoodsDesc
      }, 
      {
        path: '/home/goodslist/goodscomment',
        name:'goodscomment',
        component: GoodsComment
      },     
    {
      path: '/search',
      component: Search
    },
    {
      path: '/addlist',
      component: AddList
    },
    {
      path: '/set',
      component: Set
    },
      {
        path: '/set/userreg',
        component: UserReg
      },
      {
        path: '/set/resetpassword',
        component: ResetPassword
      }
  ]
})
