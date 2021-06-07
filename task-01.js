const itemsEl = document.querySelectorAll('.item');
console.log(`В списке ${itemsEl.length}`);

itemsEl.forEach((itemEl) => {
    const titleEl = itemEl.querySelector('h2').textContent;
    const itemLenghthEl = itemEl.querySelectorAll('li').length;
    console.log(`Категория: ${titleEl} Количевство элементов: ${itemLenghthEl}`);
    console.log(itemEl);
});