<template>
    <div>
      <OrderPanel />
      <Header />
      <slot />
      <Footer v-if="orderType!=ORDER_TYPES.home"/>
    </div>
</template>

<script setup lang="ts">
const orderType=useOrderType();
</script>