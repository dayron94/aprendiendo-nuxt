<template>
  <b-navbar variant="dark" type="dark" toggleable="lg">
    <b-navbar-brand href="/">PAPELERIA ITP</b-navbar-brand>
    <b-navbar-toggle target="menu"></b-navbar-toggle>
    <b-collapse is-nav id="menu">
      <b-navbar-nav>
        <b-nav-item href="/contacto">Contacto</b-nav-item>
        <b-nav-item href="/productos">Productos</b-nav-item>
        <b-nav-item href="/categoria">Categorias</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav>
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <b-button>Buscar</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
 <script>
export default {};
</script>
 
