<template>
    <div class="root">
        <div class="title_cards" ref="titlecards">
            <ul class="left">
                <li class="on">广场</li>
            </ul>
            <ul class="right">
                <li><div class="ic menue"></div></li>
            </ul>
        </div>
        <div class="channel_list">
            <div v-for="(channel,id) in channelList" v-bind:key="id" >
              <img :src="channel['img']"/>
              <span>{{channel['title']}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data:function(){
    return {
      channelList:[],
      channels:['番剧','国创','放映厅','纪录片',
        '漫画','专栏','直播','音频',
        '动画','音乐','舞蹈','游戏',
        '科技','数码','生活','鬼畜',
        '时尚','广告','娱乐','影视',
        '电影','电视剧',],
    }
  },
  mounted:function(){
    for( let i = 1; i<=22; i++ ){
      let img = require('./ic_category_'+ i +'.png')
      this.channelList.push({
        'img': img,
        'title':this.channels[i-1]
      })
    }
  }
}
</script>

<style scoped lang="less">
@import "../../assets/constant";
.root {
  height: calc(100vh - @nav_height - @head_height);
  overflow: scroll;
}
.title_cards ul, .title_cards li{
  display: inline-block;
  margin: 0px;
  padding: 0px;
}
.title_cards {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0px 10px;
  font-size: 0.9em;
  border-bottom: 1px solid #efefef;
  background: white;
  justify-content: space-between;
  align-items: center;
}
.title_cards li {
  display: inline-block;
  line-height: 30px;
  padding: 5px 5px 0px 5px;
  color: @text_color;
}
.title_cards .menue {
  width: 15px;
  height: 15px;
  background-image: url("./title_bars.png");
  background-size: 15px 15px;
}
.title_cards li.on {
  border-bottom: 3px @bilibili_pink solid;
  color: @bilibili_pink;
}
.channel_list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // justify-content: space-around;
}
.channel_list div{
  box-sizing: border-box;
  padding: 10px;
  width: 25vw;
  height: 25vw;
  overflow: hidden;
}
.channel_list div img{
  width: 15vw; height: 15vw;
}
</style>
