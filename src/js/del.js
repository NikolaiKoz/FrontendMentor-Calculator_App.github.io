const del = (key) => {
    const display = document.querySelector('.displayContainer__display');

    key.addEventListener('click', () => {
        let displayValue = display.textContent;
        let displayValueLength = displayValue.length;
        let newDisplayValue = displayValue.slice(0, displayValueLength - 1);

        if (displayValueLength === 1) {
            display.textContent = "0";
        } else {
            display.textContent = newDisplayValue;
        }
    });
};