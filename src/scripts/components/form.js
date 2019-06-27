import { addOrder } from "../api/order-manager.js"

function initializeFormListener() {
  let orderBtn = document.querySelector("#order-btn")
  // Attach event listener to the form element
  orderBtn.addEventListener("click", () => {
    // Grab the radio button input groups
    let heatBtns = document.getElementsByName("heat")
    let menuBtns = document.getElementsByName("menu-item")
    // get the value of the selected radio btns
    let selectedHeatLevelId = getRadioValue(heatBtns)
    let selectedMenuItemId = getRadioValue(menuBtns)

    let userName = document.querySelector("#name-input").value

    // POST form data to db (after making an object out fo the data)
    let newOrder = orderFactory(userName, selectedMenuItemId, selectedHeatLevelId)
    console.log("newOrder", newOrder );

    addOrder(newOrder)

  })
}

function makeFormComponent() {
  return `
    <ul id="menu-list"></ul>
    <ul id="heat-list"></ul>
    <input type="text" id="name-input" placeholder="your name">
    <button id="order-btn">Place Order</button>
  `
}

function renderForm(form) {
  document.querySelector("#container").innerHTML = form
}

// Loop through buttons to find the checked one
function getRadioValue(btnList) {
  let itemId = null
  for (let i = 0; i < btnList.length; i++) {
    if (btnList[i].checked) {
      itemId = parseInt(btnList[i].value)
    }
  }
  return itemId
}

function orderFactory(user, menuId, heatId) {
  return {
    menu_itemId: menuId,
    heat_levelId: heatId,
    user: user
  }
}

export { initializeFormListener, makeFormComponent, renderForm }
