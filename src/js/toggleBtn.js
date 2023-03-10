/**
 * @type {Function}
 * @description: toggleBtn - It´s a function that contains the code to change the position of the ball and call the function "changeTheme", that changes the theme of the page.
 */
const toggleBtn = () => {

/**
 * @type {HTMLElement}
 * @description: toggleBtn - It´s a variable of type const that contains the element with the id "toggle-btn". This element has a click event that will be used to change the position of the ball and the theme of the page.
 */
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () => {

/**
 * @type {HTMLElement}
 * @description: ball - It´s a variable of type const that contains the element with the class "switchOptions__switch__backgorund__circle".
 */
const ball = document.querySelector('.switchOptions__switch__backgorund__circle');

/**
 * @type {CSSClass}
 * @description: ballClass - It´s a variable of type let. This variable will be assigned the class with the position of the ball, circlePosition1, circlePosition2 or circlePosition3. The data is obtained with an else-if structure.
 */
let ballClass = "";

    if (ball.classList.contains('circlePosition1')) {
        ballClass = 'circlePosition1';
    } else if (ball.classList.contains('circlePosition2')) {
        ballClass = 'circlePosition2';
    } else if (ball.classList.contains('circlePosition3')) {
        ballClass = 'circlePosition3';
    }


/**
 * @type {Switch}
 * @description: switch - It´s a switch structure that will be used to change the position of the ball, first remove the class with the current position and add the class with the new position.
 */
    switch (ballClass) {
        case 'circlePosition1':
            ball.classList.remove('circlePosition1');
            ball.classList.add('circlePosition2');
            changeTheme(ballClass);
            break;
        case 'circlePosition2':
            ball.classList.remove('circlePosition2');
            ball.classList.add('circlePosition3');
            changeTheme(ballClass);
            break;
        case 'circlePosition3':
            ball.classList.remove('circlePosition3');
            ball.classList.add('circlePosition1');
            changeTheme(ballClass);
            break;
    };

});

};
toggleBtn();