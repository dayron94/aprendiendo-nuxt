<template>
  <div>
    <h1>Desde producto - crear</h1>
    <b-form @submit.prevent="guardarProducto">
      <b-form-group id="input-group-1" label="Imagen:" label-for="input-1">
        <b-form-file multiple id="imagen" required placeholder="Elige una imagen"></b-form-file>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
        <b-form-input
          id="nombre"
          type="text"
          v-model="form.nombre"
          required
          placeholder="Escribe el nombre del producto"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Precio:" label-for="input-3">
        <b-form-input
          id="precio"
          v-model="form.precio"
          type="number"
          required
          placeholder="Ingresa el precio del producto"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Cantidad:" label-for="input-4">
        <b-form-input
          id="cantidad"
          v-model="form.cantidad"
          type="number"
          required
          placeholder="Ingresa la cantidad"
        ></b-form-input>
      </b-form-group>

      <div class="row">
        <div class="col-xs-12 offset-sm-5">
          <b-button-toolbar>
            <b-button-group right class="mx-2">
              <b-button id="guardar" type="submit" variant="primary" :disabled="bloquear">
                Guardar
                <b-spinner label="Spinning" v-if="cargando"></b-spinner>
              </b-button>

              <b-button href="/productos" variant="danger">Cancelar</b-button>
            </b-button-group>
          </b-button-toolbar>
        </div>
      </div>
    </b-form>

      
  </div>
</template>

<script>
import { db } from "../../services/firebase";
export default {
  data() {
    return {
      form: {
        nombre: "",
        cantidad: "",
        precio: ""
      },
      cargando: false,
      bloquear: false
    };
  },
  methods: {
    guardarProducto() {
      this.cargando = true;
      this.bloquear = true;

      db.collection("productos")
        .add(this.form)
        .then(res => {
          this.$router.push({
            path: "/productos"
          });
        });
    },
  
  }
};
</script>


