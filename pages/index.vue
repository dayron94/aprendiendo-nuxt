<template>
  <div>
    <h1>hola {{ msg}}</h1>
    <input type="text" v-model="msg">
    <button @click="guardar">Guardar</button>
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
export default {
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

