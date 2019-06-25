<template>
  <b-navbar variant="dark" type="dark" toggleable="lg">
    <b-navbar-brand href="/">FUTBOL STORE</b-navbar-brand>
    <b-navbar-toggle target="menu"></b-navbar-toggle>
    <b-collapse is-nav id="menu">
      <b-navbar-nav>
        
        <b-nav-item :href="'/productos/'+ user.displayName" v-if="user">Mis Productos</b-nav-item>
        <b-nav-item href="/categoria" v-if="user">Categorias</b-nav-item>
        <b-nav-item :href="'/miCarrito/'+ user.displayName" v-if="user"> Mi Carrito de compras</b-nav-item>
        <b-nav-item href="/inicio" v-if="!user">Iniciar sesion</b-nav-item>
        <b-nav-item href="/registro" v-if="!user">Registro</b-nav-item>

        <b-dropdown v-if="user" :text="user.displayName">
          <b-dropdown-item @click="cerrarSesion">Cerrar sesion</b-dropdown-item>
        </b-dropdown>
      </b-navbar-nav>
      <b-navbar-nav>
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <b-button>Buscar</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
 <script>
import { auth } from "../services/firebase";
export default {
  data() {
    return {
      user: false
    };
  },
  created() {
    auth.onAuthStateChanged(user => {
      this.user = user;
      user.refreshToken;
    });
  },
  methods: {
    cerrarSesion() {
      auth.signOut();
      this.$router.push({ path: "/" });
    }
  }
};
</script>
 
