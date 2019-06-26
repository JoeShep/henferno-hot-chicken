import { getMenuItems } from "./api.js"
import { makeMenuItemComponent, listMenuItems } from "./domstuff.js"

console.log("This is main")
getMenuItems()
.then ( menuItems => {
  console.log(menuItems)
   // loop through menuIems and turn them into html components
  let componentArray = menuItems.map( (oneMenuItemObj) => makeMenuItemComponent(oneMenuItemObj))
  //  // add the menu item components to the DOM
  listMenuItems(componentArray)
})
