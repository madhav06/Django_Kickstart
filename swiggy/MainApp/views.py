from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def Index(request):
    return render(request, 'MainApp/index.html')

def login(request):
    return render(request, 'MainApp/login.html')

def register(request):
    return render(request, 'MainApp/register.html')
