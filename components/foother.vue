<template>
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
</template>
<script>
export default {
    data() {
    return {
      mail: "dayron1794@gmail.com",
      phone: "3227838557",
      mention: "2019 | terminos légales"
    };
  },
}
</script>

