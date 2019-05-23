<template>
  <div ref="homelist" class="homelist">
    <div class="title_cards" ref="titlecards">
      <ul>
          <li v-for="(card,index) in main_cards" 
            v-bind:key="index" 
            :class="{'on':currentCard==card}"
            @click="handleCardClick(card)"
            >
            {{card}}
          </li>
      </ul>
    </div>

    <banner :bannerHeigh="100"></banner>

  </div>
</template>


<script>
import banner from '@/components/banner'

export default {
  components:{
    'banner':banner,
  },
  data: function(){
    let ret = {
      main_cards: ['直播','推荐','热门','追番','影视'],
      currentCard: '',
    }
    ret['currentCard'] = ret['main_cards'][0]
    return ret
  },
  methods: {
    handleCardClick: function(clickedCard){
      this.currentCard = clickedCard
    }
  },
  mounted: function(){
    let homelist = this.$refs['homelist']
    homelist.addEventListener('scroll', (event)=>{
      // console.log(event)
      // console.log(this.$refs['titlecards'].offsetTop)
      // console.log(this.$refs['titlecards'].getBoundingClientRect().y)
      let titlecards = this.$refs['titlecards']
      let y = titlecards.getBoundingClientRect().y
      // if ( y <= - titlecards.clientHeight )
        
      // let tmp = titlecards.getAttribute('class')
      // titlecards.setAttribute('class','fixtop '+tmp)
    })

  }
}
</script>

<style scoped lang="less" >
@import "../../assets/constant";
.homelist {
  height: calc( 100vh - @head_height );
  overflow: scroll;
}
.fixtop {
  position: fixed;
  top: @head_height;
  left: 0;
  right: 0;
}

.title_cards ul, .title_cards li{
  display: inline-block;
  margin: 0px;
  padding: 0px;
}
.title_cards ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0px 30px;
  font-size: 0.9em;
  border-bottom: 1px solid #efefef;
  background: white;
}
.title_cards li {
  display: inline-block;
  line-height: 30px;
  padding: 5px 5px 0px 5px;
  color: @text_color;
}
.title_cards li.on {
  border-bottom: 3px @bilibili_pink solid;
}
</style>


</style>
