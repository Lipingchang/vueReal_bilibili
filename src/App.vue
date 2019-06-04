<template lang="html">
  <div id="app">
    <div class="headbox">
      <div class="headbox_head">
        <div class="ic tab"></div>
        <div class="ic avatar"></div>
      </div>

      <div v-if="'Home'==currentPage" class="headbox_child">
        <div class="searchbox"><i></i></div>
        <div class="ic newgame"></div>
        <div class="ic download"></div>
        <div class="ic chat"></div>
      </div>

      <div v-if="'Channel'==currentPage" class="headbox_child channel">
        <div class="title_text">频道</div>
        <div class="ic download"></div>
        <div class="ic search"></div>
      </div>

      <div v-if="'News'==currentPage" class="headbox_child news">
        <div class="title_text">动态</div>
        <div class="ic editor"></div>
      </div>

      <div v-if="'Shopping'==currentPage" class="headbox_child shopping">
        <div class="title_text">会员购</div>
        <div class="ic shoppingcar"></div>
        <div class="ic contact"></div>
      </div>
    </div>
    
    <div class="buttonbox">
      <button :class="{'on':'Home'==currentPage}" @click="clickRoute('Home')" ><div class="nav_img home"></div><span>首页</span></button>
      <button :class="{'on':'Channel'==currentPage}" @click="clickRoute('Channel')" ><div class="nav_img channel"></div><span>频道</span></button>
      <button :class="{'on':'News'==currentPage}" @click="clickRoute('News')" ><div class="nav_img news"></div><span>动态</span></button>
      <button :class="{'on':'Shopping'==currentPage}" @click="clickRoute('Shopping')" ><div class="nav_img shopping"></div><span>会员购</span></button>
    </div>

    <router-view/>

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
@import "./assets/constant.less";
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

// 顶部栏
.headbox {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: @head_height;
  background: @bilibili_pink;
  display: flex;
}
.headbox>.headbox_head{
  display: inline-block;
  position: relative;
  height: inherit;
}
.headbox>.headbox_child {
  height: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1 1 0;
}
.headbox .ic {
  display: inline-block;
  width: @head_ic_size;
  height: @head_ic_size;
  margin: 0px 15px;
  background-size: @head_ic_size @head_ic_size;
}
.headbox>.headbox_head .tab { // 滑动抽屉开关
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  background-image: url("./assets/head_bars.png");
  transform: translate(-70%,50%);
}
.headbox>.headbox_head .avatar {
  background-image: url("./assets/avatar.jpg");
  border-radius: 50%;
  margin-right: 0px;
  border: 1px white solid;
  top: 0;
  transform: translateY(45%);
}

// headbox_child 主页的顶部栏配置

.searchbox {
  background-color: #e97093;
  height: 30px;
  flex: 1 1 0;
  margin: 0px 10px;
  border-radius: 15px;
  position: relative;
}
.searchbox>i {
  opacity: 0.6;
  display: inline-block;
  background-image: url("./assets/head_search.png");
  background-size: 15px 15px;
  width: 15px; 
  height: 15px;
  position: absolute;
  left: 0;
  top:0;bottom: 0; // 对立属性 流体特性的绝对定位元素
  margin: auto 10px; // auto 填满上下剩余空间，使得居中
  padding: 0;
}
.newgame {
  background-image: url("./assets/head_game.png");
}
.download {
  background-image: url("./assets/head_download.png");
}
.chat {
  background-image: url("./assets/head_chat.png");
}
// headbox_child channel的配置
.title_text {
  flex: 1 1 0;
  color: white;
  font-size: 1.3em;
  font-weight: 600;
}
.search {
  background-image: url("./assets/head_search.png");
}
.headbox_child.channel .title_text {
  margin-left: 80px;
}
// headbox_child news的配置
.editor {
  background-image: url("./assets/head_edit.png")
}
.headbox_child.news .title_text {
  margin-left: 30px;
}
// headbox_child shopping的配置
.shoppingcar {
  background-image: url("./assets/head_car.png");
}
.contact {
  background-image: url("./assets/head_contact.png");
}
.headbox_child.shopping .title_text {
  margin-left: 80px;
}
// 导航栏
.buttonbox {
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  width: 100%;
  height: @nav_height;
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
  width: @nav_icon_size;
  height: @nav_icon_size;
  right: 50%;
  left: 50%;
  transform: translate(-50%, -110%); 
}
.buttonbox .nav_img{
  background-size: @nav_icon_size @nav_icon_size;
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
