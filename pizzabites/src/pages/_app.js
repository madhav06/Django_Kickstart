import '../styles/globals.css';
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
