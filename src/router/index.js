import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/index/Login.vue';
import 'iview/dist/styles/iview.css';
import IView from 'iview';
import Main from '../components/layout/Main.vue';

Vue.use(Router);
Vue.use(IView);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
