<template>
  <div id="app col-lg-12">
    <header class="header-app col-md-12 col-lg-12">
      <div class="div-header-row">
        <router-link to="/home"><img src="src/assets/images/logo.png" alt="" class="img-logo img-responsive"></router-link>
      </div>
      <div class="div-header-row1">
        <div class="menu-options">
          <p class="a-item-menu">
            <router-link to="/home" class="a-item-menu">
              <p>{{start}}</p>
            </router-link>
          </p>
          <p class="a-item-menu">
            <router-link to="/aboutus" class="a-item-menu">
              <p>{{aboutus}}</p>
            </router-link>
          </p>
          <p class="a-item-menu">
            <router-link to="/services" class="a-item-menu">
              <p>{{services}}</p>
            </router-link>
          </p>
          <p class="a-item-menu">
            <router-link to="/projects" class="a-item-menu">
              <p>{{projects}}</p>
            </router-link>
          </p>
          <p class="a-item-menu">
            <router-link to="/customers" class="a-item-menu">
              <p>{{customers}}</p>
            </router-link>
          </p>
          <p class="a-item-menu">
            <router-link to="/contact" class="a-item-menu">
              <p>{{contacts}}</p>
            </router-link>
          </p>
          <p class="a-item-menu">
            <router-link to="/blog" class="a-item-menu">
              <p>{{blog}}</p>
            </router-link>
          </p>
        </div>
      </div>
    </header>
    <!-- menuresponsive -->
    <div class="div-menufixed-mobile col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <router-link to="/home"><i class="fa fa-home fa-2x" aria-hidden="true"></i></router-link>
      <router-link to="/aboutus"><i class="fa fa-users fa-2x" aria-hidden="true"></i></router-link>
      <router-link to="/services"><i class="fa fa-caret-down fa-2x"></i></router-link>
      <router-link to="/projects"><i class="fa fa-caret-down fa-2x"></i></router-link>
      <router-link to="/customers"><i class="fa fa-handshake-o fa-2x" aria-hidden="true"></i></router-link>
    </div>
    <!--  -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        start: 'Inicio',
        aboutus: 'Nosotros',
        services: 'Servicios',
        projects: 'Proyectos',
        customers: 'Clientes',
        contacts: 'Contactos',
        blog: 'Blog'
        // msg: 'LandingPage'
      }
    }
  }
</script>

