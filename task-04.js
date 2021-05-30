// Счетчик состоит из спана и кнопок, которые должны увеличивать
// и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


let counterValue = 0;


const increment = () => {
  counterValue += 1;

 document.querySelector('#value').textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  document.querySelector('#value').textContent = counterValue;
};

const incrementBtn = document.querySelector('[data-action="increment"]');

const decrementBtn = document.querySelector('[data-action="decrement"]');


incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
