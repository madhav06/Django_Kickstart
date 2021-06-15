import React from 'react';
import Head from 'next/head';
import styles from './About.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About</title>
                <link rel="icon" href="/fevicon.ico" />
            </Head>
            
           
            <div>
            <h3 className={styles.aboutHeader}>Get In Touch</h3>
            <h4 className={styles.aboutText}>PizzaBites, No. 55, Lane 2, Sapphire Tower 2</h4>
            <h4 className={styles.aboutText}>Ashokpuram, Varanasi, Near Dafi, Narayanpura - 221011</h4>
            <p className={styles.paraText}> We Are PizzaBites | The Hope to Happinesss!!!</p>
            <p className={styles.paraText}>Follow Us on Social Media for fun stuff within inside World! </p>
            <p className={styles.paraText}> Make sure you follow us, Stay Tuned! </p>
            
            </div>
            
        </div>
        
    )
}