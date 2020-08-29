import sqlite3

# connected to the sqlite3
db = sqlite3.connect('Registration')
# created cursor from dbms
rs = db.cursor()

# # created table name, register and password
rs.execute('''create table Register(name varchar(50), email varchar(100), phone varchar(30), passwd varchar(15))''')
# # #
db.commit()

#Add data in table
rs.execute(''' insert into Register values('Ganesh Ponnagatti', '@gmail', '9598003004', '%Gan%81')''')
db.commit()

rs.execute('select * from Register')
for i in rs:
    print(i)