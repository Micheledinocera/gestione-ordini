<template>
    <OrderContainer v-if="orderType==ORDER_TYPES.home"/>
    <MenuItemsSelector v-if="orderType!=ORDER_TYPES.home"/>
</template>

<script setup lang="ts">
const globalOrder=useGlobalOrder();
const {getGlobalOrder,isEmptyOrder}=useOrders();
const orderType=useOrderType();
const route=useRoute();
const orderId=useOrderId();

onMounted(()=>{
    if(route.query.code){
        orderId.value=route.query.code as string;
        getGlobalOrder();
        // orderType.value=ORDER_TYPES.getOrder;
    }
})

// VA RISOLTO
watch(globalOrder,()=>{
    if(globalOrder.value!==null && !isEmptyOrder.value){
        orderType.value=ORDER_TYPES.getOrder;
        orderId.value=globalOrder.value.id??"";
    } else
        orderId.value=""
})
</script>

<style scoped lang="sass">
</style>