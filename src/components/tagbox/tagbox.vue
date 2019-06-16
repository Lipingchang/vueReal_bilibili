<template>
  <div class="mytagbox">
    <div class="taglist" ref="taglist" :class="{'tagoverflow':tagoverflow}">
      <div v-for="(item,index) in tags">{{item}}</div>
    </div>   
    <div v-if="showmore" class="moretag" @click="tagoverflow=!tagoverflow" :class="{'moretagup':!tagoverflow}">更多</div>
  </div>
</template>
<script>
export default {
  props:[
    'tags',
  ],
  data() {
    return {
      tagoverflow: false,
      showmore: false,
    }
  },
  mounted() {
    let height = this.$refs['taglist'].getBoundingClientRect().height
    if (height > 79) {
      this.tagoverflow = true,
      this.showmore = true
    }
  },
}
</script>
<style lang="less">
.mytagbox {
  margin-top: 20px;
  border-top: 1px #f4f4f4 solid;
  display: flex;
}
.taglist {
  display: flex;
  flex-wrap: wrap;
  transition: ease 1s;
}
.taglist.tagoverflow {
  height: 50px;
  overflow: hidden;
}
.taglist>div {
  background-color: #f2f2f2;
  padding: 5px 15px;
  border-radius: 20px;
  color: black;
  margin: 10px;
}
.moretag {
  margin-top: 10px;
  background-image: url('./下拉（大）_32.png');
  width: 150px;
  height: 30px;
  background-size: 20px 20px;
  background-position: 20px 0px;
  text-align: right;
  background-repeat: no-repeat;
}
.moretag.moretagup {
  background-image: url('./收起（大）_32.png');
}
</style>