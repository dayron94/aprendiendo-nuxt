<template>
  <div>
     
     <h1>{{categorias[0]}}</h1>
  </div>
   
  

</template>

<script>
 import navbar  from '../components/navbar'
 import { db } from "../services/firebase";
 export default {
   components: { navbar},

   asyncData() {
    return db
      .collection("productos").doc("9VGZjEhxWpLniuYAsDya").collection("comentario")
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
          
          categorias
        };
      });
  },
     
 }
 </script>