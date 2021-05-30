const itemEl = document.querySelectorAll('.item');
console.log(`В списке ${itemEl.length}`);

const newArray = [...itemEl]
    .forEach.call(itemEl, (elem) => {
        const titleEl = elem.querySelector('h2').textContent;
        const itemLenghthEl = elem.querySelectorAll('li').length;
        console.log(`Категория: ${titleEl} Количевство элементов: ${itemLenghthEl}`);
    });