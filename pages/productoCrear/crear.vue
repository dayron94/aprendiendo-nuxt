<template>
  <div>
    <h1>Desde producto - crear</h1>
    <h2>{{user.displayName}}</h2>
    <b-form @submit.prevent="guardarProducto">
      <b-form-group id="input-group-1" label="Imagen:" label-for="imagen">
        <b-form-file v-model="imageProduct" placeholder="Elige una imagen" accept="image/"></b-form-file>
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

      <b-form-group id="input-group-5" label="Descripcion:" label-for="text">
        <b-form-textarea
        id="textarea"
        v-model="form.descripcion"
        placeholder="Escribe su descripcion..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>
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
      <b-form-group label="categoria" label-for="categoria">
        <b-form-select v-model="form.categoria" :options="categoria"></b-form-select>
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
import { db, storage } from "../../services/firebase";
import { auth } from "../../services/firebase";

export default {
  asyncData() {
    return db
      .collection("categoria")
      .get()
      .then(categoriaSnap => {
        let categoria = [];
        categoriaSnap.forEach(value => {
          categoria.push(value.data().nombre);
        });

        return {
          categoria
        };
      });
  },
  data() {
    return {
      user: false,
      form: {
        nombre: "",
        cantidad: "",
        descripcion: "",
        precio: "",
        usuario: ""
      },
      cargando: false,
      bloquear: false,
      imageProduct: ""
    };
  },
  created() {
    auth.onAuthStateChanged(user => {
      this.user = user;
      user.refreshToken;
    });
  },
  methods: {
    guardarProducto() {
      this.cargando = true;
      this.bloquear = true;
      let imageRef = storage.child(this.imageProduct.name);
      imageRef.put(this.imageProduct).then(async imageRes => {
        this.form.imagen = await imageRes.ref.getDownloadURL();
        this.form.usuario = this.user.displayName;

        db.collection("productos")
          .add(this.form)
          .then(res => {
            this.$router.push({
              path: "/"
            });
          });
      });
    }
  }
};
</script>


