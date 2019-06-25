<template>
  <div class="row mt-3">
    <div class="col-sm-12">
      <div class="row">
        <div class="col-sm-11">
          <h2>Mi carrito</h2>
        </div>
        
      </div>

      <b-table
        striped
        hover
        id="my-table"
        :fields="fields"
        :items="categorias"
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
            variant="success"
            :disabled="bloquear"
            @click="editarCategoria(data.item.id,data.index)"
            v-b-modal.editar
          >Editar cantidad</b-button>
          <b-button
            variant="danger"
            @click="eliminarCategorias(data.item.id, data.index)"
            :disabled="bloquear"
          >Eliminar Compra</b-button>
        </template>
      </b-table>

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

      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        align="center"
      ></b-pagination>
    </div>
  </div>
</template>
<script>
import { db } from "../services/firebase";
import { functions } from "firebase";
import { auth } from "../services/firebase";
export default {
  asyncData({ params }) {
    var citiesRef = db.collection("compras");
    var query = citiesRef.where("usuario", "==", params.user);
    return query.get().then(productosSnap => {
      let categorias = [];

      productosSnap.forEach(value => {
        categorias.push({
          id: value.id,
          ...value.data()
          //productos1: productos.orderBy("nombre", "asc").equalTo(params.slug)
        });
      });

      //console.log(productos)
      return {
        bloquear: false,
        perPage: 10,
        currentPage: 1,
        categorias
      };
    });
  },
  data() {
    return {
      bloquear: true,
      user: false,
      show: false,
      isBusy: false,
      boxTwo: "",
      define: "",
      idEditar: "",
      tituloModal: "Editar categoria",
      form: {
        cantidad: "",
        producto: "",
        precio: "",
        total: "",
        usuario: ""
      },
      variable: false,
      nameState: null,
      fields: [
        {
          key: "producto"
        },
        {
          key: "cantidad"
        },
        {
          key: "unitario"
        },
        {
          key: "total"
        },
        {
          key: "acciones"
        }
      ]
    };
  },
  computed: {
    rows() {
      return this.categorias.length;
    }
  },
  created() {
    auth.onAuthStateChanged(user => {
      this.user = user;
      user.refreshToken;
    });
  },

  methods: {
    eliminarCategorias(id, index) {
      if (confirm("DESEA REALMENTE ELIMINAR ESTA COMPRA?") == true) {
        db.collection("compras")
          .doc(id)
          .delete()
          .then(() => {
            let index1;
            this.categorias.map((value, key) => {
              if (value.id == id) index1 = key;
            });
            this.categorias.splice(index, 1);
          });
      }
    },

    editarCategoria(id, index) {
      this.variable = false;
      this.define = "editar";
      this.idEditar = id;
      this.categorias.map((value, key) => {
        if (value.id == id) {
          this.form = {
            cantidad: value.cantidad,
            producto: value.producto,
            unitario: value.unitario,
            total: value.total,
            usuario: value.usuario
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
        this.form.total = this.form.unitario * this.form.cantidad;
        db.collection("compras")
          .doc(this.idEditar)
          .set(this.form)
          .then(res => {
            var citiesRef = db.collection("compras");
            var query = citiesRef.where("usuario", "==", this.user.displayName);

            return query.get().then(productosSnap => {
              this.categorias = [];

              productosSnap.forEach(value => {
                this.categorias.push({
                  id: value.id,
                  ...value.data()
                });
                this.isBusy = false;
              });
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

