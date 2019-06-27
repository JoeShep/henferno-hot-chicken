import { getAllOrders } from "../api/order-manager.js"
import { getMenuItems } from "../api/menu_item-manager.js"
import { getHeatLevelItems } from "../api/heat_level-manager.js"
import { renderForm, makeFormComponent } from "./form.js"
import { makeMenuItemComponent, renderMenuItems } from "./menu_items.js"
import { makeHeatLevelComponent, renderHeatItems } from "./heat_level.js"
import { listOrders } from "./order.js"
import { initializeFormListener } from "./form.js"

// Add event listeners for the nav btns
document.querySelector("#order-form-btn").addEventListener("click", () => {
  renderForm(makeFormComponent())
  initializeFormListener()
  getMenuItems()
  .then ( menuItems => {
    console.log(menuItems)
    // loop through menuIems and turn them into html components
    let componentArray = menuItems.map( (oneMenuItemObj) => makeMenuItemComponent(oneMenuItemObj))
    //  // add the menu item components to the DOM
    renderMenuItems(componentArray)
  })

  getHeatLevelItems()
  .then( heatData => {
    console.log(heatData)
    let heatArray = heatData.map( (oneHeatObj) => makeHeatLevelComponent(oneHeatObj))
    renderHeatItems(heatArray)
  })
})

document.querySelector("#order-list-btn").addEventListener("click", () => {
  getAllOrders()
  .then( orders => {
    console.log("orders?", orders );

    listOrders(orders)
  })
})
