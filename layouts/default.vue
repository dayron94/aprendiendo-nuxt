<template>
  <div>
    <navbar/>
    <div class="container-fluid">
      <nuxt/>
    </div>
      
  
  </div>
</template>

<script>
import navbar from "../components/navbar";
import foother from "../components/foother";
export default {
  components: { navbar, foother },
    
};
</script>

