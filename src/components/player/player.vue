<template>
  <div ref="mainplayerbox" class="mainplayerbox"> 
    <div class="titlebar" :class="{'on':titleon}" ref="titlebar">
      <div class="backarrow"></div>
      <div class="moreicon"></div>
    </div>
    <div class="playerbox" ref="playerbox" ></div>
    <div class="commentsbox" style="height:10000px" ref="commentsbox">
      <div class="commentstitle" :class="{'ontop':titleon}">
        <div>
          <div :class="{'on': commentroute == 'jianjie'}" @click="changeview('jianjie')">简介</div>
          <div :class="{'on': commentroute == 'pinglun'}" @click="changeview('pinglun')">评论 {{commentsCount}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      titleon: false,
      commentsCount: 60,
      commentroute: 'jianjie'
    }
  },
  methods: {
    changeview: function(viewname){
      this.commentroute = viewname
      // this.$router.push(viewname)
    }
  },
  mounted: function(){
    let commentsbox = this.$refs['commentsbox']
    let playerbox = this.$refs['playerbox']
    let titlebar = this.$refs['titlebar']
    let tigger = titlebar.getBoundingClientRect().bottom
    let that = this
    this.$refs['mainplayerbox'].addEventListener('scroll',function(event){
      if ( commentsbox.getBoundingClientRect().y <= tigger )
        that.titleon = true
      else 
        that.titleon = false
    })
  }
}
</script>

<style lang="less">
@import "../../assets/constant";
.mainplayerbox {
  height: 100vh;
  overflow: scroll;
}
.titlebar {
  height: 60px;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.titlebar.on {
  background-color: @bilibili_pink;
  transition: ease 0.5s;
}
.titlebar>div {
  background-size: cover;
  width: 40px;
  height: 40px;
  filter: drop-shadow(0px 0px 10px black);
}
.titlebar>.moreicon {
  background-image: url('./ic_menu_more.png');
}
.titlebar>.backarrow{
  background-image: url('./ic_arrow_left_white.png');
}

.playerbox {
  height: 300px;
  background-color: black;
}

.commentstitle.ontop {
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
}
.commentstitle>div {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #f1e7e7;
  width: 100%;
}
.commentstitle>div>div {
  padding: 8px;
  font-size: 10px
}
.commentstitle>div>div.on {
  color: @bilibili_pink;
  border-bottom: 2px solid @bilibili_pink;
}
</style>
