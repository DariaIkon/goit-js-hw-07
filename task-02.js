const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


// const ingredient = Object.values(ingredients);
// console.log(ingredient);

const ulEl = document.querySelector('#ingredients');

ingredients.forEach((user) => {
    const liElem = document.createElement('li');
    liElem.classList.add('menu-item');
    liElem.textContent = user;
    ulEl.append(liElem);

});
console.log(ulEl);



// const makeNavEl = options => {
//     return ingredients.map (option => {
//     const liElem = document.createElement('li');
//     liElem.classList.add('menu-item');
//     liElem.textContent = ingredient[4];
//     return liElem;
// });
// };

// const elements = makeNavEl(ulEl);
// ulEl.append(...elements);




