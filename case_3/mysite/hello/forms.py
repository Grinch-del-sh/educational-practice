from django import forms
from .models import UserName

# Форма на основе нашей модели
class NameForm(forms.ModelForm):
    class Meta:
        model = UserName
        fields = ['name']
        widgets = {
            # Добавляем CSS-класс и плейсхолдер для красоты
            'name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Введите ваше имя'}),
        }