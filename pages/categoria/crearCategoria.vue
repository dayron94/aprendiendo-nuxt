<template>
  <div>
    <h1>ADMINISTRACION DE CATEGORIAS</h1>
    <b-form @submit.prevent="guardarCategoria">
      <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
        <b-form-input
          id="nombre"
          type="text"
          v-model="form.nombre"
          required
          placeholder="Escribe el nombre de la categoria"
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

              <b-button href="/categoria" variant="danger">Cancelar</b-button>
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
        nombre: ""
      },
      cargando: false,
      bloquear: false
    };
  },
  methods: {
    guardarCategoria() {
      this.cargando = true;
      this.bloquear = true;

      db.collection("categoria")
        .add(this.form)
        .then(res => {
          this.$router.push({
            path: "/categoria"
          });
        });
    }
  }
};
</script>


