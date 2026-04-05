import refs from './refs.js';
import { getFurnituresList } from './baseUrl.js';

const PER_PAGE = 8;
let currentPage = 1;
let categorySearch = 'all';

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

async function loadFurnitures(page = 1, limit = PER_PAGE, category = null) {
  hideLoadMore()
  categorySearch = category;
  const furnitureResponse = await getFurnituresList(page, limit, category)
  const hasMore = currentPage * PER_PAGE < furnitureResponse.total;
  if (hasMore) {
    showLoadMore()
  }
  return furnitureResponse;
}

refs.loadMore.addEventListener('click', async () => {
  try {
    currentPage = currentPage + 1;

    const furnitureResponse = await loadFurnitures(currentPage, PER_PAGE, categorySearch)
    if (furnitureResponse.furnitures.length) {
      const markup = renderFurnitures(furnitureResponse.furnitures);
      refs.furnitureList.insertAdjacentHTML('beforeend', markup)
    }
  } catch {

  }
})

function hideLoadMore() {
  refs.loadMore.style.display = 'none'
}

function showLoadMore() {
  refs.loadMore.style.display = 'block'
}

export { renderFurnitures, renderFurniture, loadFurnitures, PER_PAGE };