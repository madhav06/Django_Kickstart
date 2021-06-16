import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';


export default function home({pizzas}) {
    return (
        
        <Layout>
            <Home pizzas={pizzas} />
        </Layout>
        
    )
}

export const getStaticProps = async ({params}) => {
    const response = await fetch('http://localhost:8000/pizza/');
    const pizzas = await response.json();

    return {
        props: {
            pizzas,
        }
    }
}