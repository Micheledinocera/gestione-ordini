<template>
    <div class="footer">
        <div :class="['aggiungi',{inactive:inactive}]" @click="orderHandler" v-if="order.nome!=''"> {{isEdit?"Modifica ordine per ":"Aggiungi all'ordine come " }}<b>{{order.nome}}</b> </div>
    </div>
</template>


<script setup lang="ts">
const { createOrder,updateOrder,users } =useOrders();
const order=useOrder();
const {getMenuItemsFromCategory}= useMenuItems();
const showPanel=useShowPanel();
const orderType=useOrderType();
const categories= useCategories();
const menuItems=ref() as Ref<Record<string,ServerMenuItem[]>>

const getMenuItems= async (category:Ref<Category & {id:string}>)=> {
    const valueToReturn = await getMenuItemsFromCategory(category.value)
    menuItems.value={...menuItems.value,...{[category.value.id]:valueToReturn}}
}

categories.value.forEach((category)=>{
    getMenuItems(ref(category))
})

const orderHandler=()=>{
    if(orderType.value==ORDER_TYPES.newOrder)
        createOrder()
    else
        updateOrder()
    showPanel.value=true;
}

const isEdit=computed(()=>users.value.includes(order.value.nome))

const inactive=computed(()=>
    categories.value.some(category=>{
        if(!category.min) 
            return false
        return category.min>getOrderItemsFromCategory(menuItems.value,category,order.value).length
    })
)
</script>

<style scoped lang="sass">
.footer
    @include header-row
    color: $primary-color
    .aggiungi
        color: white
        cursor: pointer
        background-color: $primary-color
        height: calc(100% - 14px)
        padding-top: 14px
        &:hover
            background-color: $primary-color-dark
        &.inactive
            opacity: 0.5
            pointer-events: none
</style>