<template>
  <div>
    <div class="taglist">
      <div v-for="(item,index) in tags">{{item}}</div>
    </div>   
  </div>
</template>
<script>
export default {
  props:[
    'tags',
  ],
  data() {
    return {
          
    }
  },
}
</script>
<style lang="less">
.taglist {
  display: flex;
  justify-content: space-between;
  
}
</style>