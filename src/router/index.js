import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/index/Login.vue';
import 'iview/dist/styles/iview.css';
import IView from 'iview';

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
    }
  ]
})
