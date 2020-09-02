from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.Index, name='index'),
    path('register/', views.register, name='register'),
    path('contact/', views.contact, name='contact'),
    path('login/', views.login, name='login'),
    path('Reg_Done/', views.Reg_Done, name='Reg_Done'),
    path('menu/', views.menu, name='menu'),
    path('thank/', views.thank, name='thank'),
]
