function getMenuItems() {
  return fetch("http://localhost:8088/menu_items")
  .then( menuData => menuData.json() )
}

function getHeatLevels() {
  return fetch("http://localhost:8088/heat_levels")
  .then( heatData => heatData.json() )
}

export {getMenuItems, getHeatLevels}
