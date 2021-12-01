import Vue from 'vue'
import VueRouter from 'vue-router'
import NewAd from '../components/NewAdd'
import MyAds from '../components/MyAdd'
import MyAdsId from '../components/MyAdsId'
import DoneAdd from '../components/DoneAdd'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: NewAd,
    component: NewAd
  },
  {
    path: '/MyAds',
    name: MyAds,
    component: MyAds
  },
  {
    path: '/MyAds/:id',
    props: true,
    name: MyAdsId,
    component: MyAdsId
  },
  {
    path: '/DoneAdd',
    props: true,
    name: DoneAdd,
    component: DoneAdd
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
