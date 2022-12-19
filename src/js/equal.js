const equal = (key) => {

    const display = document.querySelector('.displayContainer__display');

    key.addEventListener('click', () => {
        let displayValue = display.textContent;

        if (displayValue.includes('+')) {
            let add = displayValue.split('+');
            let result = parseFloat(add[0]) + parseFloat(add[1]);
            display.textContent = result;
        }

        if (displayValue.includes('-')) {
            let sub = displayValue.split('-');
            let result = parseFloat(sub[0]) - parseFloat(sub[1]);
            display.textContent = result;
        }

        if (displayValue.includes('x')) {
            let mul = displayValue.split('x');
            let result = parseFloat(mul[0]) * parseFloat(mul[1]);
            display.textContent = result;
        }

        if (displayValue.includes('/')) {
            let div = displayValue.split('/');
            let result = parseFloat(div[0]) / parseFloat(div[1]);
            display.textContent = result;
        }

    });

};
