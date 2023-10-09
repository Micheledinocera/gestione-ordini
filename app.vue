<template>
  <NuxtLayout class="layout-container">
    <NuxtScrollbar id="layout-content" :class="{'without-footer':orderType==ORDER_TYPES.home}">
      <NuxtPage/>
    </NuxtScrollbar>
  </NuxtLayout>
</template>

<script setup lang="ts">
const orderType=useOrderType();
const appInfo = useAppInfo();

onMounted(()=>{
  window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
    event.returnValue = "";
  });
})
</script>

<style lang="sass">
.layout-container
  #layout-content
    display: block
    height: calc(100vh - 2*$base-height)
    background-color: $primary-color-light
    &.without-footer
      height: calc(100vh - $base-height)
</style>