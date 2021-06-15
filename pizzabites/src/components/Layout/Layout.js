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

            <footer className={styles.footer}></footer>
            
        </div>
    )
}