<template>
  <div>
    <div class="mt-4">
      <b-jumbotron
        text-variant="white"
        style="background-image: url(https://i.pinimg.com/originals/17/0b/2b/170b2bba7048acbb7ef07424405abe1a.jpg); background-size: 100%;"
        header="FUTBOL STORE"
        lead="Chequea nuestros productos"
      ></b-jumbotron>
    </div>

    <div class="row mt-4">
      <div class="col-sm-3" v-for="producto in productos" :key="producto.id">
        <cardProducto
          :precio="producto.precio"
          :nombre="producto.nombre"
          :imagen="producto.imagen"
          :slug="producto.slug"
        />
      </div>

      
    </div>


     <div id="container">
      <div id="contacts">
        <div id="contacts--contact">
          <p>{{ mail }}</p>
          <p>{{ phone }}</p>
        </div>
       
      </div>
      <div id="mentions">
        <p>{{ mention }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "../services/firebase";
import cardProducto from "../components/cardProducto";
export default {
  components: { cardProducto },
  asyncData() {
    return db
      .collection("productos")
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
          productos
        };
      });
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      mail: "futbolstore@gmail.com",
      phone: "3227838557",
      mention: "2019 | terminos légales"
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
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



