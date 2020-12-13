const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = calculator.querySelector('.calculator__display');

keys.addEventListener('click', e => {
    if(!e.target.closest('button')) return;

    const key = e.target;
    const keyValue = key.textContent;
    const displayValue = display.textContent;
    const type = key.dataset.type;

    // is this a umber key?
    if(type === 'number') {
        if(displayValue === '0') {
            display.textContent = keyValue;
        } else {
            display.textContent = displayValue + keyValue;
        }
    }

    // is this a opereter key?
    if(type === 'operator') {
        console.log(key);

        calculator.dataset.previousKeyType = 'operator';
    }
});