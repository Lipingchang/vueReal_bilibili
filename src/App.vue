<template lang="html">
  <div id="app">
   
    <router-view/>

  </div>
</template>

<script>
export default {
  components: {
  },
  name: 'App',
  data: function(){
    return {
    }
  },
  methods: {
  },
}
</script>

<style scoped lang="less">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  text-align: center;
  color: #2c3e50;
  position: relative;
  height: 100%;
  background-color: #f5f5f5;
}

</style>
