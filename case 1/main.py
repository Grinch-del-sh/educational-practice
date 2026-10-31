# Импортируем необходимые модули
from digital_clock import print_digital_clock  # Импорт функции для отображения цифр
import calendar  # Для работы с календарём
from datetime import datetime  # Для работы с датами

def get_birth_date():
    """
    Функция для получения даты рождения от пользователя
    С валидацией корректности введённых данных
    """
    while True:
        try:
            # Получаем день, месяц и год от пользователя
            day = int(input("Введите день рождения (1-31): "))
            month = int(input("Введите месяц рождения (1-12): "))
            year = int(input("Введите год рождения: "))
            
            # Проверяем корректность даты через создание объекта datetime
            datetime(year, month, day)
            return day, month, year
        except ValueError:
            # Если дата некорректная, сообщаем об ошибке
            print("Некорректная дата. Попробуйте снова.")

def is_leap_year(year):
    """
    Функция проверки високосного года
    Алгоритм: год делится на 4 без остатка
    и либо не делится на 100, либо делится на 400
    """
    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

def calculate_age(day, month, year):
    """
    Функция расчёта возраста
    Учитывает, прошёл ли уже день рождения в текущем году
    """
    today = datetime.today()  # Текущая дата
    birth_date = datetime(year, month, day)  # Дата рождения
    
    # Базовый расчёт возраста
    age = today.year - birth_date.year
    
    # Корректировка, если день рождения ещё не наступил
    if (today.month, today.day) < (birth_date.month, birth_date.day):
        age -= 1
    
    return age

def get_weekday(day, month, year):
    """
    Функция определения дня недели
    Возвращает название дня недели на русском языке
    """
    # Список дней недели
    weekdays = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]
    
    # Получаем номер дня недели (0 - понедельник, 6 - воскресенье)
    weekday_number = calendar.weekday(year, month, day)
    
    return weekdays[weekday_number]

def main():
    """
    Основная функция программы
    """
    print("Программа для работы с датой")
    
    # Получаем дату рождения
    day, month, year = get_birth_date()
    
    print("\nРезультаты:")
    
    # Выводим день недели
    print(f"День недели: {get_weekday(day, month, year)}")
    
    # Проверяем високосный год
    print(f"Високосный год: {'Да' if is_leap_year(year) else 'Нет'}")
    
    # Выводим возраст
    print(f"Ваш возраст: {calculate_age(day, month, year)} лет")
    
    # Выводим дату в формате электронного табло
    print("\nДата в формате электронного табло:")
    print_digital_clock(day, month, year)

if __name__ == "__main__":
    # Запуск программы при прямом выполнении файла
    main()
