<template>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">

        <div class="navbar-header">
            <router-link to="/" class="navbar-brand">Feeder Mock</router-link>
        </div>

        <div class="collapse navbar-collapse" >
          <ul class="nav navbar-nav">
              <router-link tag="li" to="/graphviewer" activeClass="active"><a>Visualizador Grafo</a></router-link>
              <router-link tag="li" to="/explorer" activeClass="active"><a>Explorador de Jobs</a></router-link>
              <router-link tag="li" to="/timeline" activeClass="active"><a>Linha do Tempo</a></router-link>
          </ul>
          <!--
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Teste</a></li>
          </ul>
          -->
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
</template>


<script>

</script>


<style>

</style>
