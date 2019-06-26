import { addOrder } from "./api.js"

function initializeOrderListener() {
  let orderBtn = document.querySelector("#order-btn")
  // Attach event listener to the form element
  orderBtn.addEventListener("click", () => {
    console.log("order clicked")

    // Grab values from the form inputs
    let userName = document.querySelector("#name-input").value
    let selectedMenuItemId = null
    let selectedHeatLevelId = null

    let menuBtns = document.getElementsByName("menu-item")
    console.log(menuBtns)
    // Loop through buttons to find the checked one
    for (let i = 0; i < menuBtns.length; i++) {
      if (menuBtns[i].checked) {
        console.log(menuBtns[i].value)
        selectedMenuItemId = parseInt(menuBtns[i].value)
      }
    }

    let heatBtns = document.getElementsByName("heat")
    console.log(heatBtns)
    // Loop through buttons to find the checked one
    for (let i = 0; i < heatBtns.length; i++) {
      if (heatBtns[i].checked) {
        console.log(heatBtns[i].value)
        selectedHeatLevelId = parseInt(heatBtns[i].value)
      }
    }

    // POST form data to db (after making an object out fo the data)
    let newOrder = orderFactory(userName, selectedMenuItemId, selectedHeatLevelId)
    addOrder(newOrder)

  })
}

function orderFactory(user, menuId, heatId) {
  return {
    menu_item_id: menuId,
    heat_level_id: heatId,
    user: user
  }
}

export {initializeOrderListener}
