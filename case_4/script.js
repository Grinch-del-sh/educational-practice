// Создаем объект, который хранит функции для математических операций
// Ключ (sum, diff и т.д.) - это имя операции, значение - стрелочная функция, принимающая 2 числа
const operations = {
    sum: (a, b) => a + b, // Сумма: складывает a и b
    diff: (a, b) => a - b, // Разность: вычитает b из a
    mult: (a, b) => a * b, // Произведение: умножает a на b
    div: (a, b) => a / b   // Деление: делит a на b
};

// Главная функция, которая вызывается при клике на кнопки
function calculate(operationType) {
    // Получаем значения из полей ввода по их id и удаляем лишние пробелы (.trim())
    const input1 = document.getElementById('num1').value.trim();
    const input2 = document.getElementById('num2').value.trim();
    
    // Получаем DOM-элементы, куда будем выводить результат
    const resultValue = document.getElementById('result-value'); // Место для цифры
    const resultText = document.getElementById('result-text');   // Место для слова "Результат"

    // Перед новым вычислением убираем класс ошибки (если он был с прошлого раза)
    resultValue.classList.remove('error');

    // Проверка: если хотя бы одно поле пустое
    if (input1 === '' || input2 === '') {
        resultText.textContent = 'Ошибка'; // Меняем заголовок
        resultValue.textContent = 'Заполните оба поля!'; // Пишем текст ошибки
        resultValue.classList.add('error'); // Добавляем класс, чтобы текст стал красным
        return; // Прерываем выполнение функции, дальше не идем
    }

    // Преобразуем введенные строки в числа с плавающей точкой (чтобы работали дроби)
    const num1 = Number(input1);
    const num2 = Number(input2);

    // Проверка: является ли введенное значение числом
    // isNaN() возвращает true, если это НЕ число (например, если ввели буквы)
    if (isNaN(num1) || isNaN(num2)) {
        resultText.textContent = 'Ошибка'; // Меняем заголовок
        resultValue.textContent = 'Введены не числа!'; // Пишем текст ошибки
        resultValue.classList.add('error'); // Красим в красный
        return; // Прерываем функцию
    }

    // Проверка: если выбрано деление и второе число равно нулю
    if (operationType === 'div' && num2 === 0) {
        resultText.textContent = 'Ошибка'; // Меняем заголовок
        resultValue.textContent = 'Деление на ноль невозможно!'; // Пишем текст ошибки
        resultValue.classList.add('error'); // Красим в красный
        return; // Прерываем функцию
    }

    // Если все проверки пройдены, выполняем вычисление.
    // Берем функцию из объекта operations по ключу (например, operations['sum']) и вызываем её с нашими числами
    const result = operations[operationType](num1, num2);

    // Выводим результат на экран
    resultText.textContent = 'Результат'; // Возвращаем заголовок
    resultValue.textContent = result; // Вставляем полученное число
}