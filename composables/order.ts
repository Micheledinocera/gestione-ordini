import { collection, doc, getDoc, DocumentReference, setDoc, Firestore } from "firebase/firestore";

export interface ServerOrder{
    id?:string,
    prodotti:Record<string,DocumentReference[]>
}

export interface Order{
    nome:string,
    prodotti:ServerMenuItem[]
}

export const fromOrderToServer=(db:Firestore,order:Order,oldOrder={} as ServerOrder)=>{
    const orderToAdd={
        prodotti:{...oldOrder.prodotti}
    } as ServerOrder
    orderToAdd.prodotti[order.nome]=order.prodotti.map(prodotto=>doc(db,MENU_ITEMS_TABLE_NAME,prodotto.id))
    return orderToAdd as ServerOrder
}

export const EMPTY_ORDER={nome:'',prodotti:[]};
export const EMPTY_SERVER_ORDER={prodotti:{}};
export const ORDERS_TABLE_NAME="Orders"
export const useOrder = ()=> useState<Order>('order',()=>structuredClone(EMPTY_ORDER))
export const useGlobalOrder = ()=> useState<ServerOrder>('globalOrder',()=>structuredClone(EMPTY_SERVER_ORDER))

export const useOrders = () => {
    const {serverMenuItemsCollection}= useMenuItems();
    const localOrder=useOrder();
    const showPanel=useShowPanel();
    const globalOrder=useGlobalOrder();
    const orderId=useOrderId();
    const db=useFirestore();
    const collectionRef=collection(db,ORDERS_TABLE_NAME);
    const ordersCollection = useCollection<ServerOrder>(collectionRef);

    const createOrder=()=>{
        const ordersLength=ordersCollection.value.length+"";
        const orderToAdd=fromOrderToServer(db,localOrder.value)
        const docRef=doc(db,ORDERS_TABLE_NAME,ordersLength);
        setDoc(docRef,orderToAdd);
        globalOrder.value=useDocument<ServerOrder>(docRef) as unknown as ServerOrder
        orderId.value=ordersLength;
    }

    const updateOrder=async ()=>{
        const docRef=doc(db,ORDERS_TABLE_NAME,orderId.value);
        const order=(await getDoc(docRef)).data() as ServerOrder;
        const orderToAdd=fromOrderToServer(db,localOrder.value,order);
        setDoc(doc(db,ORDERS_TABLE_NAME,orderId.value),orderToAdd);
    }

    const deleteOrder=async (name:string)=>{
        const docRef=doc(db,ORDERS_TABLE_NAME,orderId.value);
        const order=(await getDoc(docRef)).data() as ServerOrder;
        const orderToAdd=fromOrderToServer(db,localOrder.value,order);
        delete orderToAdd.prodotti[name]
        setDoc(doc(db,ORDERS_TABLE_NAME,orderId.value),orderToAdd);
    }

    const getGlobalOrder=()=>{
        const docRef=doc(db,ORDERS_TABLE_NAME,orderId.value)
        globalOrder.value=(useDocument<ServerOrder>(docRef)) as unknown as ServerOrder
    }

    const getItemFromId=(menuItem:DocumentReference)=>{
        return serverMenuItemsCollection.find(serverMenuItem=>serverMenuItem.ref==menuItem.id)?.data
    }

    const selectOrder=(user:string)=>{
        var prodotti=globalOrder.value?.prodotti[user].map(menuItem=>({id:menuItem.id,data:getItemFromId(menuItem)}))
        localOrder.value={
            nome:user,
            prodotti:prodotti as ServerMenuItem[]
        }
        showPanel.value=false;
    }

    const users=computed( ()=>Object.keys( globalOrder.value?globalOrder.value.prodotti:{}))
    const isEmptyOrder=computed(()=>globalOrder.value?Object.keys(globalOrder.value.prodotti).length==0:true)
    return {ordersCollection,updateOrder,createOrder,getGlobalOrder,deleteOrder,getItemFromId,selectOrder,isEmptyOrder,users}
}