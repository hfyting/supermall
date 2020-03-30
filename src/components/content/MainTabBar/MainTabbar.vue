<template>
    <tab-bar>
        <tab-bar-item path = "/home" activeColor="red"> 
            <img slot = "item-icon" src="~assets/img/home/首页.png" alt="">
            <img slot = "item-icon-active" src="~assets/img/home/首页_actived.png" alt="">
            <div slot = "item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path = "/category" activeColor="red">
            <img slot = "item-icon" src="~assets/img/category/分类.png" alt="">
            <img slot = "item-icon-active" src="~assets/img/category/分类_actived.png" alt="">
            <div slot = "item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path = "/cart" activeColor="red">
            <img slot = "item-icon" src="~assets/img/cart/购物车.png" alt="">
            <img slot = "item-icon-active" src="~assets/img/cart/购物车_actived.png" alt="">
            <div slot = "item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path = "/profile" activeColor="red">
            <img slot = "item-icon" src="~assets/img/profile/我的.png" alt="">
            <img slot = "item-icon-active" src="~assets/img/profile/我的_actived.png" alt="">
            <div slot = "item-text">我的</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/Tabbar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>
