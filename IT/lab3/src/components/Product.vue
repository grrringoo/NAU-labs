<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps(["product", "isSaveAvailable"]);

const { id, name, description, imageSrc, inStock, onSale } = props.product;

const isSale = computed(() => onSale && props.isSaveAvailable);
</script>

<template>
  <div class="product relative">
    <span v-if="isSale" class="absolute top-[-10px] left-[-30px] bg-red-500 px-3 py-3 text-white rounded-full">Розпродаж</span>
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
