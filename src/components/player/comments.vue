<template>
  <div class="mycomments">
    <div class="title">
      <span>评论({{commentcCount}})</span>
    </div>

    <usercomment/>
  </div>
</template>

<script>
import usercomment from './usercomment'

export default {
  components: {
    'usercomment':usercomment
  },
  data() {
    return {
      commentcCount: 60,
    }
  },
}
</script>
<style lang="less">
.mycomments {
  margin: 10px;
}
.title span {
  font-weight: 700;
}
</style>