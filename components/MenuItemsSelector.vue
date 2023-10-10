<template>
    <div class="menu-items-selector">
        <div class="label"> {{ orderType==ORDER_TYPES.newOrder?"Nuovo Ordine":("Ordine n: "+orderId) }} <span v-if="order.nome!==''"> - {{ orderTotal }}€</span> </div>
        <div class="user-input-container">
            <div class="label"> Ordine per: </div>
            <input type="text" placeholder="Aggiungi nome" v-model="order.nome">
        </div>
        <div class="users-container" v-if="users.length>0 && order.nome==''"> 
            <div class="label"> Oppure modifica ordine per: </div>
            <div class="user-items-container">
                <div class="user-item" v-for="user in users" :key="'header_user_'+user" @click="()=>selectOrder(user)"> {{ user }}</div>
            </div>
        </div>
        <div class="categories-container" v-if="order.nome!=''">
            <CategoryItem v-for="category in activeCategories" :key="'category_'+category.id" :category="category" :menuItems="menuItems"/>
        </div>
    </div>
</template>

<script setup lang="ts">
const order=useOrder();
const orderType=useOrderType();
const orderId=useOrderId();
const categories= useCategories();
const {getMenuItemsFromCategory}= useMenuItems();
const {selectOrder,users} = useOrders();
const menuItems=ref() as Ref<Record<string,ServerMenuItem[]>>

const getMenuItems= async (category:Ref<Category & {id:string}>)=> {
    const valueToReturn = await getMenuItemsFromCategory(category.value)
    menuItems.value={...menuItems.value,...{[category.value.id]:valueToReturn}}
}

categories.value.forEach((category)=>{
    getMenuItems(ref(category))
})

const activeCategories=computed(()=>{
    if(menuItems.value)
        return categories.value.filter(category=>menuItems.value[category?.id]?menuItems.value[category.id].length>0:false).sort((a,b)=>a.order-b.order)
    return categories.value
})

const orderTotal=computed(()=>
    getOrderTotal(menuItems.value,categories.value,order.value)
)
</script>

<style scoped lang="sass">
.menu-items-selector
    padding: 10px
    .user-input-container
        display: flex
        margin-top: 10px
        input
            margin-left: 10px
    .users-container
        margin-top: 10px
        display: flex
        @media (max-width: $breakpoint-tablet)
            display: block
        .user-items-container
            display: flex
            flex-wrap: wrap
            .user-item
                margin: 6px 20px
                background-color: green
                border-radius: 8px
                padding: 0px 8px
                color: white
                cursor: pointer
    .categories-container
        display: flex
        flex-wrap: wrap
</style>