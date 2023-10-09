<template>
    <div class="order-container">
        <div class="buttons-container">
            <div class="crea" @click="orderType=ORDER_TYPES.newOrder"> Crea Nuovo Ordine </div>
            <div class="oppure"> Oppure </div>
            <div class="aggiungi">
                <input type="text" v-model=orderId placeholder="ID ordine" @keydown.enter="getGlobalOrder">
                <div @click="getGlobalOrder" :class="['get-order',{inactive:orderId.length==0},{error:orderId.length==0 && globalOrder}]"> {{orderId.length==0 && globalOrder?'Errore':'Cerca Ordine'}} </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const orderId=useOrderId();
const orderType=useOrderType();
const globalOrder=useGlobalOrder();
const { getGlobalOrder,isEmptyOrder } =useOrders();

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
.order-container
    padding-top: 20px
    width: calc(100% - 40px)
    margin: auto
    .buttons-container
        margin: auto
        text-align: center
        .crea
            background-color: $primary-color
            border-radius: 8px
            color: white
            cursor: pointer
            font-size: 22px
            padding: 8px 10px
            font-weight: 600
            &:hover
                background-color: $primary-color-dark
        .oppure
                margin: 10px 0
        .aggiungi
            display: flex
            margin: auto
            width: 320px
            input
                width: 120px
            .get-order
                margin-left: auto
                width: fit-content
                color: white
                font-weight: 700
                cursor: pointer
                background-color: $primary-color
                padding: 6px 8px
                border-radius: 8px
                &:hover
                    background-color: $primary-color-dark
                &.inactive
                    opacity: 0.5
                    pointer-events: none
                &.error
                    background-color: $red
</style>