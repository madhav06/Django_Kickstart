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
    font-weight:300;
}
```
**Homepage**
add In src/ --> components/ --> Home/ --> Home.js, Home.module.css

__Home.js__
```js
import React, { useState } from 'react';
import styles from './Home.module.css';
import Link from 'next/link';

export default function Home() {

    const pizzas = [
        {
            id: '1',
            name: 'Mexican Green Wave',
            description: 'Mexican herbs sprinkled on onion, capsicum, tomato and jalapeno',
            slug: 'mexican-green-wave',
            toppings: ['Onions', 'Pepperoni', 'Extra cheese', 'Sausage', 'Mushrooms', 'Black olives'],
            image: 'https://images.dominos.co.in/new_peppy_paneer.jpg',
            price: 395
        },

        {
            id: '2',
            name: 'Veggie Paradise',
            description: 'The awsome foursome! Golden corn, black olives, capsicum, red paprika',
            slug: 'veggie-paradise',
            toppings: ['Onions', 'Pepperoni', 'Extra cheese', 'Sausage', 'Mushrooms', 'Black olives'],
            image: 'https://images.dominos.co.in/new_veggie_paradise.jpg',
            price: 395
        },

        {
            id: '3',
            name: 'Veg Extravaganza',
            description: 'Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno and extra cheese',
            slug: 'veg-extravaganza',
            toppings: ['Onions', 'Pepperoni', 'Extra cheese', 'Sausage', 'Mushrooms', 'Black olives'],
            image: 'https://images.dominos.co.in/new_veg_extravaganza.jpg',
            price: 395
        },
        {
            id: '4',
            name: 'Cheese n Corn',
            description: 'Sweet and Juicy Golden corn and 100% real mozzarella cheese in a delectable combination',
            slug: 'cheese-n-corn',
            toppings: ['Onions', 'Pepperoni', 'Extra cheese', 'Sausage', 'Mushrooms', 'Black olives'],
            image: 'https://images.dominos.co.in/new_cheese_n_corn.jpg',
            price: 305
        },
        {
            id: '5',
            name: 'Loded Veg Buddy Combo',
            description: 'Loded VG Pizza Mania + Pepsi PET',
            slug: 'loded-veg-buddy-combo',
            toppings: ['Onions', 'Pepperoni', 'Extra cheese', 'Black olives'],
            image: 'https://images.dominos.co.in/COM08.jpg',
            price: 181
        },
        {
            id: '6',
            name: 'Pasta Pizza Specials',
            description: 'Regular Moroccan Pasta Pizza + Garlic Bread + Pepsi PET',
            slug: 'pasta-pizza-special',
            toppings: ['Onions', 'Pepperoni', 'Extra cheese', 'Black olives'],
            image: 'https://images.dominos.co.in/PASTAPIZZASPECIALS.jpg',
            price: 299
        },
        {
            id: '7',
            name: 'Cheesy Jalapeno Pasta Veg',
            description: 'Instant Fusilli Pasta, Cheesy Jalapeno, Sauce, Onion, Jalapeno, Parsley sprinkle',
            slug: 'cheesy-jalapeno-pasta-veg',
            toppings: ['Pepperoni', 'Extra cheese'],
            image: 'https://images.dominos.co.in/JalapenoVeg_N.jpg',
            price: 129
        },
        {
            id: '8',
            name: 'Tikka Masala pasta Veg',
            description: 'Instant Fusilli Pasta, Spicy Red dressing,  Onion, paneer tikka Parsley sprinkle',
            slug: 'tikka-masala-pasta-veg',
            toppings: ['Pepperoni', 'Extra cheese'],
            image: 'https://images.dominos.co.in/PaneerTikkaMasala_N.jpg',
            price: 129
        },
        {
            id: '9',
            name: 'Pasta Treat Specials',
            description: 'Veg Creamy Tomato Pasta + Veg Tikka Masala Pasta + Garlic Bread + Pepsi PET',
            slug: 'pasta-treat-specials',
            toppings: ['Pepperoni', 'Extra cheese'],
            image: 'https://images.dominos.co.in/PASTATREATSPECIALS.jpg',
            price: 379
        },

    ]
    const [keyword, setKeyword] = useState('');

    const filteredPizza = pizzas.filter(
        pizza =>
        pizza.name.toLowerCase().includes(keyword) || pizza.toppings.includes(keyword)
    )

    const onInputChange = (e) => {
        e.preventDefault();
        setKeyword(e.target.value.toLowerCase());
    }
    return (
        <div>
            
            <div className={styles.searchWrapper}>
                <input placeholder="Search for pizza..." className={styles.searchBar} onChange={onInputChange} />

            </div>
            <div className={styles.pizzaContainer}>
                {filteredPizza < 1 ? (
                    <div className={styles.nopeContainer}> There is no pizza or topping with that. </div>
                )
                :
                (
                    filteredPizza.map(pizza => {
                        return(
                            <div className={styles.pizzaItem} key={pizza.id}>
                                <Link href={`/${pizza.slug}` }>
                                    <a className={styles.pizzaImageBox}>
                                        <img src={pizza.image} alt={pizza.name} className={styles.pizzaItem} />
                                    </a>
                                </Link>
                                <div className={styles.pizzaText}>
                                    <p className={styles.pizzaHeader}>{pizza.name}</p>
                                    <p className={styles.pizzaToppings}>{pizza.toppings.map(topping => topping).join(', ')}</p>
                                    <p className={styles.pizzaPrice}> ₹ {pizza.price}</p>
                                </div>
                            </div>
                        )
                    })
                )}
                

            </div>
        </div>
    )
}

```


