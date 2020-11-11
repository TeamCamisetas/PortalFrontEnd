<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        <img src="img/navbar/dipleo-white.png" width="70px">
      </router-link>
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body">
          Dipleo App
        </div>
      </el-popover>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <a
          class="nav-link"
          href="http://localhost:8080/DashboardEmpresas"
          target="_blank"
        >
          <i class="fas fa-concierge-bell fa-lg pr-2"></i>
          <p>Servicios</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          href="http://localhost:8080/DashboardEmpresas"
          target="_blank"
        >
          <i class="now-ui-icons arrows-1_cloud-download-93"></i>
          <p>Oportunidades</p>
        </a>
      </li>
      <li class="nav-item">
        <nav-link to="/DashboardEmpresas">
          <i class="fas fa-address-book fa-lg pr-2"></i>
          <p>Contacto</p>
        </nav-link>

      </li>
      <drop-down
              tag="li"
              title="Regístrate"
              icon="fas fa-sign-in-alt fa-lg pr-2"
              class="nav-item"
      >
        <nav-link to="/landing">
          <i class="now-ui-icons education_paper"></i> Busco Oportunidades
        </nav-link>
        <nav-link to="/profile">
          <i class="now-ui-icons users_single-02"></i> Busco Candidatos
        </nav-link>
      </drop-down>
      <li class="nav-item">
        <nav-link to="/login" class="nav-link btn btn-neutral">
          <i class="now-ui-icons users_circle-08"></i> Inicia Sesión
        </nav-link>
        
      </li>

      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Twitter"
          data-placement="bottom"
          href="https://twitter.com/CreativeTim"
          target="_blank"
        >
          <i class="fab fa-twitter"></i>
          <p class="d-lg-none d-xl-none">Twitter</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Like us on Facebook"
          data-placement="bottom"
          href="https://www.facebook.com/CreativeTim"
          target="_blank"
        >
          <i class="fab fa-facebook-square"></i>
          <p class="d-lg-none d-xl-none">Facebook</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Instagram"
          data-placement="bottom"
          href="https://www.instagram.com/CreativeTimOfficial"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
          <p class="d-lg-none d-xl-none">Instagram</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
