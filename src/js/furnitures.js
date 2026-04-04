function renderFurnitures(furnitures) {
  return furnitures.map(furniture => renderFurniture(furniture)).join('');
}

// todo @2x.webp
function renderFurniture(furniture) {
  const colorListLi = renderColors(furniture)
  return `
    <li class="furnitures-item" data-id="${furniture._id}">
      <img class="furnitures-item__img" src="${furniture.images[0] ?? ''}" alt="${furniture.name}">
      <h3 class="furnitures-item__title">${furniture.name}</h3>
      <ul class="furnitures-item__color-list">${colorListLi}</ul>
      <p class="furnitures-item__price">${furniture.price} грн</p>
      <button class="furnitures-item__btn buttonWhite">Детальніше</button>
    </li>
  `
}

function renderColors(furniture) {
  return furniture.color.map(color => `<li class="furnitures-item__color" style="background-color: ${color}"></li>`).join('');
}

export { renderFurnitures, renderFurniture };