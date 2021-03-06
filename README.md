## First React Django Basic App

The UI, Frontend is in **NextJS**:
![Frontend](https://github.com/madhav06/projectImages/blob/master/frontendpizzaapp1.png)

The Backend is in **Django**:
![Backend](https://github.com/madhav06/projectImages/blob/master/backendpizzaapp.png)

and **DjangoRESTFRAMEWORK**:
![RestFramework](https://github.com/madhav06/projectImages/blob/master/restframepizzaapp.png)

#### initial setup frontend
```
git clone react-django-kickstarter-app

cd react-django-kickstarter-app

npx create-next-app pizzabites --use-npm

ls

cd pizzabites
```
#### getting started
```
npm run dev
check at: localhost:3000
```
#### project structure

**pizzabites ---> src ----> pages, styles, components**
In styles/ add new File MyApp.module.css

In pages/ add new File about.js
```js
import React from 'react'

export default function about() {
    return (
        <div>
          About
        </div>
    )
}
```

then, In app.js add 
```js
import '../styles/global.css';
import Link from 'next/link';
import styles from '../styles/MyApp.module.css';

function MyApp({Component, pageProps}) {
    return(
        <div>
          <nav className={styles.navbar}> 
            <ul className={styles.navbarContactBox}> 
              <Link href="/">
                <a>
                  <div>
                    <img src="#" alt="brand" />
                    <p> PizzaBites </p>
                  </div>
                </a>
              </Link>
              <Link href="/"><a className={styles.navbarContact}><li> Home</li></a></Link>
              <Link href="/about"><a className={styles.navbarContact}><li> About</li></a></Link>
            </ul>
          </nav>
          <div className={styles.container}>
            <Component {...pageProps} />
          </div>
        </div>
    )
}

export default MyApp
```
**src/ --> styles/ -->MyApp.module.css** 
Add following lines

```css
.navbar {
    margin-top: 2rem;

}
.navbarContactBox {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #df2c06;
    height: 3rem;
    font-weight: 500;
    color: #f0f0f0;

}
.navbarContact {
    display: grid;
    grid-template-columns: 1fr 1fr;

}
.brandPizza {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #df2c06;
    border-radius: 50px;
    margin-right: 16px;
    font-size: 16px;
    padding: 5px;
}
.brandPizza img {
    padding-top: 10px;
    height: 42px;
    width: 42px;
}

@media only screen and (max-width: 600px) {
    .brandPizza {
        font-size: 12px;
        text-align: center;
        padding: 0;
    }

    .brandPizza img {
        height: 32px;
        width: 32px;
    }
}

```

**google fonts --> poppins -->**
add In src/ --> styles --> globals.css

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap');

body {
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

```

**flaticon website --> download pizza svg image. rename it pizza.svg**

**public/ --> assets/ --> images --> pizza.svg**
**public/ --> assets/ --> pizza.png 16px, rename it to fevicon.ico**
then edit in app.js
```js
<div>
    <img src="/assets/images/pizza.svg" alt="brand" />
    <p> PizzaBites </p>
</div>

```
**src/ --> components --> About/ --> About.js, About.module.css**

**components/ --> Layout/ -->Layout.js, Layout.module.css** 

__Layout.js__
```js
import React from 'react';
import Head from 'next/head';
import styles from './Layout.module.css';

export default function Layout({children}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Pizza Bites...</title>
                <link rel="icon" href="/fevicon.ico" />
            </Head>

            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>Made by Madhav Nandan</footer>
            
        </div>
    )
}

```

__Layout.module.css__
```css
.footer {
    display: flex;
    justify-content: center;
    background-color: coral;
    font-weight:300;
}
```
**Homepage**
add In src/ --> components/ --> Home/ --> Home.js, Home.module.css

__Home.js__

[Home Page](https://github.com/madhav06/react_django_kickstarter_app/blob/master/pizzabites/src/components/Home/Home.js)

__Home.module.css__

[Home Page Styling](https://github.com/madhav06/react_django_kickstarter_app/blob/master/pizzabites/src/components/Home/Home.module.css)
  
**Deployment**
The easiest way to deploy your Next.js app is to use the __Vercel Platform__ from the creators of __Next.js.__

Check out our __Next.js__ deployment __documentation__ for more details.

#### Backend

**Install Dependancies**
```js

virtualenv env

source env/bin/activate

pip --version

pip install django

brew install postgresql

pip install djangorestframework psycopg2-binary

pip freeze

django-admin startproject pizzabites_backend<project name>

```
**This repo is updated from time to time.**

#### Databases

__Download PgAdmin, Postgres__

**Create Database: Server --> Postgres --> Create db --> pizza_db**

**Create a seprate .env file to make credentials secure, put config there**

#### Create Models
[Edit Models code like this ](https://github.com/madhav06/react_django_kickstarter_app/blob/master/pizzabites_backend/pizza/models.py)

[Edit Admin code like this](https://github.com/madhav06/react_django_kickstarter_app/blob/master/pizzabites_backend/pizza/admin.py)

**Create superuser**
[Confidentials](https://github.com/madhav06/react_django_kickstarter_app/blob/master/pizzabites_backend/pizzabites_backend/credentials.py)





    
  



