<template>
    <div class="henvideo">
        <div class="pic" :style="{'background-image':'url('+data.url+')'}" >
          <span>{{data.duration | formatDuration}}</span>
        </div>
        <div class="desc">
            <p class="title">{{data.title}}</p>
            <div>
              <span class="yellowBg">{{data.typea}}</span><span class="antiyellowBg">{{data.typeb}}</span>
            </div>
            <div>
              <span class="upperName">{{data.uppername}}</span>
            </div>
            <div>
              <span class="watcherAndTime">{{data.playcount | formatCount}}观看·{{data.uploadTime | formatDate}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['data'],
  data: function(){
    return {

    }
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
    },
    formatDate: function( uploadTime ){
      let timeDiv = new Date().getTime() - (new Date(uploadTime)).getTime()
      let minutes = Math.floor( timeDiv / 60000 )
      let hours = Math.floor( timeDiv / 3600000 ) 
      let days =  Math.floor( hours / 24 )
      let years = Math.floor( days / 365 )
      if ( minutes >= 60 )
        if( hours >= 24 )
          if ( days > 365 )
            return years + '年前'
          else 
            return days + '天前'
        else
          return hours+ '小时前'
      else 
        return days + '分钟前'

    }
  }
}
</script>

<style lang="less" scoped>
.henvideo {
  display: flex;
  flex-direction: row;
  margin: 10px;
}
.pic {
  width: 40%;
  background-position: center;
  background-size: cover;
  position: relative;
  border-radius: 3px;
}
.pic span {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 5px;
  border-radius: 5px;
  color: white;
  background-color: rgba(0,0,0,0.4);
  margin: 5px;
}
.desc {
  width: 50%;
  padding: 0 10px;
}
.desc p {
  text-align: left;
  margin: 0px 10px 10px 0px;
  font-weight: 700;
}
.desc>div {
  text-align: left;
  margin-top: 5px
}
.yellowBg {
  display: inline-block;
  background-color: #ffa362;
  color: white;
  padding: 2px 3px;
  border-radius: 5px;
  font-size: 10px;
  width: max-content;
  margin: 1px;
}
.antiyellowBg {
  display: inline-block;
  border: 1px solid #ffa362;
  color: #ffa362;
  width: max-content;
  padding: 2px 3px;
  border-radius: 5px;
  font-size: 10px;
  margin: 1px;
}
.upperName , .watcherAndTime{
  color: #adadad;
}
</style>
