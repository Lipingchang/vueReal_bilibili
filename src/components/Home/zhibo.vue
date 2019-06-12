<template>
    <div class="zhibo">
      <!-- <banner></banner> -->
      <banner :imageurls="bannerurls" :bannerHeigh="120"></banner>

      <div class="miniIconList">
        <i v-for="(icon,index) in miniIconList" :key="index" style></i>
      </div>
      <div class="recommend">
        <div class="recommendtitle"><span>推荐直播</span><span @click="createRecommends(4)" style="cursor:pointer;">换一换</span></div>
        <div class="recommendbody">
          <videocard v-for="(dd,index) in mydd" :data="dd" :key="index" :change="dd['change']"></videocard>
        </div>
        <h1>更多{{this.$Random.integer(1,1000)+'个推荐直播 >'}}</h1>
      </div>

      <hr>

      <div class="timerRange">
        <div class="timertitle"><span><h2>小时榜</h2>{{nowTimer | timerFormat}}总榜排名</span><span>查看更多</span></div>
        <div class="avters">
          <div class="av2">
            <div class="head" :style="{'background-image': 'url(' + avers[1].url + ')'}"></div>
            <div class="crown"></div>
            <div class="onlinetag" v-if="avers[1].onlinetag">直播中</div>
            <p class="username">{{avers[1].name}}</p>
            <span class="type">{{avers[1].type}}</span>
          </div>
          <span class="avterhr"></span>
          <div class="av1">
            <div class="head" :style="{'background-image': 'url(' + avers[1].url + ')'}"></div>
            <div class="crown"></div>
            <div class="onlinetag" v-if="avers[0].onlinetag">直播中</div>
            <p class="username">{{avers[0].name}}</p>
            <span class="type">{{avers[0].type}}</span>

          </div>
          <span class="avterhr"></span>
          <div class="av3">
            <div class="head" :style="{'background-image': 'url(' + avers[1].url + ')'}"></div>
            <div class="crown"></div>
            <div class="onlinetag" v-if="avers[2].onlinetag">直播中</div>
            <p class="username">{{avers[2].name}}</p>
            <span class="type">{{avers[2].type}}</span>
          </div> 

        </div>
      </div>

      <hr>

      <div class="radio">
        <div class="radiotitle"><span><h2>电台</h2></span><span>查看更多</span></div>
        <div class="body">
          <simplevideocard
            v-for="(rr,index) in radios2"
            :data="rr" :change="rr['channge']"
            :key="index"
          ></simplevideocard>
        </div>
      </div>
      
      <hr>

      <div class="radio">
        <div class="radiotitle"><span><h2>视频唱见</h2></span><span>查看更多</span></div>
        <div class="body">
          <simplevideocard
            v-for="(rr,index) in radios"
            :data="rr" :change="rr['channge']"
            :key="index"
          ></simplevideocard>
        </div>
      </div>
    
    </div>
</template>

<script>
import videocard from '@/components/video/video'
import simplevideocard from '@/components/video/simpleVideo'
import banner from '@/components/banner'

export default {
  components:{
    'banner':banner,
    'videocard':videocard,
    'simplevideocard':simplevideocard,
  },
  data: function(){
    return {
      'bannerurls':[],
      miniIconList: ['英雄联盟','虚拟主播','第五人格','王者荣耀','视频唱见','唱见电台','APEX英雄','守望先锋','只狼：影逝二度','全部标签'],
      mydd: [],
      nowTimer: new Date(),
      avers: [
        {name: '南汇桃子',type:'视频聊天',url:this.$Random.dataImage('100x100','userAvatar')},
        {name: '沉虞亽',type:'王者荣耀',url:this.$Random.dataImage('100x100','userAvatar')},
        {name: '六块腹肌的大大大',type:'绝地求生',url:this.$Random.dataImage('100x100','userAvatar')},
      ],
      radios: [],
      radios2: [],
    }
  },
  filters: {
    timerFormat: function(tt){
      return tt.getHours() +':00 ~ ' + (tt.getHours() + 1)+':00 '
    }
  },
  methods: {
    createRecommends: function(sum){
      if ( this.mydd.length == 0 ){
        for( let k = 0; k<sum; k++ ){ this.mydd.push({change:false})}
      }
      for( let k =0; k< sum;k++ ){
        let ttitle = this.$Random.ctitle(7,15)
        this.mydd[k]['change'] = !this.mydd[k]['change']
        this.mydd[k].isWatching = this.$Random.pick([true,false])
        this.mydd[k].videoTitle = ttitle
        this.mydd[k].longVideo = this.$Random.pick(['电视剧', '纪录片', '电影','',''])
        this.mydd[k].isLive = this.$Random.pick([true,false])
        this.mydd[k].upperName = this.$Random.cname()+this.$Random.clast()
        this.mydd[k].picBg = this.$Random.dataImage('200x100', ttitle)
        this.mydd[k].playCount = this.$Random.integer(100,200000)
        this.mydd[k].bulletCount = this.$Random.integer(100,10000)
        this.mydd[k].duration = this.$Random.integer(65,600)
      }

    },
    createRadios: function(){
      while( this.radios.length < 4 ){
        this.radios.push({change:false})
      }
      for( let i = 0; i<this.radios.length; i++ ){
        let k = this.radios[i]
        let ttitle = this.$Random.ctitle(7,15)
        k['videoTitle'] = ttitle
        k['change'] = !k['change']
        k['upperName'] = this.$Random.cname()+this.$Random.clast()
        k['subTitle'] = this.$Random.csentence(3,5)
        k['playCount'] = this.$Random.integer(100,200000)
        k['picBg'] = this.$Random.dataImage('200x100', ttitle)
      }
    },
    createRadios2: function(){
      while( this.radios2.length < 4 ){
        this.radios2.push({change:false})
      }
      for( let i = 0; i<this.radios2.length; i++ ){
        let k = this.radios2[i]
        let ttitle = this.$Random.ctitle(7,15)
        k['videoTitle'] = ttitle
        k['change'] = !k['change']
        k['upperName'] = this.$Random.cname()+this.$Random.clast()
        k['subTitle'] = this.$Random.csentence(3,5)
        k['playCount'] = this.$Random.integer(100,200000)
        k['picBg'] = this.$Random.dataImage('200x100', ttitle)
      }
    }
  },
  created: function(){
    this.createRecommends(4)
    this.createRadios()
    this.createRadios2()
  },
  mounted: function(){
    this.$myapi.getBanners().then((res)=>{
      this.bannerurls = res['data']['banners']
    })
  }
}
</script>

<style scoped lang="less">
@import "../../assets/constant";
hr {
  border-top-color: #cdcdcd2c;
}
.zhibo {
  padding: 0px 10px;
}
.recommendtitle {
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
}
.recommendtitle span:first-child {
  font-weight: 800;
}
.recommendtitle span:nth-child(2){
  color: #cdcdcd;
}
.recommendtitle span:nth-child(2)::after {
  content: "";
  display: inline-block;
  width: 15px;
  height: 14px;
  background-image: url("./img/刷一刷_32.png");
  background-size: cover;
  margin: 0px 4px;
}

.recommendbody {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.recommendbody .video {
  width: 49%;
  margin: 3px 0px;
}
.recommend > h1 {
  color: @bilibili_pink;
  font-size: 15px;
  font-weight: 200;
}

.timerRange {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.timerRange h2 ,.radio .radiotitle h2{
  font-size: 15px;
  display: inline-block;
  color: black;
  margin-right: 5px;
}
.timerRange .timertitle,.radio .radiotitle {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
.timerRange .timertitle > span ,.radiotitle >span{
  color: #cdcdcd;
}
.timerRange .timertitle > span:nth-child(2) ,.radiotitle > span:nth-child(2){
  flex-grow: 1;
  text-align: right;
  font-weight:600;
}
.timerRange .timertitle > span:nth-child(2)::after ,.radiotitle > span:nth-child(2)::after{
  content: '>';
}


.avters {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.avters> div {
  position: relative;
  width: 30%;
  margin: 45px 10px;
}
.avters .av1>.head {
  margin-top: -20px;
  width: 120px;
  height: 120px;
}
.avters .av1>.crown {
  transform: translateX(-40px) translateY(-150px);
}
.avters .head {
  border: 3px red solid;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-size: cover;
  margin: 0 auto;
}
.crown {
  width:  50px;
  height: 50px;
  background-size: cover;
  transform: translateX(-35px) translateY(-130px);
  margin: 0 auto;
}
.av1 .head {
  border-color: gold;
}
.av1 .crown {
  background: url('./img/ic_live_crown_gold.png')
}
.av2 .head {
  border-color: silver;
}
.av2 .crown {
  background: url('./img/ic_live_crown_silver.png')
}
.av3 .head {
  border-color: #e6bea4;
}
.av3 .crown {
  background: url('./img/ic_live_crown_bronze.png')
}
.avters .username {
  margin-top: -40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 5px;
}
.avters .type {
  color: #cdcdcd;
  font-size: 10px;
}

.radio .body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.radio .simplevideo {
  width: 49%;
}
</style>
