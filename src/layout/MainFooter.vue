<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container-fluid">
      <div class="row p-5">
        <div class="col-3 pt-5">
          <div class="row">
            <img src="img/footer/dipleo.png">
          </div>
          <div class="row">
            <div class="col">
              <a role="button" class="btn btn-neutral btn-round btn-icon mx-1">
                <i class="fab fa-facebook-f fa-lg"></i>
              </a>
              <a role="button" class="btn btn-neutral btn-round btn-icon mx-1">
                <i class="fab fa-instagram fa-lg"></i>
              </a>
              <a role="button" class="btn btn-neutral btn-round btn-icon mx-1">
                <i class="fab fa-twitter fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-6 pt-5 px-5">
          <div class="row">
            <div class="col">
              <h4 class="text-white"><a href="#">Servicios</a></h4>
              <h4 class="text-white"><a href="#">Oportunidades</a></h4>
              <h4 class="text-white"><a href="#">Contacto</a></h4>
            </div>
            <div class="col">
              <h4 class="text-white"><a href="#">Términos y Condiciones</a></h4>
              <h4 class="text-white"><a href="#">Legal</a></h4>
              <h4 class="text-white"><a href="#">Política de Privacidad</a></h4>
            </div>
          </div>
        </div>
        <div class="col-3">
          <h3 class="title text-white text-left">Descarga el app:</h3>
          <img src="img/footer/app_store.png" width="50%" class="p-2"><br>
          <img src="img/footer/play_store.png" width="50%" class="p-2">
        </div>
      </div>
    </div>
  </footer>
</template>
<script>

import {Button} from '@/components';

export default {
  props: {
    backgroundColor: String,
    type: String
  },
  components:{
    [Button.name]: Button
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
