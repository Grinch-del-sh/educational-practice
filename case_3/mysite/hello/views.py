from django.shortcuts import render, redirect
from .forms import NameForm
from .models import UserName

def index(request):
    greeting = None # Переменная для приветствия
    
    if request.method == 'POST':
        form = NameForm(request.POST)
        # Проверяем, что форма заполнена корректно
        if form.is_valid():
            # Сохраняем имя в базу данных
            user_name = form.save()
            # Формируем персональное приветствие
            greeting = f"Привет, {user_name.name}!"
            # Очищаем форму после отправки
            form = NameForm()
    else:
        # Если это GET-запрос, просто показываем пустую форму
        form = NameForm()
        
    # Передаём форму и приветствие в шаблон
    return render(request, 'index.html', {'form': form, 'greeting': greeting})