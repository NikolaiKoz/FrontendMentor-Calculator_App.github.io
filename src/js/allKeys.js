const allKeys = () => {
    const keys = document.querySelectorAll('.key');

    keys.forEach(key => {
        let keyValue = key.childNodes[0].nodeValue;

        if (keyValue === "reset") {
            reset(key);
        }else if (keyValue === "del") {
            // console.log('enter');
        }else if (keyValue === "=") {
            // console.log('=');
        } else {
            // console.log(keyValue);
        }

    });



};
allKeys();