<template>
  <div class="container" id="app">
      <app-header></app-header> 
      <div class="row">
          <div class="col-xs-12">
              <router-view></router-view>
          </div>
      </div>
  </div>
</template>

<script>

import Header from './components/Header.vue';

export default {
    components: {
        appHeader : Header
    },
    created(){ 
        this.$store.dispatch('initArestas');
        this.$store.dispatch('initJobs');
        this.$store.dispatch('initEventos');
    }

}
</script>

<style>
    body {
        padding : 30px
    }

    .material-icons.md-36 { font-size: 36px; }
    .material-icons.md-48 { font-size: 48px; }
    .material-icons.md-18 { font-size: 18px; }


    /*Essa classe é uma sombra*/
    .z-depth-1 {
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);
    }


</style>
