import { getMenuItems, getHeatLevels } from "./api.js"
import {
  makeMenuItemComponent,
  listMenuItems,
  listHeatItems,
  makeHeatLevelComponent,
  buildForm,
  addFormToDOM
} from "./domstuff.js"
import { initializeOrderListener } from "./form.js"

console.log("This is main")
addFormToDOM(buildForm())
initializeOrderListener()

getMenuItems()
.then ( menuItems => {
  console.log(menuItems)
   // loop through menuIems and turn them into html components
  let componentArray = menuItems.map( (oneMenuItemObj) => makeMenuItemComponent(oneMenuItemObj))
  //  // add the menu item components to the DOM
  listMenuItems(componentArray)
})

getHeatLevels()
.then( heatData => {
  console.log(heatData)
  let heatArray = heatData.map( (oneHeatObj) => makeHeatLevelComponent(oneHeatObj))
  listHeatItems(heatArray)
})
