from django.db import models

# Модель для хранения имён пользователей
class UserName(models.Model):
    # Поле для хранения имени (строка, максимум 100 символов)
    name = models.CharField(max_length=100)
    
    def __str__(self):
        # Отображение имени в админке
        return self.name