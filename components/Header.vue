<template>
    <div class="header">
        <div class="refresh" @click="newOrder" v-if="orderType!==ORDER_TYPES.home"></div>
        <div class="title">
            {{appInfo?.appName}} - Version {{appInfo?.versione.major}}.{{appInfo?.versione.minor}}.{{appInfo?.versione.revision}}
        </div>
        <div class="order" @click="showPanel=!showPanel" v-if="orderLenght>0">
            <div class="label"> {{ orderLenght }} </div>
            <div class="icon">  </div>
        </div>
    </div>
</template>


<script setup lang="ts">
const appInfo = useAppInfo();
const showPanel = useShowPanel();
const globalOrder = useGlobalOrder();
const order = useOrder();
const orderType=useOrderType();
const orderId=useOrderId();
const orderLenght=computed(()=>Object.keys(globalOrder.value?.prodotti?globalOrder.value?.prodotti:{}).length)

const newOrder=()=>{
    globalOrder.value=structuredClone(EMPTY_SERVER_ORDER);
    order.value=structuredClone(EMPTY_ORDER);
    orderType.value=ORDER_TYPES.home;
    orderId.value="";
}
</script>

<style scoped lang="sass">
.header
    @include header-row
    font-weight: 600
    color: $primary-color
    .order
        position: absolute
        width: 40px
        right: 10px
        cursor: pointer
        .icon
            width: 30px
            height: 30px
            @include background-standard
            background-image: url("~/assets/imgs/order.svg")
        .label
            position: absolute
            margin-left: 14px
            margin-top: -6px
            color: white
            background-color: $primary-color
            padding-top: 4px
            border-radius: 20px
            font-size: 10px
            width: 24px
            height: 20px
    .refresh
        position: absolute
        width: 30px
        height: 30px
        left: 10px
        cursor: pointer
        @include background-standard
        background-image: url("~/assets/imgs/back.svg")
</style>