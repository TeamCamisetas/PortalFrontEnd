import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Landing from './pages/Landing.vue';
import Login from './pages/Login.vue';
import Profile from './pages/Profile.vue';
import Calendar from './pages/Calendar.vue';
import AplicacionesRecibidas from './pages/AplicacionesRecibidas.vue';
import DashboardEmpresas from './pages/DashboardEmpresas.vue';
import MisOfertas from './pages/MisOfertas.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';


Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  mode: 'history', 
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/landing',
      name: 'landing',
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/login',
      name: 'login',
      components: { default: Login, header: MainNavbar, footer: MainFooter},
      props: {
        header: { colorOnScroll: 0 },
        footer: { backgroundColor: 'primary'}
      }
    },
    {
      path: '/profile',
      name: 'profile',
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/calendar',
      name: 'calendar',
      components: { default: Calendar, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 0 },
        footer: { backgroundColor: 'primary' }
      }
    },
    {
      path: '/AplicacionesRecibidas',
      name: 'AplicacionesRecibidas',
      components: { default: AplicacionesRecibidas, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 0 },
        footer: { backgroundColor: 'primary' }
      }
    },
    {
      path: '/DashboardEmpresas',
      name: 'DashboardEmpresas',
      components: { default: DashboardEmpresas, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 0 },
        footer: { backgroundColor: 'primary' }
      }
    },
    {
      path: '/MisOfertas',
      name: 'MisOfertas',
      components: { default: MisOfertas, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 0 },
        footer: { backgroundColor: 'primary' }
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
