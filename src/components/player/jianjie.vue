<template>
  <div class="jianjiebox">
    <div class="jianjieline1">
      <div class="avaterbox">
        <div class="avater" :style="{'background-image':'url('+avaterurl+')'}"></div>
        <div>
          <span class="name">{{uppername}}</span>
          <span class="fanscount">{{fanscount}}粉丝</span>
        </div>
        <div class="watchingbox">
          <span v-if="iswatching" class="iswatching" @click="iswatching=!iswatching">已关注</span>
          <span v-else class="notwatching" @click="iswatching=!iswatching">关注</span>
        </div>
      </div>
      <div class="title">
        <p class="videotitle" >{{title}}</p>
        <div class="godown"></div>
        </div>
      <div class="videoinfo">
        <i class="playcount"></i><span>{{playcount}}</span>
        <i class="bullutcount"></i><span>{{bullutcount}}</span>
        <i class="videoid"></i><span>{{videoid}}</span>
      </div>
      <div class="iconlist">
        <div class="like"><i></i> <span>{{likecount}}</span></div>
        <div class="dislike"><i></i> <span>不喜欢</span></div>
        <div class="gaveicon"><i></i> <span>投币</span></div>
        <div class="favor"><i></i> <span>收藏</span></div>
        <div class="share"><i></i> <span>分享</span></div>
      </div>
      <tagbox :tags="tags"/>

    </div>
  </div>
</template>
<script>
import tagbox from '@/components/tagbox/tagbox'

export default {
  components: {
    'tagbox': tagbox
  },
  data() {
    return {
      iswatching: false,
      title: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
      playcount: 100,
      bullutcount: 1000,
      videoid: 'av1212391082',
      uppername: 'uppername',
      fanscount: 2000,
      avaterurl: this.$Random.image('100x100'),
      likecount: 5,
      tags: ['a','b','c','d']
    }
  },
}
</script>
<style lang="less">
@import "../../assets/constant";
.iconlist {
  display: flex;
  justify-content: space-around;
  color: #868686;
  margin-top: 15px;
}
.iconlist>div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.iconlist i {
  display: inline-block;
  width: 25px;
  height:25px;
  background-size: cover;
}
.iconlist .like i{
  background-image: url('./32_ic_赞.png')
}
.iconlist .dislike i{
  background-image: url('./32_ic_踩.png')
}
.iconlist .gaveicon i{
  background-image: url('./B币_32.png')
}
.iconlist .favor i{
  background-image: url('./收藏_32.png')
}
.iconlist .share i{
  background-image: url('./分享_32.png')
}

.jianjiebox {
  padding: 10px;
  background-color: white;
}
.avaterbox {
  margin: 10px 0px;
}
.avaterbox .avater {
  width: 60px;
  height:60px;
  background-size: cover;
  border-radius: 50%;
}
.avaterbox {
  display: flex;
}
.avaterbox span {
  display: block;
}
.avaterbox div:nth-child(2){
  flex-grow: 1;
  text-align: left;
}
.avaterbox .watchingbox span {
  padding: 3px 8px;
  background-color: #e5e5e5;
  display: inline-block;
  border-radius: 3px;
}
.avaterbox .watchingbox span::before {
  content: "";
  margin-right: 10px;
  width: 20px;
  height: 16px;
  background-image: url('./menu.png');
  display: inline-block;
  background-size: cover;
}
.avaterbox .watchingbox>.notwatching {
  background-color: @bilibili_pink;
  color: white;
}
.avaterbox .watchingbox>.notwatching::before {
  background-image: none;
  width: 0;
  margin: 0;
}
.avaterbox .name {
  color: @bilibili_pink;
  font-weight: 700;
}
.avaterbox .fanscount {
  color: #868686;
}
.avaterbox div:nth-child(2){
  margin-left: 10px;
}

.videotitle {
  color: black;
  font-size: 20px;
  font-weight: 600;
  text-align: left;
}
.title {
  display: flex; 
}

.videoinfo {
  text-align: left;
  display: flex;
  align-items: center;
}
.videoinfo span {
  margin: 0 5px;
  color: #868688;
}
.videoinfo i {
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  background-size: cover;
  display: inline-block;
}
.playcount {
  background-image: url('./displaycount.png');
}
.bullutcount {
  background-image: url('./bullutcount.png');
}
</style>