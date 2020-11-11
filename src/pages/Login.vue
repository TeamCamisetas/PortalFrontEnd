<template>
  <div>
    <div class="section section-contact-us text-center">
      <div class="container">
        <div class="row mt-5">
          <div class="col-lg-6">
            <img src="img/login/1.png">
          </div>
          <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
            <h2 class="title text-primary">¡Bienvenido!</h2>
            <form-group-input
              class="input-lg"
              placeholder="Usuario..."
              v-model="user.username"
              addon-left-icon="now-ui-icons users_circle-08"
              label="Usuario"
            >
            </form-group-input>
            <form-group-input
              class="input-lg"
              placeholder="Contraseña..."
              v-model="user.password"
              addon-left-icon="now-ui-icons ui-1_email-85"
              label="Contraseña"
            >
            </form-group-input>
            <p class="text-left">
              <ins>
                <nav-link to="/forgot_password">Olvidé mi contraseña</nav-link>
              </ins>
            </p>
            
            <div class="textarea-container">
            </div>
            <div class="send-button text-right">
              <n-button type="primary" round simple size="lg" @click="login">
                Ingresar <i class="fas fa-long-arrow-alt-right pl-2"></i>
              </n-button>
            </div>
          </div>
          <alert v-if="authorized==false" :key="forceRender" type="danger" dismissible>
              <span class="alert-inner--icon"><i class="fas fa-exclamation-circle"></i></span>
              <span class="alert-inner--text"><strong> Error!</strong> {{unauthorizedmsj}}</span>
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </alert>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { FormGroupInput, Button, Alert, NavLink } from '@/components';

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    FormGroupInput,
    [Button.name]: Button,
    Alert,
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