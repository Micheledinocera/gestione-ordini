// si rompe useFirestore() qui?
// export const FIRESTORE_DOCUMENTS_URL="https://firestore.googleapis.com/v1/projects/"+ useFirestore().app.options.projectId+"/databases/(default)/documents/"

export const FIRESTORE_DOCUMENTS_URL="https://firestore.googleapis.com/v1/projects/test-34e36/databases/(default)/documents/";

export const getOrderItemsFromCategory=(menuItems:Record<string,ServerMenuItem[]>,category:(Category & {id:string}),order:Order)=>
  menuItems[category.id].filter(item=>order.prodotti.map(prodotto=>prodotto.id).includes(item.id)) as ServerMenuItem[]

export const getCategoryTotal=(selectedItems:ServerMenuItem[],category:(Category & {id:string}))=>{
  let valueToReturn=0 as number;
  valueToReturn=selectedItems.map(item=>item.data?.price??0).reduce((a, b) => (a??0)+(b??0), 0)??0
  let exceedLimit=selectedItems.filter(selectedItem=>!selectedItem.data.isGift).length-(category.limitPrice??0)
  if(category.limitPrice && exceedLimit>0)
    valueToReturn+= exceedLimit*(category.extraPrice??0)
  return valueToReturn
}

export const getOrderTotal=(allSelectedItems:Record<string, ServerMenuItem[]>,categories:(Category & {id:string})[],order:Order)=>{
  let valueToReturn=0 as number;
  categories.forEach(category => {
    valueToReturn+= getCategoryTotal(getOrderItemsFromCategory(allSelectedItems,category,order),category)
  });
  return valueToReturn
}

export const DOTS_OPTIONS= {
    "type": "square",
    "color": "#33b663",
    "gradient": {
      "type": "radial",
      "rotation": 0,
      "colorStops": [
        {
          "offset": 0,
          "color": "#33b663"
        },
        {
          "offset": 1,
          "color": "#1e8b49"
        }
      ]
    }
};
  
export const CORNERS_SQUARE_OPTIONS= {
    "type": "square",
    "color": "#1e8b49",
    "gradient": null
};
  
export const CORNERS_DOT_OPTIONS= {
    "type": "square",
    "gradient": {
      "type": "radial",
      "rotation": 0,
      "colorStops": [
        {
          "offset": 0,
          "color": "#69ca8c"
        },
        {
          "offset": 1,
          "color": "#21914c"
        }
      ]
    }
};