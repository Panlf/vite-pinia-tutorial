<template>
    <ul>
        <li v-for="item in productsStore.all">
            {{item.title}} - {{item.price}}
    
            <button :disabled="!item.inventory" @click="carStore.addProductToCart(item)">添加到购物车</button>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { useProductsStore } from '@/store/products' 
import { useCartStore } from '@/store/cart' 

const productsStore = useProductsStore()
const carStore = useCartStore()

//加载所有的数据
productsStore.loadAllProducts()
</script>