const toggleBtn = () => {

const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () => {

const ball = document.querySelector('.switchOptions__switch__backgorund__circle');

let ballClass = "";

    if (ball.classList.contains('circlePosition1')) {
        ballClass = 'circlePosition1';
    } else if (ball.classList.contains('circlePosition2')) {
        ballClass = 'circlePosition2';
    } else if (ball.classList.contains('circlePosition3')) {
        ballClass = 'circlePosition3';
    }

    switch (ballClass) {
        case 'circlePosition1':
            ball.classList.remove('circlePosition1');
            ball.classList.add('circlePosition2');
            break;
        case 'circlePosition2':
            ball.classList.remove('circlePosition2');
            ball.classList.add('circlePosition3');
            break;
        case 'circlePosition3':
            ball.classList.remove('circlePosition3');
            ball.classList.add('circlePosition1');
            break;
    };

});


};
toggleBtn();