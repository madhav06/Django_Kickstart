from django.shortcuts import render
from django.http import HttpResponse
import sqlite3


# Create your views here.

def Index(request):
    return render(request, 'MainApp/index.html')

def register(request):
    return render(request, 'MainApp/register.html')

def login(request):
    return render(request, 'MainApp/login.html')

def Reg_Done(request):

    # connected to the sqlite3
    db = sqlite3.connect('Registration')
    # created cursor from database registration
    rs = db.cursor()

    # # created table name, register and password
    rs.execute('''create table Register(name varchar(50), email varchar(100), phone varchar(30) passwd varchar(15))''')
    db.commit()

    data = []

    # Add data in table
    rs.execute(''' insert into Register values('Naga Manoj', '@outlook',  '7873552129', 'Manoj$$Chestuna')''')
    db.commit()

    rs.execute('select * from Register')
    for i in rs:
        data.append(i)
        print(i)

    return render(request, 'MainApp/Reg_Done.html', {'data': data})







