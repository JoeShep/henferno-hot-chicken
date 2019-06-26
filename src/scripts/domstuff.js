function makeMenuItemComponent(menuItem) {
  return `
    <li><img><label for="menu-item-${menuItem.id}"><input id="menu-item-${menuItem.id}" type="radio" name="menu-item" value=${menuItem.id}><h3>${menuItem.name}: ${menuItem.price}</h3></label></li>
  `
}

function listMenuItems(menuComponents) {
  menuComponents.forEach( component => {
    document.querySelector("#menu-list").innerHTML += component
  })
}

function makeHeatLevelComponent(heatObj) {
  return `
    <li><label for="heat-level-${heatObj.id}"><input id="heat-level-${heatObj.id}" type="radio" name="heat" value=${heatObj.id}><h3>${heatObj.name}</h3></label></li>
  `
}

function listHeatItems(heatComponents) {
  heatComponents.forEach( component => {
    document.querySelector("#heat-list").innerHTML += component
  })
}

function buildForm() {
  return `
    <ul id="menu-list"></ul>
    <ul id="heat-list"></ul>
    <input type="text" id="name-input" placeholder="your name">
    <button id="order-btn">Place Order</button>
  `
}

function addFormToDOM(form) {
  document.querySelector("#container").innerHTML = form
}

export {makeMenuItemComponent, listMenuItems, makeHeatLevelComponent, listHeatItems, buildForm, addFormToDOM}
