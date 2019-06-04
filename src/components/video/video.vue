<template>
  <div class="video">
    <div class="pic" v-bind:style="{'height':height+'px','background-image': videoBg}">
      <div class="iconlist">
        <i class="playcount">{{playCount | formatCount}}</i>
        <i class="bulletcount">{{bulletCount | formatCount}}</i>
        <span>{{duration | formatDuration}}</span>
      </div>
    </div>
    <div class="desc">
      <p>{{videoTitle}}</p>
      <div>
        <span class="yellowbg" v-if="longVideo!=''">{{longVideo}}</span>
        <span class="yellowbg" v-if="isWatching">已关注</span>
        <span class="desctext">{{upperName}}</span>
      </div>
    </div>
  </div>
</template>

<script>
const defaultPicBg = require('./videoBG.png')
console.log(defaultPicBg)

export default {
  data: function () {
    return {
      height: 150,
      videoBg: 'url('+defaultPicBg+')',
      playCount:12000,
      bulletCount: 1200,
      duration: 200,
      videoTitle: '这是视频标题~这是视频标题~这是视频标题~这是视频标题~这是视频标题~这是视频标题~这是视频标题~这是视频标题~这是视频标题~',
      videoType_a: '手机平板',
      videoType_b: '手机',
      
      isWatching: true,  // 关注
      isLive: false,      // 直播
      upperName: '大鹌鹑工作室', // up主名字

      niceCount: 100, // 点赞数
      coinCount: 1000, // 硬币数

      longVideo: '电视剧', // 电视剧 纪录片 电影
      
    }
  },
  mounted: function () {

  },
  filters: {
    formatCount: function (num_o) { // 转成 万 为单位的
      let num = num_o
      num = parseInt(num)
      num = num / 10000
      num = num.toFixed(1)
      if ( num>1 ){
        return num + '万'
      }else if ( num == 1 ){
        return '1万'
      }else{
        return num_o+''
      }
    },
    formatDuration: function ( duration ){
      let ret = ''
      let tmp = 0
      while ( duration != 0 ){
        tmp = duration % 60 
        duration = parseInt( duration / 60 )
        ret = (tmp<10 ? '0'+tmp : tmp ) + ':' + ret
      }
      
      if ( ret[0] == '0' )
        ret = ret.slice(1,ret.length-1)
      else 
        ret = ret.slice(0,ret.length-1)
      return ret
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
.video {
  border: 1px solid #efefef;
  background-color: white;
  border-radius: 8px;
  margin: 1px;
  overflow: hidden;
}
.pic {
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
}
.pic .iconlist {
  width: 100%;
  font-weight: 400;
  color: white;
  position: absolute;
  bottom: 0;
  display: flex;
  filter: drop-shadow(0px 0px 2px #000000);
}
.pic .iconlist span{
  flex-grow: 1;
  text-align: right;
  margin-right: 5px;
}
.pic .iconlist i {
  font-style: normal;
  display: inline-flex;
  text-align:start;
  margin: 0px 5px 5px 5px;
}
.pic .iconlist i:nth-child(2)::before {
  display: inline-block;
  content: " ";
  background-image: url('./bullutcount.png');
  width: 20px;
  height: 20px;
  background-size: cover;
}
.iconlist i:first-child::before {
  display: inline-block;
  content: " ";
  background-image: url('./displaycount.png');
  width: 20px;
  height: 20px;
  background-size: cover;
}

.desc {
  padding: 0px 10px;
}
.desc p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 600;
  text-align: left;
}
.desc>div {
  display: flex;
  align-content: center;
}
.desc>div>span {
  margin-right: 10px;
}
.desc .yellowbg {
  display: inline-block;
  background-color: #fda364;
  color: white;
  font-size: 10px;
  border-radius: 4px;
  padding: 0px 4px;
  font-weight: 500;
}
.desc .desctext {
  color: #aaaaaa;
  font-size: 10px;
}
</style>
