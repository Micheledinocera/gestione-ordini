import { Category } from './category';
import { query, collection, doc, where, getDocs, DocumentData, DocumentReference } from "firebase/firestore"

export interface MenuItem{
    category:Category & {id:string},
    label:string,
    isGift?:boolean,
    price?:number
}

export interface ServerMenuItem{
    id:string,
    data:MenuItem
}

export const MENU_ITEMS_TABLE_NAME="MenuItems"

export const useMenuItems = () => {
    const db=useFirestore();
    const collectionRef=collection(db,MENU_ITEMS_TABLE_NAME);
    const menuItemsCollection = useCollection<MenuItem>(collectionRef);
    const serverMenuItemsCollection=menuItemsCollection.value.map(menuItem=>({ref:menuItem.id,data:menuItem}))

    const getMenuItemsFromCategory= async (category:Category & {id:string}) => {
        const categoryRef=doc(db,CATEGORIES_TABLE_NAME,category.id)
        const querySnap = await getDocs(query(collection(db, MENU_ITEMS_TABLE_NAME), where('category','==',categoryRef)))
        // const querySnap = await useCollection(query(collection(db, MENU_ITEMS_TABLE_NAME), where('category','==',categoryRef)))
        let menuItems=[] as ServerMenuItem[]
        querySnap.forEach((doc) => {
            menuItems.push({id:doc.id,data:doc.data() as MenuItem})
        })
        return menuItems as ServerMenuItem[]
    }

    return {serverMenuItemsCollection,getMenuItemsFromCategory}
}