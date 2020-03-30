<template>
  <div id = "home">
    <nav-bar class = "home-nav">
      <div slot = "center">购物街</div>
    </nav-bar>

    <home-swiper :banner = "banner"></home-swiper>
    <home-recommend-view :recommend = "recommend"></home-recommend-view>
    <feature-view></feature-view>
    <tab-control class = "tab-control" :titles = "['流行','新款','精选']" @tabclick="tabclick"></tab-control>
    
    <goods-list :goods = "showGoods" ></goods-list>

  
  </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView'
import FeatureView from './childComps/FeatureView'


import {getHomeMultidata,getHomeGoods} from 'network/home'

export default {
    name: 'Home',
    data() {
      return {
        banner: [],
        recommend:[],
        goods: {
          'pop': {page: 0, list:[]},
          'new': {page: 0, list:[]},
          'sell': {page: 0, list:[]},
        },
        currentType: 'pop',
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      FeatureView,
      TabControl,
      GoodsList,
    },
    created () {
      
      this.getHomeMultidata()

      //请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },

    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },

    methods: {

      /**
       * 网络请求相关方法
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res)
          this.banner = res.data.banner.list
          this.recommend = res.data.recommend.list
        })
      },

      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          //不能直接这样，会覆盖，导致之前的数据没有存起来
          // this.goods[type].list = res.data.list
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
        })
      },

      /**
       * 事件监听相关方法
       */
      tabclick(index){
        // console.log(index)
        switch (index) {
          case 0: 
            this.currentType = 'pop'
            break
          case 1: 
            this.currentType = 'new'
            break
          case 2: 
            this.currentType = 'sell'
            break
        }
      }
    }
}
</script>

<style scoped>
  #home{
    padding-top: 44px;
    padding-bottom: 49px;
  }

  .home-nav {
    position:fixed;
    top:0;
    left:0;
    right: 0;
    background-color: var(--color-tint);
    color: white;
    
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9px;
  }

</style>