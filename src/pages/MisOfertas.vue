<template>
  <div>
    <nav-link to="/AplicacionesRecibidas" class="nav-link btn btn-neutral">
      <i class="now-ui-icons users_circle-08"></i> Calendar
    </nav-link>
  </div>
</template>


<script>
import {NavLink } from '@/components';

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    NavLink
  },
  data (){
    return {
    }
  },
  methods: {
  }
};
</script>

<style></style>