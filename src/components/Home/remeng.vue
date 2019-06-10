<template>
  <div class="hotlist">
    <div class="title">
      <div class="range" @click="changeList(true)"><i></i><span>排行榜</span></div>
      <div class="split"></div>
      <div class="selection" @click="changeList(false)"><i></i><span>每周精选</span></div>
    </div>

    <div class="body">
      <div v-if="nowList">
        <henvideo v-for="(data,index) in list1" :data="data" :key="index"></henvideo>
      </div>
      <div v-else></div>
    </div>

  </div>
</template>

<script>
import henvideo from '@/components/video/henvideio'

export default {
  components: {
    'henvideo': henvideo
  },
  data: function(){
    return {
      nowList: true,
      list1: [],
      list2: [],
    }
  },
  methods: {
    changeList: function( rrr ){
      this.nowList = rrr
    },
    createList: function(list,size){
      while( list.length < size ){
        list.push({})
      }

      for( let i = 0; i< size; i++ ){
        let tmp = list[i]
        tmp['duration'] = this.$Random.integer(61,900)
        tmp['title'] = this.$Random.ctitle(5,10)
        tmp['typea'] = this.$Random.pick(['百万播放','新上榜'])
        tmp['typeb'] = this.$Random.pick(['百万点赞','大家都在搜'])
        tmp['uppername'] = this.$Random.cname() + this.$Random.clast()
        tmp['playcount'] = this.$Random.integer(400,100000)
        tmp['url'] = this.$Random.dataImage('200x100')
        tmp['uploadTime'] = this.$Random.datetime()
      }
    }
  },
  mounted: function(){
    this.createList(this.list1,10)
    console.log(this.list1)
  }
}
</script>

<style scoped>
.title {
  padding: 10px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}
.split {
  border: 1px solid black;
}
.title>div {
  display: flex;
  align-items: center;
}
.title i {
  display: inline-block;
  width:  30px;
  height: 30px;
  background-size: cover;
  margin: 0px 20px;
}
.range i {
  background-image: url('./img/biligame_discover_ic_rank.png');
}
.selection i {
  background-image: url('./img/ic_attention_group.png');
}
</style>
