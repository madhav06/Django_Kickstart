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
    const response = await fetch('http://localhost:8000/pizza/');
    const pizzas = await response.json();
    const paths = pizzas.map(pizza => ({
        params: {slug: `${pizza.slug}`}
    }));

    return {
        paths,
        fallback: false,
    }
    
}

export const getStaticProps = async ({params}) => {
    const response = await fetch('http://localhost:8000/pizza/');
    const pizzas = await response.json();
    const pizza = pizzas.filter(pizza => pizza.slug.includes(params.slug));
    const otherPizzas = pizzas.filter(pizza => pizza.slug !== params.slug);

    return {
        props: {
            pizza: pizza[0],
            otherPizzas: otherPizzas.sort( () => Math.random() - Math.random()).slice(0,3)
        }
    }
}