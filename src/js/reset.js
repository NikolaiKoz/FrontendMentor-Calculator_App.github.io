const reset = (key) => {

    const display = document.querySelector('.displayContainer__display');

    key.addEventListener('click', () => {
        display.textContent = "";
    });

};