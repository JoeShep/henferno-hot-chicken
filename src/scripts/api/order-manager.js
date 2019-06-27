import {getData, postData} from "./api-manager.js"

function addOrder(orderObj) {
  return postData("orders", orderObj)
}

function getAllOrders() {
  return getData("orders", "_expand=menu_item&_expand=heat_level")
}

// In this module you would also add functions for editing and deleting orders, as needed

export {getAllOrders, addOrder}
