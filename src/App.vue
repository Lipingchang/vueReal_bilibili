<template lang="html">
  <div id="app">
    <router-view/>
    <div class="buttonbox">
      <button :class="{'on':'Home'==currentPage}" @click="clickRoute('Home')" ><div class="nav_img home"></div><span>首页</span></button>
      <button :class="{'on':'Channel'==currentPage}" @click="clickRoute('Channel')" ><div class="nav_img channel"></div><span>频道</span></button>
      <button :class="{'on':'News'==currentPage}" @click="clickRoute('News')" ><div class="nav_img news"></div><span>动态</span></button>
      <button :class="{'on':'Shopping'==currentPage}" @click="clickRoute('Shopping')" ><div class="nav_img shopping"></div><span>会员购</span></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function(){
    return {
      currentPage: 'Home',
    }
  },
  methods: {
    clickRoute: function(dst){
      this.$router.push(dst)
      this.currentPage = dst
    }
  },
}
</script>

<style scoped lang="less">
@import "./assets/colors.less";
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
  width: 100%;
  height: 60px;
  background: rgba(255,255,255,0.9);
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #e5e5e5;
}
.buttonbox button{
  flex: 1 1 0;
  outline: none;
  display: block;
  border: 0;
  background: rgba(0, 0, 0, 0);
  color: rgb(124, 124, 124);
  font-size: 1em;
  cursor: pointer;
  position: relative;
}
.buttonbox button.on {
  color: @bilibili_pink;
}
.buttonbox button span {
  display: block;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  margin-bottom: 10px;
}
// icon的容器
.buttonbox button>div {
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  right: 50%;
  left: 50%;
  transform: translate(-50%, -110%); 
}
.buttonbox .nav_img{
  background-size: 20px 20px;
  background-repeat: no-repeat;
}
.buttonbox .nav_img.home{
  background-image: url("./assets/nav_home.png");
}
.buttonbox button.on .nav_img.home{
  background-image: url("./assets/nav_home_on.png");
}

.buttonbox .nav_img.channel{
  background-image: url("./assets/nav_channel.png");
}
.buttonbox button.on .nav_img.channel{
  background-image: url("./assets/nav_channel_on.png");
}

.buttonbox .nav_img.news{
  background-image: url("./assets/nav_news.png");
}
.buttonbox button.on .nav_img.news{
  background-image: url("./assets/nav_news_on.png");
}

.buttonbox button .nav_img.shopping{
  background-image: url("./assets/nav_shopping.png");
}
.buttonbox button.on .nav_img.shopping{
  background-image: url("./assets/nav_shopping_on.png");
}
</style>
