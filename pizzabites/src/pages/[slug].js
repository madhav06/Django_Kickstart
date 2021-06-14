import React from  'react'
import styles from '../styles/Pizza.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function Pizza(pizza, otherPizzas){
    return (
        <div className={styles.container}>
        <Head>
            <title>{pizza.name}</title>
        </Head>
        <div className={styles.pizzaWrapperLeft}>
            <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage} />
        </div>

        <div className={styles.pizzaWrapperRight}>
            <div className={styles.pizzaInfo}>
                <p className={styles.pizzaTitle}>{pizza.name}</p>
                <p className={styles.pizzaDescription}>{pizza.description}</p>
                <p className={styles.pizzaPrice}>₹{pizza.price}</p>
                <p className={styles.pizzaToppings}>{pizza.toppings.map(topping => topping).join(', ')}</p>
            </div>

            <div className={styles.otherPizzasWrapper}>
                {otherPizzas.map(otherpizza => {
                    return(
                        <div className={styles.otherPizzas} key={otherpizza.id}>
                            <Link href={"/" + otherpizza.slug}>
                              <a>
                                  <img src={otherpizza.image} alt={otherpizza.name} />
                                  <p>{otherpizza.name}</p>
                              </a>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
    )
}

export const getStaticPaths = async () => {
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
            description: 'Onion, grilled mushroom, corn, tomato, jalapeno and extra cheese',
            slug: 'veg-extravaganza',
            toppings: ['Onions', 'Pepperoni', 'Extra cheese', 'Sausage', 'Mushrooms', 'Black olives'],
            image: 'https://images.dominos.co.in/new_veg_extravaganza.jpg',
            price: 395
        },
        {
            id: '4',
            name: 'Cheese n Corn',
            description: 'Sweet and Juicy Golden corn and 100% real mozzarella cheese',
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
    const paths = pizzas.map(pizza => ({
        params: {slug: `${pizza.slug}`}
    }));

    return {
        paths,
        fallback: false,
    }
    
}

export const getStaticProps = async ({params}) => {
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
            description: 'Onion, grilled mushroom, corn, tomato, jalapeno and extra cheese',
            slug: 'veg-extravaganza',
            toppings: ['Onions', 'Pepperoni', 'Extra cheese', 'Sausage', 'Mushrooms', 'Black olives'],
            image: 'https://images.dominos.co.in/new_veg_extravaganza.jpg',
            price: 395
        },
        {
            id: '4',
            name: 'Cheese n Corn',
            description: 'Sweet and Juicy Golden corn and 100% real mozzarella cheese',
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

    const pizza = pizzas.filter(pizza => pizza.slug.includes(params.slug));
    const otherPizzas = pizzas.filter(pizza => pizza.slug !== params.slug);

    return {
        props: {
            pizza: pizza[0],
            otherPizzas: otherPizzas.sort( () => Math.random() - Math.random()).slice(0,3)
        }
    }
}