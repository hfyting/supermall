<template>
  <div class="tab-control">
    <div v-for="(title,index) in titles" :key="index" 
      class="tab-control-item" :class = "{active: index === currentIndex}"
      @click = "itemclick(index)">
      <span>{{title}}</span>
    </div>
      
    
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles:{
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0,
    }  
  },
  methods: {
    itemclick(index) {
      this.currentIndex = index
      this.$emit('tabclick',index)
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  width:100%;
  line-height:40px;
  font-size: 15px;
  text-align: center;
  background-color: #fff;
}

.tab-control-item {
  flex:1;
}

.tab-control-item span{
  padding: 5px;
}

.active {
    color: var(--color-tint)
}

.active span {
    border-bottom: 3px solid var(--color-tint)
}

</style>