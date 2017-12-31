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
    }

}
</script>

<style>
    body {
        padding : 30px
    }

    .material-icons.md-36 { font-size: 36px; }
    .material-icons.md-18 { font-size: 18px; }

</style>
