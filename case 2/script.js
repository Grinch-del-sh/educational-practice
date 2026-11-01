// Инициализация переменных
let count = 0;
const resultElement = document.getElementById('result');
const btnPlus = document.getElementById('btn-plus');
const btnMinus = document.getElementById('btn-minus');
const limitMessage = document.getElementById('limit-message');

// Функция обновления интерфейса
function updateUI() {
    // Обновяем текст
    resultElement.textContent = count;

      // Логика изменения цвета фона окна результата
    if (count > 0) {
        resultElement.style.backgroundColor = 'yellow';
        resultElement.style.color = 'black';
    } else if (count < 0) {
        resultElement.style.backgroundColor = 'green';
        resultElement.style.color = 'white';
    } else {
        resultElement.style.backgroundColor = 'red';
        resultElement.style.color = 'white';
    }

    // Логика блокировки кнопок и появления сообщения
    if (count >= 10) {
        btnPlus.disabled = true;
        limitMessage.classList.add('show');
    } else if (count <= -10) {
        btnMinus.disabled = true;
        limitMessage.classList.add('show');
    } else {
        btnPlus.disabled = false;
        btnMinus.disabled = false;
        limitMessage.classList.remove('show');
    }
}

// Обработчик для кнопки "плюс"
btnPlus.addEventListener('click', () => {
    if (count < 10) {
        count++;
        updateUI();
    }
});

// Обработчик для кнопки "минус"
btnMinus.addEventListener('click', () => {
    if (count > -10) {
        count--;
        updateUI();
    }
});

// Инициализация начального состояния (0 - красный)
updateUI();
