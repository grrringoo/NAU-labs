<script setup lang="ts">
import { reactive } from "vue";
import Cart from "./components/Cart.vue";
import Product from "./components/Product.vue";
import data from './data.json';

const isSale = true;

type Product = {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  sale: boolean; 
};

let cart = reactive<{ productId: number; name: string; count: number }[]>([])

const addToCart = (id: number) => {
  const product = data.products.find(product => product.id === id) as Product
  const cartItem = cart.findIndex(item => item.productId === id)


  if (cartItem >= 0) {
    cart[cartItem].count += 1
    return
  }

  cart.push({
    productId: product.id,
    name: product.name,
    count: 1
  })
}

const increaseProductCount = (id: number) => {
  const cartItem = cart.findIndex(item => item.productId === id)

  if (cartItem >= 0) {
    cart[cartItem].count += 1
  }

}

const decreaseProductCount = (id: number) => {
  const cartItem = cart.findIndex(item => item.productId === id)

  if (cartItem >= 0) {
    cart[cartItem].count -= 1
  }

  if (cart[cartItem].count === 0) {
    cart.splice(cartItem, 1)
    return
  }
}

</script>

<template>
  <div class="Shop">
    <Cart :cart="cart" v-on:productCountIncrease="increaseProductCount"
      v-on:productCountDecrease="decreaseProductCount" />
    <div class="ProductList">
      <Product :isSaleAvailable="isSale" v-on:productAdded="addToCart" v-for="product in data.products" :product="product" />
    </div>
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}


.Shop {
  width: 1660px;
  display: flex;
  flex-direction: column;
  gap: 64px;
}

.ProductList {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
}
</style>
