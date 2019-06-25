 <template>
  <div class="container-fluid mt-5">
    <div class="col-sm-12">
      <div class="col-sm-17 row" v-for=" list in productos " :key="list.id">
        <div class="col-sm-8">
          <b-img :src="list.imagen" width="350" height="350"></b-img>
          <h3>Descripción</h3>
          <div>{{list.descripcion}}</div>
          <b-form-input v-model="text" placeholder="Agrega un comentario"></b-form-input>
          <b-button
            class="mt-2"
            variant="primary"
            @click="guardarComentario( list.id, text, user.displayName)"
          >Comentar</b-button>
          <b-button
            class="mt-2"
            variant="primary"
            @click="traercomentarios(list.id)"
          >Ver comentarios...</b-button>
          <div :v-if="cargando" class="row mt-1" v-for=" list1 in comentar " :key="list1.id">
            <div  id="textos" :v-model="textos"><b>{{list1.usuario}}:</b> {{list1.comentario}}</div>
            
          </div>
        </div>

        <div class="col-sm-4">
          <h2>
            {{ slug }}
            <br>
            <span>{{ "$"+list.precio }}</span>
          </h2>

          <span>{{ "("+list.cantidad+" disponibles )" }}</span>
          <div class="row-sm-1">
            <b-form-input
              id="cantidad"
              v-model="cantidad"
              type="number"
              placeholder="Ingresa la cantidad"
            ></b-form-input>

            <b-button
              class="mt-2"
              variant="primary"
              @click="agregarCarrito(cantidad,list.cantidad,list.nombre,list.precio)"
            >Agregar al carrito</b-button>
            <b-alert :show="mostrar" variant="danger">Sin stock</b-alert>
            <b-alert :show="mostrar1" variant="danger">La cantidad dede ser mayor a 0</b-alert>
            <b-alert :show="mostrar2" variant="success">Agregado a tu carrito de compras</b-alert>
          </div>
        </div>
        
      </div>

       

      
    </div>

    
  </div>
</template>

<script>
import navbar from "../components/navbar";
import { db } from "../services/firebase";
import { auth } from "../services/firebase";

export default {
  asyncData({ params }) {
    var citiesRef = db.collection("productos");
    var query = citiesRef.where("slug", "==", params.slug);
    return query.get().then(productosSnap => {
      let productos = [];

      productosSnap.forEach(value => {
        productos.push({
          id: value.id,
          ...value.data()
          //productos1: productos.orderBy("nombre", "asc").equalTo(params.slug)
        });
      });

      //console.log(productos)
      return {
        productos,
        mostrar: false,
        mostrar1: false,
        mostrar2: false,
        // query,
        currentPage: 1,
        perPage: 10,
        //producto: res.data(),
        slug: params.slug,
        id: params.slug
      };
    });
  },

  data() {
    return {
      user: false,
      comentar: [],
      text: "",
      cargando: false,
      mail: "futbolstore@gmail.com",
      phone: "3227838557",
      mention: "2019 | terminos légales"
    };
  },
  created() {
    auth.onAuthStateChanged(user => {
      this.user = user;
      user.refreshToken;
    });
  },
  methods: {
    guardarComentario(id, text, user) {
      db.collection("productos")
        .doc(id)
        .collection("comentario")
        .add({
          id: id,
          comentario: text,
          usuario: user,
          slug: this.slug
        })
        .then(res => {
          this.traercomentarios(id);
        });
    },

    traercomentarios(id) {
      this.comentar.splice(0);
      return db
        .collection("productos")
        .doc(id)
        .collection("comentario")
        .get()
        .then(productosSnap => {
          let categorias = [];

          productosSnap.forEach(value => {
            categorias.push({
              id: value.id,
              ...value.data()
            });

            this.comentar.push({
              id: value.id,
              ...value.data()
            });
          });
          
          return {
            categorias
          };
        });

           },

    agregarCarrito(cantidad, stock, nombre, precio) {
      
      db.collection("compras")
          .add({
            usuario: this.user.displayName,
            producto: nombre,
            cantidad: cantidad,
             unitario:  precio,
             total: cantidad*precio
            
          })
          .then(res => {
            this.mostrar2= true
          });
      
    }
  }
};
</script>

<style scoped>
#padre {
}
#container1 {
  padding-top: 20px;
  margin-top: 20px;
}
#container2 {
  padding-top: 20px;
  margin-top: 1px;
 
}
body {
  display: flex;
  background-color: #f0f8ff;
  height: 95vh;
  justify-content: center;
  align-items: flex-end;
  font-family: Open Sans;
}

#container {
  padding-top: 20px;
  margin-top: 20px;
  width: 100vw;
  color: white;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#contacts {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
#contacts--contact {
  text-align: right;
}


#mentions p {
  font-size: 0.5em;
}
</style>