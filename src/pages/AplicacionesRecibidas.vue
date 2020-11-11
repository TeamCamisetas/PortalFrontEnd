<template>
  <div>
    <nav-link to="/calendar" class="nav-link btn btn-neutral">
      <i class="now-ui-icons users_circle-08"></i> Calendar
    </nav-link>
  </div>
</template>


<script>
import {  NavLink } from '@/components';

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    NavLink
  },
  data (){
    return {
      authorized: null,
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login(){
      if (this.model.username == "" || this.model.password == ""){
        this.authorized = false;
        this.unauthorizedmsj = "The credentials can not be empty :)";
      }
    }
  }
};
</script>

<style></style>