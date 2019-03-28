<template>
  <div>
    
    <h1>hola {{ msg}}</h1>
    <input type="text" v-model="msg">
    <button @click="guardar" class="btn btn-primary">Guardar</button>
     <b-button  variant="primary">Guardar</b-button>
    <table>
      <tr>
        <th>Nombre</th>
      </tr>
      <tr v-for="(item, index) in municipio"  :key="index">
        <td> {{ item }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import navbar  from '../components/navbar'

export default {
  components: { navbar},
  data() {
    return {
      msg: "dayron carvajal",
      municipio: ["Mocoa", "Villa", "Pto Asis"]
    };
  },
  methods: {

     guardar(){
      this.municipio.push(this.msg)
       this.msg=''
     }
  }
};
</script>

<style>
</style>

