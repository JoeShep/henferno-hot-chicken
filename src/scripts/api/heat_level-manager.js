import { getData } from "./api-manager.js"

function getHeatLevelItems() {
  return getData("heat_levels")
}

// In this module you would also add functions for posting, editing, and deleting heat level items, as needed

export { getHeatLevelItems }
