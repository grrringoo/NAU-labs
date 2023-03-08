<script setup lang="ts">
const props = defineProps(["product"]);

const { id, name, description, imageSrc, inStock } = props.product;
</script>

<template>
  <div class="product">
    <img class="product-image" :src="imageSrc" />
    <div class="product-info w-full">
      <div class="flex justify-between items-center">
        <div class="text-xl text-white">{{ name }}</div>
        <span v-if="inStock" class="text-green-400">Є в наявності</span>
        <span v-else class="text-red-400">Немає в наявності</span>
      </div>
      <p class="text-white">{{ description }}</p>
      <button @click="$emit('productAdded', id)" :disabled="!inStock">Додати в корзину</button>
    </div>
  </div>
</template>

<style>
.product {
  display: flex;
  gap: 16px;
  flex: 0 0 31.85%;
  border: 1px solid #42b883;
  padding: 8px 14px;
  box-sizing: border-box;
  border-radius: 8px;
}

.product-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-image {
  max-width: 100%;
  max-height: 100%;
  width: 200px;
}
</style>
