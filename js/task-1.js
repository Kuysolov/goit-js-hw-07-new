const categoriesRef = document.querySelector('#categories');

console.log(`В списке ${categoriesRef.children.length} категории.`);

const itemRef = document.querySelectorAll('.item');

itemRef.forEach(item => {
  console.log(`Категория: ${item.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${item.lastElementChild.children.length}`);
});
