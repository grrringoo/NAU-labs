<script setup lang="ts">
defineProps(["cart"])

</script>

<template>
    <div class="Cart">
        <div class="text-3xl">Корзина</div>
        <Transition>
            <div class="CartList" v-if="cart.length !== 0">
                <div class="CartListItem" v-for="product in cart" :key="product.productId">
                    <p>{{ product.name }}</p>
                    <div class="CartListItemActions">
                        <span @click="$emit('productCountIncrease', product.productId)">+</span>
                        <span @click="$emit('productCountDecrease', product.productId)">-</span>
                    </div>
                    <p>К-сть: {{ product.count }}</p>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style>
.Cart {
    display: flex;
    flex-direction: column;
    gap: 32px;
    background-color: #535bf2;
    padding: 16px;
}


.CartList {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.CartListItem {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 0px 8px;
    font-size: 22px;
    border: 1px solid white;
    border-radius: 8px;
}

.CartListItemActions {
    display: flex;
    gap: 8px;
}


.CartListItemActions span:first-child {
    color: rgb(43, 211, 43);
}

.CartListItemActions span:last-child {
    color: rgb(214, 40, 40);
}

.CartListItemActions span {
    cursor: pointer;
}
</style>