import { createCategories, createFurnitureList } from './render.js';

function init() {
  document.addEventListener('DOMContentLoaded', async () => {
    await createCategories()
    await createFurnitureList(1, 8)
  })
}

export { init };