
const changeTheme = (ballClass) => {

    const body = document.getElementsByTagName('body')[0];
    const header = document.getElementsByTagName('header')[0];
    const ballBg = document.querySelector('.switchOptions__switch__backgorund');
    const ball = document.querySelector('.switchOptions__switch__backgorund__circle');
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

            ball.classList.remove('toggleAndEqual-first-theme');
            ball.classList.add('equalKey-bg-second-theme');

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

            body.classList.remove('secondBgTheme');
            body.classList.add('thirdBgTheme');

            header.classList.remove('textColorDarkGray');
            header.classList.add('textColorLightGray');

            ballBg.classList.remove('toggleAndKeypad-bg-second-theme');
            ballBg.classList.add('toggleAndKeypad-bg-third-theme');

            ball.classList.remove('toggleAndKeypad-bg-second-theme');
            ball.classList.add('equalKey-bg-third-theme');

            display.classList.remove('screen-bg-second-theme');
            display.classList.add('screen-bg-third-theme');

            displayNumber.classList.remove('textColorDarkGray');
            displayNumber.classList.add('textColorLightGray');

            keypad.classList.remove('toggleAndKeypad-bg-second-theme');
            keypad.classList.add('toggleAndKeypad-bg-third-theme');

            keys.forEach(key => {
                if (key.classList.contains('resetAndderKey-bg-second-theme')) {
                    key.classList.remove('resetAndderKey-bg-second-theme');
                    key.classList.remove('resetAndderKey-shadow-second-theme');
                    key.classList.add('resetAndderKey-bg-third-theme');
                    key.classList.add('resetAndderKey-shadow-third-theme');
                } else if (key.classList.contains('equalKey')) {
                    key.classList.remove('equalKey-bg-second-theme');
                    key.classList.remove('equalKey-shadow-second-theme');
                    key.classList.add('equalKey-bg-third-theme');
                    key.classList.add('equalKey-shadow-third-theme');
                } else if (key.classList.contains('key-bg-second-theme')) {
                    key.classList.remove('key-bg-second-theme');
                    key.classList.remove('key-shadow-second-theme');
                    key.classList.remove('textColorDarkGray');
                    key.classList.add('key-bg-third-theme');
                    key.classList.add('key-shadow-third-theme');
                    key.classList.add('textColorLightGray');
                }
            });
            break;
        case 'circlePosition3':

            body.classList.remove('thirdBgTheme');
            body.classList.add('firstBgTheme');

            header.classList.remove('textColorLightGray');
            header.classList.add('textColorWhite');

            ballBg.classList.remove('toggleAndKeypad-bg-third-theme');
            ballBg.classList.add('toggleAndKeypad-bg-first-theme');

            ball.classList.remove('equalKey-bg-third-theme');
            ball.classList.add('toggleAndEqual-first-theme');

            display.classList.remove('screen-bg-third-theme');
            display.classList.add('screen-bg-first-theme');

            displayNumber.classList.remove('textColorLightGray');
            displayNumber.classList.add('textColorWhite');

            keypad.classList.remove('toggleAndKeypad-bg-third-theme');
            keypad.classList.add('toggleAndKeypad-bg-first-theme');

            keys.forEach(key => {
                if (key.classList.contains('resetAndderKey-bg-third-theme')) {
                    key.classList.remove('resetAndderKey-bg-third-theme');
                    key.classList.remove('resetAndderKey-shadow-third-theme');
                    key.classList.add('resetAndderKey-bg-first-theme');
                    key.classList.add('resetAndderKey-shadow-first-theme');
                } else if (key.classList.contains('equalKey')) {
                    key.classList.remove('equalKey-bg-third-theme');
                    key.classList.remove('equalKey-shadow-third-theme');
                    key.classList.add('equalKey-bg-first-theme');
                    key.classList.add('equalKey-shadow-first-theme');
                } else if (key.classList.contains('key-bg-third-theme')) {
                    key.classList.remove('key-bg-third-theme');
                    key.classList.remove('key-shadow-third-theme');
                    key.classList.remove('textColorLightGray');
                    key.classList.add('key-bg-first-theme');
                    key.classList.add('key-shadow-first-theme');
                    key.classList.add('textColorWhite');
                }
            });

        break;
    };

};
changeTheme();