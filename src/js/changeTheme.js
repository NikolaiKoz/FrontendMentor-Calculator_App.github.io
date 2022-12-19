
const changeTheme = (ballClass) => {

    const body = document.getElementsByTagName('body')[0];
    const header = document.getElementsByTagName('header')[0];
    const ballBg = document.querySelector('.switchOptions__switch__backgorund');
    const display = document.querySelector('.displayContainer');
    const displayNumber = document.querySelector('.displayContainer__display');
    const keypad = document.querySelector('.keypadContainer');
    const keys = document.querySelectorAll('.key');

    switch (ballClass) {
        case 'circlePosition1':

            body.classList.remove('firstBgTheme');
            body.classList.add('secondBgTheme');

            header.classList.remove('textColorWhite');
            header.classList.add('textColorDarkGray');

            ballBg.classList.remove('toggleAndKeypad-bg-first-theme');
            ballBg.classList.add('toggleAndKeypad-bg-second-theme');

            display.classList.remove('screen-bg-first-theme');
            display.classList.add('screen-bg-second-theme');

            displayNumber.classList.remove('textColorWhite');
            displayNumber.classList.add('textColorDarkGray');

            keypad.classList.remove('toggleAndKeypad-bg-first-theme');
            keypad.classList.add('toggleAndKeypad-bg-second-theme');

            keys.forEach(key => {
                if (key.classList.contains('resetAndderKey-bg-first-theme')) {
                    key.classList.remove('resetAndderKey-bg-first-theme');
                    key.classList.remove('resetAndderKey-shadow-first-theme');
                    key.classList.add('resetAndderKey-bg-second-theme');
                    key.classList.add('resetAndderKey-shadow-second-theme');
                } else if (key.classList.contains('equalKey')) {
                    key.classList.remove('equalKey-bg-first-theme');
                    key.classList.remove('equalKey-shadow-first-theme');
                    key.classList.add('equalKey-bg-second-theme');
                    key.classList.add('equalKey-shadow-second-theme');
                } else if (key.classList.contains('key-bg-first-theme')) {
                    key.classList.remove('key-bg-first-theme');
                    key.classList.remove('key-shadow-first-theme');
                    key.classList.remove('textColorWhite');
                    key.classList.add('key-bg-second-theme');
                    key.classList.add('key-shadow-second-theme');
                    key.classList.add('textColorDarkGray');
                }
            });

            break;
        case 'circlePosition2':
            console.log('circlePosition2');
            break;
        case 'circlePosition3':
            console.log('circlePosition3');
            break;
    };

};
changeTheme();