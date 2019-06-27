// api methods
import { getMenuItems } from "./api/menu_item-manager.js"
import { getHeatLevelItems } from "./api/heat_level-manager.js"
// DOM component methods
import { makeMenuItemComponent, renderMenuItems } from "./components/menu_items.js"
import { makeHeatLevelComponent, renderHeatItems } from "./components/heat_level.js"
import { initializeFormListener, makeFormComponent, renderForm } from "./components/form.js"
// nav.js has no public interface ( no functions or vars to expose), so we just run it
import "./components/nav.js"

// On page load, add the menu items form to the DOM
renderForm(makeFormComponent())
initializeFormListener()

getMenuItems()
.then ( menuItems => {
  console.log(menuItems)
   // loop through menuIems and turn them into html components
  let componentArray = menuItems.map( (oneMenuItemObj) => makeMenuItemComponent(oneMenuItemObj))
  // add the menu item components to the DOM
  renderMenuItems(componentArray)
})

getHeatLevelItems()
.then( heatData => {
  let heatArray = heatData.map( (oneHeatObj) => makeHeatLevelComponent(oneHeatObj))
  renderHeatItems(heatArray)
})
