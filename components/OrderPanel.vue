<template>
    <div :class="['panel-overlay',{show:showPanel}]" @click="()=>showPanel=false">
        <div class="panel-container" @click.stop="">
            <div class="order-id"> Ordine n: {{ orderId }} - {{ orderTotal }}€ </div>
            <NuxtScrollbar v-if="showPanel">
                <div class="orders-container">
                    <div class="order-item" v-for="user in users" :key="'user_'+user">
                        <div class="user-container">
                            <div class="label"> {{ user }} - {{ getOrderTotal(menuItems,categories,orderFromUser(user)) }}€ </div>
                            <div class="icon edit" @click="()=>selectOrder(user)"></div>
                            <div class="icon delete" @click="()=>deleteOrder(user)"></div>
                        </div>
                        <div class="menu-item" v-for="category in Object.keys(menuItemsWithCategories[user])" :key="'menuItemPanel_'+category"> 
                            <div class="category"> {{menuItemsWithCategories[user][category][0]?.categoryLabel}} </div>
                            <div class="items"> <div class="item" v-for="categoryMenuItem in menuItemsWithCategories[user][category]"> {{categoryMenuItem?.data.label}}</div> </div>
                        </div>
                    </div>
                </div>
                <div class="generate-code">
                    <QRCodeVue3 
                        myclass="qrcode"
                        :value="shareLink"
                        :dotsOptions="DOTS_OPTIONS"
                        :cornersSquareOptions="CORNERS_SQUARE_OPTIONS"
                        :cornersDotOptions="CORNERS_DOT_OPTIONS"
                    />
                </div>
            </NuxtScrollbar>
        </div>
    </div>
</template>

<script setup lang="ts">
import QRCodeVue3 from 'qrcode-vue3'
const showPanel = useShowPanel();
const globalOrder =  useGlobalOrder();
const orderId = useOrderId();
const {deleteOrder,getItemFromId,selectOrder,users} = useOrders();
const {categoriesCollection:categories,menuItems,activeCategories}= await useCategories();

const shareLink=computed(()=> location.origin+location.pathname+"?code="+orderId.value)

const menuItemsWithCategories=computed(()=>{
    let valueToReturn={} as any;
    users.value.forEach(user=>{
        valueToReturn[user]={}
        activeCategories.value.forEach(category=>{
            var valueToAdd=getOrderItemsFromCategory(menuItems.value,category,orderFromUser(user));
            if(valueToAdd.length>0) {
                valueToReturn[user][category.id]=valueToAdd
                valueToReturn[user][category.id][0].categoryLabel=category.value
            }
        })
    })
    return valueToReturn
})

const orderFromUser=(user:string)=>{
    var allMenuItems=Object.values(menuItems.value).flat()
    var prodotti2=globalOrder.value?.prodotti[user].map(menuItem=>({id:menuItem.id,data:allMenuItems.find(item=>item.id==menuItem.id)})).map(item=>item.data)
    return {
        nome:user,
        prodotti:prodotti2 as ServerMenuItem[]
    }
}

const orderTotal=computed(()=>{
    let valueToReturn=0
    users.value.forEach(user=>{
        valueToReturn+=getOrderTotal(menuItems.value,categories.value,orderFromUser(user))
    })
    return valueToReturn
})

const getItemsFromCategory=(user:string,categoryId:string)=>{
    return globalOrder.value.prodotti[user].filter(prodotto=>getItemFromId(prodotto)?.category.id==categoryId).map(prodotto=>getItemFromId(prodotto))
}

</script>

<style scoped lang="sass">
$panel-width:300px
$animation-time:0.5s
.panel-overlay
    position: fixed
    top: 0
    left: 0vw
    width: 100vw
    height: 100vh
    animation: panel-leave $animation-time
    z-index: -1
    background-color: rgba(0,0,0,0)
    cursor: pointer
    transition: background-color $animation-time ease-in-out
    &.show
        background-color: rgba(0,0,0,0.25)
        animation: panel-enter $animation-time
        z-index: 1
        .panel-container
            left: calc(100vw - $panel-width)
    .panel-container
        position: absolute
        background-color: white
        width: $panel-width
        left: 100vw
        left: 100vw
        z-index: 1
        height: 100vh
        cursor: auto
        transition: left $animation-time ease-in-out
        .order-id
            padding: 4px 6px
        &:deep(.ps)
            height: 100%
            .orders-container
                .order-item
                    margin: 10px 6px
                    border-bottom: solid 2px $primary-color
                    .user-container
                        display: flex
                        .label
                            color: $primary-color-dark
                        .icon
                            width: 20px
                            height: 20px
                            cursor: pointer
                            margin: 0 10px
                            @include background-standard
                            &.edit
                                margin-left: auto
                                background-image: url("~/assets/imgs/edit.svg")
                            &.delete
                                background-image: url("~/assets/imgs/delete.svg")
                    .menu-item
                        margin: 6px 0
                        .category
                            background-color: $primary-color
                            padding: 6px
                            border-radius: 4px 4px 0 0
                            color: white
                        .items
                            .item
                                // color: $primary-color
            .generate-code
                margin-bottom: 40px
</style>