<template>
  <h1>{{ mainStore.count }}</h1>

  <hr>

  <h1>{{ mainStore.count10 }}</h1>

  <hr>

  <h1>{{ count }}</h1>
  
  <p>
    <button @click="handleChangeState">修改数据</button>
  </p>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMainStore } from '../store/index'

const mainStore = useMainStore()

// 这是有问题的，因为这样拿到的数据不是响应式的，是一次性的
// Pinia 其实就是把 state 数据都做了 reactive 处理了 
// const {count} = mainStore

// 把解构出来的数据做 ref 响应式处理
const {count} = storeToRefs(mainStore)

const handleChangeState = ()=>{
  // 方式一：最简单的方式
   // mainStore.count++

   // 方式二：如果需要修改多个数据，建议使用 $patch 批量更新
   //mainStore.$patch({
   //  count: mainStore.count + 1
   //})

   // 方式三：$patch 一个函数
   //mainStore.$patch(state=>{
   //   state.count++
   //})

   //方式四：逻辑比较多的时候可以封装 actions 做处理
   mainStore.changeState(10)
}
</script>


<style scoped>

</style>
