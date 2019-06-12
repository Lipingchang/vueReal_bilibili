<template>
    <div class="silderbar" ref="silderbar"  >
        <div class="mainsilder" ref="mainsilder" :style="{'transform':'translateX('+(value?'0%':'-100%')+')'}">
          <div class="avterbox">
            <div class="avter"></div>
            <div class="pocket"></div><div class="qrcode"></div>
            <div class="userdetail">
              <span class="username">{{username}}</span><span class="level">LV{{level}}</span><span class="ishuiyuan" v-if="ishuiyuan">正式会员</span>
            </div>
            <div class="bcon">
              <span>B币: {{bconCount}}</span>
              <span>硬币: {{iconCount}}</span>
            </div>
            <!-- <div class="bgicon"></div> -->
          </div>
          <div class="huiyuanrecommend">
            <i class="dahuiyuan"></i>
            <span>大会员</span>
            <span>开通大会员畅看番剧国创</span>
            <i class="go"></i>
          </div>

          <div class="line2">
            <div>
              <span>{{newCount}}</span>
              <span>动态</span>
            </div>
            <div>
              <span>{{watchingCount}}</span>
              <span>关注</span>
            </div>
            <div>
              <span>{{fansCount}}</span>
              <span>粉丝</span>
            </div>
          </div>

          <div class="listline">
            <div v-for="(item,index) in silderlist" :key="index" @click="silderclick(index)" :class="{'on':clickItem==index}">
              <i class="listitem" :style="{'background-image':'url('+item['img']+')'}"></i>
              <span>{{item['name']}}</span>
              <div class="newicon" v-show="item.hasnew">
                <span class="newicon">NEW</span>
              </div>
            </div>
          </div>

          <div class="bottomsettings">
            <div><div><div class="settings"></div></div><span>设置</span></div>
            <div><div><div class="themes"></div></div><span>主题</span></div>
            <div><div><div class="nightmode"></div></div><span>夜间</span></div>
          </div>
        </div>
    </div>
</template>

<script>
import Velocity from 'velocity-animate'
const pic1 = require('./tab.png')
const pic2 = require('./history.png')
const pic3 = require('./download.png')
const pic4 = require('./collection.png')
const pic5 = require('./afterwatch.png')
const pic6 = require('./upload.png')
const pic7 = require('./flag-f.png')

export default {
  props: ['value'],
  data: function(){
    return {
      // silderopen: true,
      bconCount: 0.0,
      iconCount: 192.0,
      username: 'daydaydownandup',
      level:3,
      ishuiyuan: true,
      newCount: 0,
      watchingCount: 128,
      fansCount: 1,
      silderlist: [
        { img: pic1, name:'首页',hasnew: false},
        { img: pic2, name:'历史记录', hasnew: false},
        { img: pic3, name:'离线缓存', hasnew: false},
        { img: pic4, name:'我的收藏', hasnew: false},
        { img: pic5, name:'稍后再看', hasnew: true},
        { img: pic6, name:'投稿成为up主', hasnew: false},
        { img: pic7, name:'热门活动', hasnew: false},
      ],
      clickItem: 0,

    }
  },
  mounted: function(){
    let that = this
    this.$refs['mainsilder'].addEventListener('click',function(event){
      event.stopPropagation()
    },false)
    this.$refs['silderbar'].addEventListener('click',function(event){
      that.changeSilderStatus()
    },false)
  },
  watch:{
    value: function(newone){
      let el = this.$refs['silderbar']
      if ( !newone ){
        Velocity(el, { opacity: 0 }, { duration: 500})
        Velocity(el, {translateX:'-100%'},{duration: 0})
      }else{
        Velocity(el, {translateX:'0%'},{duration: 0})
        Velocity(el, { opacity: 1 }, { duration: 500})
      }
    }
  },
  methods:{
    changeSilderStatus: function(){
      this.$emit('input', !this.value)
    },
    silderclick: function(index){
      this.clickItem = index
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/constant";
.silderbar {
  transform: translateX(-100%);
  background-color: rgba(0,0,0,0.5);
  width: 100vw;
  height: 100vh;
  position:fixed;
  z-index: 99;
}
.mainsilder {
  width: 70%;
  height: 100%;
  background-color: #fafafa;
  transition: ease 0.5s;
}

.avterbox {
  height: 150px;
  background-color: @bilibili_pink;
  overflow: hidden;
  position: relative;
  background-image: url('./ic_column_detail_article_select.png');
  background-size: 170px 170px;
  background-position: 150px 20px;
  background-repeat: no-repeat;
}

.avter {
  background-image: url('./avter.jpg');
  width: 55px;
  height: 55px;
  background-size: cover;
  border-radius: 50%;
  border: 2px white solid;
  margin: 15px;
}
.pocket, .qrcode{
  width: 20px;
  height: 20px;
  border: 1px white solid;
  border-radius: 50%;
  padding: 5px;
  background-size: 20px 20px;
  background-position: center;
  background-repeat: no-repeat;
  // float: right;
  margin: 15px;
  position: absolute;
  right: 0;
  top: 0;
}
.pocket {
  background-image: url('./cc-wallet-o.png');
  transform: translateX(-150%);
}
.qrcode {
  background-image: url('./rqcode.png');
}
.avterbox {
  text-align: left;
}
.avterbox > div.userdetail ,.avterbox >div.bcon {
  margin: 10px 5px;
  z-index: 100;
}
.avterbox .bcon span{
  color: #cdcdcd;
}
.avterbox span {
  color: white;
  font-size: 14px;
  margin: 0px 5px;
}
.level {
  border: 1px white solid;
  border-radius: 4px;
  padding: 0px 2px;
}
span.ishuiyuan {
  background-color: rgba(255, 255, 255, 0.5);
  padding: 1px 5px;
  border-radius: 4px;
  color: @bilibili_pink;
}


.dahuiyuan {
  background-image: url('./ic_vip_v_22.png');
  background-size: cover;
  width: 20px;
  height: 20px;
  display: inline-block;
}
.huiyuanrecommend {
  display: flex;
  justify-content: space-around;
  padding: 10px 0px;
  background-color: white;
}
.huiyuanrecommend span:nth-child(2){
  color: @bilibili_pink;
  font-weight: 600;
  font-size: 13px;
}
.huiyuanrecommend span:nth-child(3){
  font-size: 13px;
  font-weight: 400;
  color: #cdcdcd;
}
.huiyuanrecommend .go {
  background-image: url('./bilipay_ic_arrow_right.png');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: cover;
}

.line2 {
  display: flex;
  justify-content: space-around;
  padding: 10px 0px;
  margin: 10px 0;
  background-color: white;
  color: #8d8d8d;
}
.line2>div{
  display: flex;
  flex-direction: column;
}

.listline .on {
  background: #ebebeb;
  color: @bilibili_pink;
}
.listline>div {
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 10px 20px;
}
.listline i {
  display: inline-block;
  width: 25px;
  height: 25px;
  background-size: cover;
  margin-right: 20px;
}
.listline div.newicon {
  flex-grow: 1;
  text-align: right;
}
.listline span.newicon {
  background-color: @bilibili_pink;
  border-radius: 3px;
  padding: 3px 5px;
  color: white;
  font-size: 10px;
}

.bottomsettings {
  width: 100%;
  height: 50px;
  background-color: white;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
}
.bottomsettings >div{
  display: flex;
  align-items: center;
}
.bottomsettings span {
  height: min-content;
  margin-left: 10px;
  font-size: 10px;
}
.bottomsettings >div>div {
  width: 20px;
  height: 20px;  
  border: 1px #8d8d8d solid;
  padding: 9px;
  border-radius: 50%;
}
.bottomsettings>div>div>div {
  width: 20px;
  height: 20px;
  background-size: cover;
  margin: auto;
}
.settings {
  background-image: url('./设置.png')
}
.themes {
  background-image: url('./主题.png')
}
.nightmode {
  background-image: url('./夜间模式.png')
}
</style>

