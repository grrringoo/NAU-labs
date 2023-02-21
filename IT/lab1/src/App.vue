<script setup lang="ts">
import Product from "./components/Product.vue";
</script>

<template>
  <div class="ProductList">
    <Product
      name="Темлі шкарпетки"
      description="Теплі шкарпетки дуже теплі ну дуже круті неймовірні"
      image="/src/assets/vmSocks-blue.png"
    />
    <Product
      name="Темлі шкарпетки"
      description="Теплі шкарпетки дуже теплі ну дуже круті неймовірні"
      image="/src/assets/vmSocks-green.jpg"
    />
  </div>
  <a class="Link" href="https://www.amazon.com/s?k=socks&ref=nb_sb_noss"
    >Більше шкарпеток тут</a
  >
</template>

<style>
.ProductList {
  display: flex;
}

.Link {
  font-size: 28px;
}
</style>
