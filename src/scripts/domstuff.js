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

export {makeMenuItemComponent, listMenuItems}
