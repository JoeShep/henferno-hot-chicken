function listOrders(orderList) {
  // show all the orders in the DOM
  let orderListArray = orderList.map( order => buildOrderComponent(order))
  let container = document.querySelector("#container")
  container.innerHTML = ""
  orderListArray.forEach( orderComponent => container.innerHTML += orderComponent)
}

function buildOrderComponent(orderObj) {
  return `
    <h3>Order #${orderObj.id}</h3>
    <p>${orderObj.user} ordered ${orderObj.heat_level.name} ${orderObj.menu_item.name}</p> `
}

export { listOrders, buildOrderComponent }
