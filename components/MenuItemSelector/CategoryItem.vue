<template>
    <div :class="['category-item',{collapsed:collapsed}]">
        <div class="label-container" @click="collapsed=!collapsed"> 
            <div class="label"> {{ category.value+(categoryTotal>0?(" - "+categoryTotal+"€"):"") }} </div>
            <div class="counter-container">
                <div class="counter"> {{selectedItems.length}} </div>
                <div class="max" v-if="category?.max"> /{{ category?.max }}</div>
            </div>
        </div>
        <div :class="['menu-items-container',{inactive:selectedItems.length==category?.max}]">
            <div :class="['menu-item',{selected:orderProdottiRef.includes(menuItem.id)}]" v-for="menuItem in menuItems?menuItems[category.id]:[]" :key="'menuItem_'+menuItem.id" @click="()=>addToOrder(menuItem)">
                <div class="label"> {{ menuItem.data.label+(menuItem.data.isGift?" - gratuita":"") }} </div>
                <div class="price" v-if="menuItem.data.price"> {{ menuItem.data.price }}€ </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  category: Category & {id:string},
  menuItems: Record<string,ServerMenuItem[]>
}>()

const order=useOrder();
const collapsed=ref(false);

const orderProdottiRef=computed(()=> {
    return order.value.prodotti.map(prodotto=>prodotto.id)
})

const addToOrder=(menuItem:ServerMenuItem)=>{
    const orderIndex=orderProdottiRef.value.indexOf(menuItem.id)
    if(orderIndex!=-1) order.value.prodotti.splice(orderIndex,1)
    else order.value.prodotti.push(menuItem)
}

const selectedItems=computed(()=>
    getOrderItemsFromCategory(props.menuItems,props.category,order.value)
)

const categoryTotal=computed(()=>
    getCategoryTotal(selectedItems.value,props.category)??0
)
</script>

<style scoped lang="sass">
.category-item
    width: calc(25% - 24px)
    margin: 10px
    border: solid 2px $primary-color
    border-radius: 8px
    &:hover
        border-color: $primary-color-dark
    &.collapsed
        height: 40px
        .menu-item
            display: none
    .label-container
        display: flex
        border-top-right-radius: 4px
        border-top-left-radius: 4px
        background-color: $primary-color
        cursor: pointer
        color: white
        &:hover
            background-color: $primary-color-dark
        .label 
            padding: 6px
        .counter-container
            display: flex
            padding: 6px
            margin-left: auto
            margin-right: 6px
    .menu-items-container
        &.inactive .menu-item
            opacity: 0.5
            pointer-events: none
        .menu-item
            cursor: pointer
            padding: 2px 6px
            display: flex
            .price
                width: 42px
                text-align: right
                margin-left: auto
            &.selected
                color: $primary-color
                opacity: 1
                pointer-events: auto
    @media (max-width: $breakpoint-tablet)
        width: calc(33% - 24px)
    @media (max-width: $breakpoint-mobile)
        width: calc(50% - 24px)
</style>