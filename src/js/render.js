import refs from './refs.js';
import { getFurnituresCategories, getFurnituresList } from './baseUrl.js';
import { constructCategoriesWithImages, renderCategories } from './categories.js';
import { renderFurnitures } from './furnitures.js';

async function createCategories() {
  refs.categories.innerHTML = '';
  const categories = await getFurnituresCategories()
  categories.unshift({'_id': 'all', name: 'Всі товари'})
  const categoriesWithImages = constructCategoriesWithImages(categories)
  refs.categories.insertAdjacentHTML('beforeend', renderCategories(categoriesWithImages))
}

async function createFurnitureList(page, limit) {
  refs.furnitureList.innerHTML = '';
  const furnitureResponse = await getFurnituresList(page, limit)
  const furnituresMarkup = renderFurnitures(furnitureResponse.furnitures)
  refs.furnitureList.innerHTML = furnituresMarkup;
}



export { createCategories, createFurnitureList };