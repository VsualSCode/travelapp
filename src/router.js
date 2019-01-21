import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import index from './components/index.vue';
import theme from './components/theme.vue';
import raider from './components/raider.vue';
import comm from './components/comm.vue';
import orders from './components/orders.vue';
import chatlist from './components/chatlist.vue';
import homepage from './components/homepage.vue';
import artical from './components/artical.vue';
import guide from './components/guide.vue';
import set from './components/set.vue';
import logon from './components/logon.vue';
import register from './components/register.vue';
import error from './components/error.vue';

const routes=[
  {path:'/index',component:index},
  {path:'/theme',component:theme},
  {path:'/raider',component:raider},
  {path:'/comm',component:comm},
  {path:'/orders',component:orders},
  {path:'/chatlist',component:chatlist},
  {path:'/homepage',component:homepage},
  {path:'/artical',component:artical},
  {path:'/guide',component:guide},
  {path:'/set',component:set},
  {path:'/logon',component:logon},
  {path:'/register',component:register},
  {path:'/',redirect:'/index'},
  {path:'*',component:error},
  
]
export default new Router({
  routes

})
