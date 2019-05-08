<template>
  <div id="padre">
    <div id="container2">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide
          caption="MATERIAL ESCOLAR"
          img-src="https://media.cnnchile.com/2018/08/imagen_principal-32245-740x400.jpg"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide
         caption="MATERIAL DE OFICINA"
          img-src="https://s7d5.scene7.com/is/image/FalabellaCO/pc_estudio_oficina_sillas_mobile?$PC_mobile$"
        >
          
        </b-carousel-slide>

      
      </b-carousel>
    </div>
    <div></div>
    <div id="container1">
      <b-row>
        <b-col>
          <b-card
            title="Tijera escolar"
            img-src="https://www.itysp.com/libreriavirtual/wp-content/uploads/2017/10/larojita-faber.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>Tijera escolar a $ 5000 </b-card-text>

            <b-button href="#" variant="primary">Leer mas...</b-button>
          </b-card>
        </b-col>

        <b-col>
          <b-card
            title="Cuaderno de 100 hojas cuadriculado"
            img-src="http://loanpapeleria.com/wp-content/uploads/2017/06/cuadernos-escolares-1.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>Cuaderno de 100 hojas cuadriculado a $ 2400</b-card-text>

            <b-button href="#" variant="primary">Leer mas...</b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Caja de colores norma"
            img-src="https://panamericana.vteximg.com.br/arquivos/ids/283871-650-650/colores-norma-en-caja-acrilica-x-15-unidades-7702111522985.png?v=636524190243270000"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>Caja de colores norma a $ 2600</b-card-text>

            <b-button href="#" variant="primary">Leer mas...</b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Pegamento escolar"
            img-src="https://officemax.vteximg.com.br/arquivos/ids/170272-750-750/92616_1.jpg?v=636246906670000000"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>Pegamento a $ 1500</b-card-text>

            <b-button href="#" variant="primary">Leer mas...</b-button>
          </b-card>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-card
            title="Resma de papel bond"
            img-src="http://www.papeleriamodelo.com/wp-content/uploads/2015/06/resma-de-papel-carta-reprograf-506101-MCO20275347812_042015-O.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>Resma de papel a $ 10000.</b-card-text>

            <b-button href="#" variant="primary">Leer mas...</b-button>
          </b-card>
        </b-col>

        <b-col>
          <b-card
            title="Engrapadora metalica"
            img-src="https://officemax.vteximg.com.br/arquivos/ids/163653-1000-1000/65894_1.jpg?v=636211537306500000"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>Engrapadora metalica a $ 15000.</b-card-text>

            <b-button href="#" variant="primary">Leer mas...</b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Folder A-Z norma"
            img-src="https://http2.mlstatic.com/folder-a-z-economico-tamano-oficio-regreso-a-clases-D_NQ_NP_725499-MCO27139498980_042018-F.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>Folder A-Z a $ 20000</b-card-text>

            <b-button href="#" variant="primary">Leer mas...</b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Sacagrapas"
            img-src="https://www.juansola.com/2606-large_default/sacagrapas-novus-b80.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>Sacagrapas a $ 12000</b-card-text>

            <b-button href="#" variant="primary">Leer mas...</b-button>
          </b-card>
        </b-col>
      </b-row>

      

     
      <div class="mt-3">
        
        <b-pagination v-model="currentPage" :total-rows="rows" align="center"></b-pagination>
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
//papeleria http://www.papeleriacomercial.com.mx/
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      rows: 25,
      currentPage: 3,
      mail: "dayron1794@gmail.com",
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




