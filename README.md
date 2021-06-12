## First React Django Basic App

#### initial setup
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
}
```

