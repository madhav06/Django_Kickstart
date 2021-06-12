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

In app.js
```js
import '../styles/global.css'

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
              <Link href="/"><a className={styles.navbarContact}><li> Home</li></a></Link>
            </ul>
          </nav>
        </div>
    )
}

export default MyApp
```


