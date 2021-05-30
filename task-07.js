// Напиши скрипт, который реагирует на изменение значения input#font-size-control 
// (событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста


const inputRangeEl = document.querySelector("#font-size-control");
const inputTextEl= document.querySelector("#text");

const handleInput = () => {
  inputTextEl.style.fontSize = `${inputRangeEl.value}px`;
};

inputRangeEl.addEventListener('input', handleInput);