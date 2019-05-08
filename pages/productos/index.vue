<template>
  <div>
    <div class="row mt-5">
      <div class="col-sm-11">
        <h2>Listado de productos</h2>
      </div>
      <div class="col-sm-1">
        <b-button variant="primary" v-b-modal.nuevo href="/productos/crear">Nuevo</b-button>
      </div>
    </div>
    <div class="row mt-2">
      <b-table
        striped
        hover
        id="my-table"
        :fields="fields"
        :items="productos"
        :per-page="perPage"
        :current-page="currentPage"
        :busy="isBusy"
      >
        <div slot="table-busy" class="text-center my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Cargando...</strong>
        </div>
        <template slot="acciones" slot-scope="data">
          <b-button
            class="open-AddBookDialog"
            type="button"
            @click="editarProducto(data.item.id,data.index)"
            v-b-modal.editar
            variant="success"
          >Editar</b-button>
          <b-button
            variant="danger"
            type="button"
            @click="eliminarProductos(data.item.id, data.index)"
          >eliminar</b-button>
        </template>
      </b-table>
    </div>

    <b-modal
      header-bg-variant="dark"
      header-text-variant="light"
      v-model="show"
      id="editar"
      ref="modal"
      :title="tituloModal"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          :state="nameState"
          label="Nombre"
          label-for="nombre"
          invalid-feedback="Ingresa un nombre"
        >
          <b-form-input
            id="nombre"
            v-model="form.nombre"
            :state="nameState"
            required
          >{{form.nombre}}</b-form-input>
        </b-form-group>
        <b-form-group
          :state="nameState"
          label="Precio"
          label-for="precio"
          invalid-feedback="Ingresa un precio"
        >
          <b-form-input type="number" id="precio" v-model="form.precio" :state="nameState" required></b-form-input>
        </b-form-group>
        <b-form-group
          :state="nameState"
          label="Cantidad"
          label-for="cantidad"
          invalid-feedback="Ingresa una cantidad"
        >
          <b-form-input
            type="number"
            id="cantidad"
            v-model="form.cantidad"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>

      <div slot="modal-footer">
        <b-button variant="primary" @click="handleOk">Guardar</b-button>
        <b-button variant="danger" @click="show=false">Cancelar</b-button>
      </div>
    </b-modal>

    <div class="mt-3">
      <b-pagination
        align="center"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
    </div>
  </div>
</template>
 
<script>
import { db } from "../../services/firebase";
import { database } from "firebase";
export default {
  asyncData() {
    return db
      .collection("productos")
      .orderBy("nombre")
      .get()
      .then(productosSnap => {
        let productos = [];
        productosSnap.forEach(value => {
          productos.push({
            id: value.id,
            ...value.data()
          });
        });
        return {
          productos,
          currentPage: 1,
          perPage: 10
        };
      });
  },
  data() {
    return {
      show: false,
      isBusy: false,
      boxTwo: "",
      define: "",
      idEditar: "",
      tituloModal: "Editar producto",
      form: {
        nombre: "",
        cantidad: "",
        precio: ""
      },
      variable: false,
      nameState: null,
      fields: [
        { key: "Imagen" },
        {
          key: "nombre"
        },
        { key: "precio" },
        { key: "cantidad" },
        { key: "acciones" }
      ]
    };
  },
  computed: {
    rows() {
      return this.productos.length;
    }
  },
  methods: {
    eliminarProductos(id, index) {
      if (confirm("DESEA REALMENTE ELIMINAR ESTE PRODUCTO?") == true) {
        db.collection("productos")
          .doc(id)
          .delete()
          .then(() => {
            let index1;
            this.productos.map((value, key) => {
              if (value.id == id) index1 = key;
            });
            this.productos.splice(index, 1);
          });
      }
    },
    editarProducto(id, index) {
      this.variable = false;
      this.tituloModal = "Editar producto";
      this.define = "editar";
      this.idEditar = id;
      this.productos.map((value, key) => {
        if (value.id == id) {
          this.form = {
            nombre: value.nombre,
            cantidad: value.cantidad,
            precio: value.precio
          };
        }
      });
    },

    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid ? "valid" : "invalid";
      return valid;
    },
    resetModal() {
      this.nameState = null;
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.handleSubmit();
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return;
      }
      this.isBusy = true;
      if (this.define == "editar") {
        db.collection("productos")
          .doc(this.idEditar)
          .set(this.form)
          .then(res => {
            db.collection("productos")
              .orderBy("nombre")
              .get()
              .then(productosSnap => {
                this.productos = [];
                productosSnap.forEach(value => {
                  this.productos.push({
                    id: value.id,
                    ...value.data()
                  });
                });
                this.isBusy = false;
              });
          });
      }

      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    }
  }
};
</script>
