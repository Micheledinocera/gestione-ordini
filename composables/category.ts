import { addDoc, deleteDoc, setDoc, updateDoc, collection, doc } from "firebase/firestore"

export interface Category{
    id?:string,
    value:string,
    order:number,
    min?:number,
    max?:number,
    extraPrice?:number,
    limitPrice?:number
}

export const CATEGORIES_TABLE_NAME="Categories"
export const CATEGORIES_URL=FIRESTORE_DOCUMENTS_URL+CATEGORIES_TABLE_NAME

export const useCategories = () => {
    const db=useFirestore();
    const collectionRef=collection(db,CATEGORIES_TABLE_NAME);
    const categoriesCollection = useCollection<Category>(collectionRef);

    const addCategory=(category:Category)=>{
        addDoc(collectionRef,category)
    }

    const setCategory=(category:Category,categoryId:string)=>{
        const docRef=doc(db,CATEGORIES_TABLE_NAME,categoryId)
        setDoc(docRef,category)
    }

    const removeCategory=(categoryId:string)=>{
        const docRef=doc(db,CATEGORIES_TABLE_NAME,categoryId)
        deleteDoc(docRef)
    }

    const updateCategory=(categoryId:string,itemToAdd:Record<string,any>)=>{
        const docRef=doc(db,CATEGORIES_TABLE_NAME,categoryId)
        updateDoc(docRef,itemToAdd)
    }

    return categoriesCollection
}