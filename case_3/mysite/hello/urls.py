from django.urls import path
from . import views

urlpatterns = [
    # Главная страница нашего приложения
    path('', views.index, name ='index')
]