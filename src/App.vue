<template lang="html">
  <div id="app">
    <router-view/>
    <div class="buttonbox">
      <button @click="clickRoute('Home')">
        <span class="item_icon"><i class="iconfont icon-shouye"></i></span><span>首页</span>
      </button>
      <button @click="clickRoute('Channel')">
        <span class="item_icon"><i class="iconfont icon-shangpinfenlei"></i></span><span>频道</span>
      </button>
      <button @click="clickRoute('News')">
        <span class="item_icon"><i class="iconfont icon-dongtai"></i></span><span>动态</span>
      </button>
      <button @click="clickRoute('Shopping')">
        <span class="item_icon"><i class="iconfont icon-huiyuangouzhongxinx"></i></span><span>会员购</span>
      </button>
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
  /*left: 0;*/
  /*right: 0;*/
  /*bottom: 0;*/
  /*position: fixed;*/
  border-top:1px;
  position:fixed;
  z-index :100;
  left :0;
  right :0;
  bottom:1px;
  background-color: white;
  width:100%;
  height:50px;
  display:flex;
}
button{
  display:flex;
  flex:1;
  text-align :center;
  flex-direction:column;
  align-items :center;
  margin:5px;
  color:#999999;
}
.icon-shouye:before {
  font-size: 26px;
}
.icon-shangpinfenlei:before {
  font-size: 26px;
}
.icon-dongtai:before {
  font-size: 24px;
}
.icon-huiyuangouzhongxinx:before {
  font-size: 25px;
}
.iconfont:active{
  color: #e488cc;
}
div{
  flex: 1;
  padding: 5px;
}
.maxbox {
  width: 100%;
  background: red;
}
</style>
