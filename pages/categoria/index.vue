<template>
  <div class="row mt-3">
    <div class="col-sm-12">
      <div class="row">
        <div class="col-sm-11">
          <h2>Listado de Categorias</h2>
        </div>
        <div class="col-sm-1">
          <b-button variant="primary" href="/categoria/crearCategoria">Nueva</b-button>
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
          >Editar</b-button>
          <b-button
            variant="danger"
            @click="eliminarCategorias(data.item.id, data.index)"
            :disabled="bloquear"
          >Eliminar</b-button>
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
import { db } from "../../services/firebase";
import { functions } from "firebase";
export default {
  asyncData() {
    return db
      .collection("categoria")
      .orderBy("nombre")
      .get()
      .then(productosSnap => {
        let categorias = [];

        productosSnap.forEach(value => {
          categorias.push({
            id: value.id,
            ...value.data()
          });
        });

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
      show: false,
      isBusy: false,
      boxTwo: "",
      define: "",
      idEditar: "",
      tituloModal: "Editar categoria",
      form: {
        nombre: ""
      },
      variable: false,
      nameState: null,
      fields: [
        {
          key: "nombre"
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

  methods: {
    eliminarCategorias(id, index) {
      if (confirm("DESEA REALMENTE ELIMINAR ESTA CATEGORIA?") == true) {
        db.collection("categoria")
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
            nombre: value.nombre
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
        db.collection("categoria")
          .doc(this.idEditar)
          .set(this.form)
          .then(res => {
            db.collection("categoria")
              .orderBy("nombre")
              .get()
              .then(categoriasSnap => {
                this.categorias = [];
                categoriasSnap.forEach(value => {
                  this.categorias.push({
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


