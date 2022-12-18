const toggleBtn = () => {

const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () => {

const ball = document.querySelector('.switchOptions__switch__backgorund__circle');

    if (ball.classList.contains('circlePosition1')) {
        ball.classList.remove('circlePosition1');
        ball.classList.add('circlePosition2');
    }

    if (ball.classList.contains('circlePosition2')) {
        ball.classList.remove('circlePosition2');
        ball.classList.add('circlePosition3');
    }

    if (ball.classList.contains('circlePosition3')) {
        ball.classList.remove('circlePosition3');
        ball.classList.add('circlePosition1');
    }

});


};
toggleBtn();