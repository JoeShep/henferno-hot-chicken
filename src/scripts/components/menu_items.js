function makeMenuItemComponent(menuItem) {
  return `
    <li><img><label for="menu-item-${menuItem.id}"><input id="menu-item-${menuItem.id}" type="radio" name="menu-item" value=${menuItem.id}><h3>${menuItem.name}: ${menuItem.price}</h3></label></li>
  `
}

function renderMenuItems(menuComponents) {
  menuComponents.forEach( component => {
    document.querySelector("#menu-list").innerHTML += component
  })
}

export { makeMenuItemComponent, renderMenuItems }
