import { getData } from "./api-manager.js"

function getMenuItems() {
  return getData("menu_items")
}

// In this module you would also add functions for posting, editing, and deleting menu items, as needed

export {getMenuItems}
