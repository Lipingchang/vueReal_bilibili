<template>
  <div class="simplevideo">
    <div class="pic" v-bind:style="{'height':height+'px','background-image': videoBg}">
      <div class="iconlist">
        <i><span>{{upperName}}</span></i>
        <i class="playcount"><span>{{playCount | formatCount}}</span></i>
      </div>
    </div>
    <div class="desc">
      <p>{{videoTitle}}</p>
      <div>
        <span class="desctext"><p>{{subTitle}}</p></span>
        <!-- <span class="extendbox"></span> -->
      </div>
    </div>
  </div>
</template>

<script>
const defaultPicBg = require('./videoBG.png')

export default {
  props: [
    'data','change'
  ],
  data: function () {
    return {
      height: 150,
      videoBg: 'url(' + this.data.picBg +')',//'url('+defaultPicBg+')',
      playCount: this.data.playCount,
      videoTitle: this.data.videoTitle,// '这是视频标题~这是视频标题~这是视频标题~这是视频标题~这是视频标题~这是视频标题~这是视频标题~这是视频标题~这是视频标题~',
      
      upperName: this.data.upperName, // up主名字
      subTitle: this.data.subTitle
    }
  },
  watch: {
    change: function(){
      this.videoBg = 'url(' + this.data.picBg +')' //'url('+defaultPicBg+')',
      this.playCount = this.data.playCount
      this.videoTitle = this.data.videoTitle 
      this.upperName = this.data.upperName // up主名字
      this.subTitle = this.data.subTitle

    }
  },
  mounted: function () {
    // console.log(this.data)
  },
  filters: {
    formatCount: function (num_o) { // 转成 万 为单位的
      let num = num_o
      num = parseInt(num)
      num = num / 10000
      num = num.toFixed(1)
      if ( num>1 ){
        return num + 'W'
      }else if ( num == 1 ){
        return '1W'
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
  /* border: 1px solid #efefef; */
  /* background-color: white; */
  /* margin: 1px; */
  /* overflow: hidden; */
}
.pic {
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 8px;

}
.pic .iconlist {
  width: 100%;
  font-weight: 400;
  color: white;
  position: absolute;
  bottom: 0;
  display: flex;
  filter: drop-shadow(0px 0px 2px #000000);
  justify-content: space-between;
}
.pic i {
  margin-left: 5px;
}
.pic .iconlist span{
  flex-grow: 1;
  text-align: right;
}
.pic .iconlist span{
  font-style: normal;
  display: inline-block;
  text-align: end;
  vertical-align: bottom;
  margin: 0px 5px 5px 5px;
}
/* .pic .iconlist i:nth-child(2)::before {
  display: inline-block;
  content: "";
  background-image: url('./bullutcount.png');
  width: 20px;
  height: 20px;
  background-size: cover;
} */
.iconlist i:nth-child(2)::before {
  display: inline-block;
  content: "";
  background-image: url('./ic_live_watch_count.png');
  width: 20px;
  height: 20px;
  background-size: cover;
}

.desc {
  padding: 0px 10px 10px 10px;
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
  margin-right: 5px;
}
.desc .yellowbg {
  display: inline-block;
  background-color: #fda364;
  color: white;
  font-size: 10px;
  vertical-align: center;
  border-radius: 4px;
  padding: 0px 4px;
  font-weight: 500;
}
.desc .desctext {
  color: #aaaaaa;
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.desc .desctext p {
  margin: 0;
  font-weight: 400;
}
.desc .extendbox {
  flex-grow: 1;
  margin: 0;
  text-align: right;
}
.desc .extendbox::after {
  content: " ";
  display: inline-block;
  background-image: url("./more.png");
  background-size: cover;
  width: 15px;
  height: 15px;
}
</style>
