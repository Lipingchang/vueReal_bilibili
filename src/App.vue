<template lang="html">
  <div id="app">
    <router-view/>
    <div class="buttonbox">
      <button @click="clickRoute('HelloWorld')">route1</button>
      <button @click="clickRoute('MainScaffold')">route2</button>
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
