<template>
  <div class="goods-item">
    <img :src="goodItem.show.img" alt=""/>
    <div>
      <p>{{goodItem.title}}</p>
      <div class = "goods-info">
        <span class = "price">￥{{goodItem.price}}</span>
        <span class = "collect">{{goodItem.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodItem: {
      type: Object,
      default() {
          return []
      }
    }
  }
}
</script>

<style scoped>
.goods-item {
  padding-bottom: 30px;
  position: relative;
  width: 48%;
  padding-left: 15px;
  padding-right: 5px;
}

.goods-item img {
  width: 100%;
  height: 250px;
  /* 圆角 */
  border-radius: 5px;
}

.goods-info {
  font-size: 15px;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-item p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
}
.goods-info .price {
    color: var(--color-high-text);
    margin-right: 30px;
}

.goods-info .collect{
    position: relative;
}

.goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/收藏.svg") 0 0/14px 14px;
}
</style>