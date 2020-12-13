const keys = document.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');

keys.addEventListener('click', e => {
    if(!e.target.closest('button')) return;

    const key = e.target;
    const keyValue = key.textContent;
    const displayValue = display.textContent;

    display.textContent = keyValue;
});