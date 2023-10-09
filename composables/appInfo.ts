import { doc } from "firebase/firestore"

export interface Config {
    primary_color?:string,
    primary_color_dark?:string,
}

export interface AppInfo {
    versione: Record<'major'|'minor'|'revision',string>,
    appName:string,
    config:Config
}

export const APP_INFO_TABLE_NAME="AppInfo"
export const APP_INFO_URL=FIRESTORE_DOCUMENTS_URL+APP_INFO_TABLE_NAME+"/1"

export const useAppInfo = () =>{
    const db=useFirestore();
    const docRef=doc(db,APP_INFO_TABLE_NAME,'1');
    return useDocument<AppInfo>(docRef)
}