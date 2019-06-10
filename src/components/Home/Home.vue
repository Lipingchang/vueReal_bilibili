<template>
  <div ref="homelist" class="homelist">
    <div class="title_cards" ref="titlecards">
      <ul>
          <li v-for="(card,index) in main_cards" 
            v-bind:key="index" 
            :class="{'on':currentCard==card}"
            @click="handleCardClick(card,index)"
            >
            {{card}}
          </li>
      </ul>
    </div>
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      v-bind:css="false"
    >
      <router-view></router-view>
    </transition>

  </div>
</template>


<script>
import Velocity from 'velocity-animate'

export default {

  data: function(){
    let ret = {
      main_cards: ['直播','推荐','热门','追番','影视','70年'],
      currentCard: '',
      currentCardIndex: 0,
      beforeCardIndex: 0,
    }
    ret['currentCard'] = ret['main_cards'][0]
    return ret
  },
  methods: {
    handleCardClick: function(clickedCard,index){
      this.currentCard = clickedCard
      this.$router.push('/Home/'+clickedCard)
      this.beforeCardIndex = this.currentCardIndex
      this.currentCardIndex = index
    },
    beforeEnter: function(el){
      Velocity(el,{opacity: 0})
      if ( this.beforeCardIndex < this.currentCardIndex )
        Velocity(el,{translateX: '100%'})
      else 
        Velocity(el,{translateX: '-100%'})
    },
    enter: function(el,done){
      Velocity(el, {translateX:'0%', opacity: 1 }, { complete: done })
    },

    leave: function(el,done){
      if ( this.beforeCardIndex < this.currentCardIndex )
        Velocity(el, { translateX: '-100%'}, { duration: 400 ,complete: done })
      else 
        Velocity(el, { translateX: '100%'}, { duration: 400 ,complete: done })
    }
  },
  mounted: function(){
    let homelist = this.$refs['homelist']
    homelist.addEventListener('scroll', (event)=>{

      let titlecards = this.$refs['titlecards']
      let y = titlecards.getBoundingClientRect().y
    })
    this.$router.push('/Home/直播')

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

.testcards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.testcards>div {
  width: 47%;
  margin-bottom: 20px;
}
</style>
