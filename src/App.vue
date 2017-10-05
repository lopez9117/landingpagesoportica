<template>
  <div id="app col-lg-12 container-fluid">
    <!-- menuresponsive -->
    <div class="div-menufixed-mobile">
      <router-link to="/home" ><i class="fa fa-home fa-2x" aria-hidden="true"></i></router-link>
      <router-link to="/aboutus"><i class="fa fa-users fa-2x" aria-hidden="true"></i></router-link>
      <router-link to="/services"><i class="fa fa-caret-down fa-2x"></i></router-link>
      <router-link to="/projects"><i class="fa fa-caret-down fa-2x"></i></router-link>
      <router-link to="/customers" ><i class="fa fa-handshake-o fa-2x" aria-hidden="true"></i></router-link>
    </div>
    <div class="menu-fixed col-lg-12">
      <div class="divs-items">
        <div class="item">
          <router-link to="/home" class="a-item"><h1>Inicio</h1></router-link>
        </div>
        <div class="item">
          <router-link to="/aboutus" class="a-item"><h1>Nosotros</h1></router-link>
        </div>
        <div class="item">
          <router-link to="/services" class="a-item"><h1>Servicios</h1></router-link>
        </div>
        <div class="item">
          <router-link to="/projects" class="a-item"><h1>Proyectos</h1></router-link>
        </div>
        <div class="item">
          <router-link to="/customers" class="a-item"><h1>Clientes</h1></router-link>
        </div>
        <div class="item">
          <router-link to="/contact" class="a-item"><h1>Contactos</h1></router-link>
        </div>
      </div>
      <div class="div-offices animated bounceInDown">
        <a href="http://www.pavas.com.co/Sucursales/" target="_blank" class="a-branch-office">Sucursales</a>
        <a href="http://www.pavas.com.co/Cajeros/" target="_blank" class="a-atm">Cajeros</a>
      </div>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      // msg: 'LandingPage'
    }
  }
}
</script>

<style>


h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
