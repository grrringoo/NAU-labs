<script setup lang="ts">
defineProps(["name", "description", "image"]);
</script>

<template>
  <div class="product">
    <div class="product-info">
      <h1>{{ name }}</h1>
      <p>{{ description }}</p>
    </div>
    <img class="product-image" :src="image" />
  </div>
</template>

<style>
.product-image {
  max-width: 100%;
  width: 540px;
}
</style>
