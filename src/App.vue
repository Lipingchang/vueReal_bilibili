<template lang="html">
  <div id="app">
    <router-view/>
    <div class="buttonbox">
      <button @click="clickRoute('Home')">Home</button>
      <button @click="clickRoute('Channel')">Channel</button>
      <button @click="clickRoute('News')">News</button>
      <button @click="clickRoute('Shopping')">Shopping</button>
    </div>
    <div class="maxbox"></div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data: function(){
    return {

    }
  },
  methods: {
    clickRoute: function(dst){
      this.$router.push(dst)
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.buttonbox {
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
}
.maxbox {
  width: 100%;
  background: red;
}
</style>
