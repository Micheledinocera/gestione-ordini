export enum ORDER_TYPES{
    newOrder="new-order",
    home="home",
    getOrder="get-order",
};

export const useOrderId= ()=>useState<string>('orderId',()=>'')
export const useShowPanel= ()=>useState<boolean>('showPanel',()=>false)
export const useOrderType= ()=>useState<ORDER_TYPES>('orderType',()=>ORDER_TYPES.home)