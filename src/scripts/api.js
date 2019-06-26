import { makeMenuItemComponent, listMenuItems } from "./domstuff.js"


fetch("http://localhost:8088/menu_items")
.then( menuData => menuData.json() )
.then( menuItems => {
  // loop through menuIems and turn them into html components
  let componentArray = menuItems.map( (oneMenuItemObj) => makeMenuItemComponent(oneMenuItemObj))
  console.log(componentArray)
  // add the menu item components to the DOM
  listMenuItems(componentArray)
})
