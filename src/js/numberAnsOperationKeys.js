const numberAnsOperationKeys = (key) => {

    const display = document.querySelector('.displayContainer__display');

    key.addEventListener('click', () => {
        let keyValue = key.childNodes[0].nodeValue;
        display.textContent += keyValue;
    });


};