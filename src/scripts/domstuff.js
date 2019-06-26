function makeMenuItemComponent(menuItem) {
  return `
    <li><img><h3>${menuItem.name}: ${menuItem.price}</h3><button>order</button></li>
  `
}

function listMenuItems(menuComponents) {
  menuComponents.forEach( component => {
    document.querySelector("#menu-list").innerHTML += component
  })
}

function makeHeatLevelComponent(heatObj) {
  return `
    <li><input type="radio" name="heat"><h3>${heatObj.name}</h3></li>
  `
}

function listHeatItems(heatComponents) {
  heatComponents.forEach( component => {
    document.querySelector("#heat-list").innerHTML += component
  })
}

export {makeMenuItemComponent, listMenuItems, makeHeatLevelComponent, listHeatItems}
