<template>
        <!-- <banner></banner> -->
    <div class="testcards">
      <videocard></videocard>
      <videocard></videocard>
      <videocard></videocard>
      <videocard></videocard>
    </div>
</template>

<script>
import videocard from '@/components/video/video'
import banner from '@/components/banner'

export default {
  components:{
    'banner':banner,
    'videocard':videocard,
  },
}
</script>

<style>

</style>
