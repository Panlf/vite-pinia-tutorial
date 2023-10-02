import { defineStore } from 'pinia'
import { IProduct, buyProducts } from '@/api/shop'
import { useProductsStore } from './products'

type CartProduct = {
   quantity: number
} & Omit<IProduct,'inventory'>

export const useCartStore = defineStore('carts',{
    state() {
        return {
            cartProducts: [] as CartProduct[], //购物车商品列表
            checkoutStatus:null as null | string
        }
    },
    getters:{
        totalPrice(state){
            return state.cartProducts.reduce((total,item)=>{
                return total + item.price * item.quantity
            },0)
        }
    },
    actions:{
        addProductToCart (product:IProduct) {
            if(product.inventory < 1){
                return
            }

            const cartItem = this.cartProducts.find(item => item.id === product.id)

            if(cartItem){
                cartItem.quantity++
            }else{
                this.cartProducts.push({
                    id:product.id,
                    title:product.title,
                    price:product.price,
                    quantity:1
                })
            }

            const productsStore= useProductsStore()
            productsStore.decrementProduct(product)
        },
        async checkout(){
            const result = await buyProducts()
            this.checkoutStatus = result ? '成功' : '失败'
        }
    }
})