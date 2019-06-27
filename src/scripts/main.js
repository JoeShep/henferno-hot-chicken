import { getData } from "./api.js"
import {
  makeMenuItemComponent,
  listMenuItems,
  listHeatItems,
  makeHeatLevelComponent,
  buildForm,
  addFormToDOM
} from "./domstuff.js"
import { initializeOrderListener } from "./form.js"
import "./order_list.js"

console.log("This is main")
addFormToDOM(buildForm())
initializeOrderListener()

getData("menu_items")
.then ( menuItems => {
  console.log(menuItems)
   // loop through menuIems and turn them into html components
  let componentArray = menuItems.map( (oneMenuItemObj) => makeMenuItemComponent(oneMenuItemObj))
  //  // add the menu item components to the DOM
  listMenuItems(componentArray)
})

getData("heat_levels")
.then( heatData => {
  console.log(heatData)
  let heatArray = heatData.map( (oneHeatObj) => makeHeatLevelComponent(oneHeatObj))
  listHeatItems(heatArray)
})

document.querySelector("#order-form-btn").addEventListener("click", () => {
  addFormToDOM(buildForm())
  initializeOrderListener()
  getData("menu_items")
  .then ( menuItems => {
    console.log(menuItems)
    // loop through menuIems and turn them into html components
    let componentArray = menuItems.map( (oneMenuItemObj) => makeMenuItemComponent(oneMenuItemObj))
    //  // add the menu item components to the DOM
    listMenuItems(componentArray)
  })

  getData("heat_levels")
  .then( heatData => {
    console.log(heatData)
    let heatArray = heatData.map( (oneHeatObj) => makeHeatLevelComponent(oneHeatObj))
    listHeatItems(heatArray)
  })
})
