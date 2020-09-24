const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsContainerRef = document.querySelector('#ingredients');

const makeElements = item => {
  return item.map(item => {
    const ingredientsItem = document.createElement('li');
    ingredientsItem.textContent = item;
    return ingredientsItem;
  });
};

const elements = makeElements(ingredients);
ingredientsContainerRef.append(...elements);
console.log(ingredientsContainerRef);
