function makeHeatLevelComponent(heatObj) {
  return `
    <li><label for="heat-level-${heatObj.id}"><input id="heat-level-${heatObj.id}" type="radio" name="heat" value=${heatObj.id}><h3>${heatObj.name}</h3></label></li>
  `
}

function renderHeatItems(heatComponents) {
  heatComponents.forEach( component => {
    document.querySelector("#heat-list").innerHTML += component
  })
}

export { makeHeatLevelComponent, renderHeatItems }
