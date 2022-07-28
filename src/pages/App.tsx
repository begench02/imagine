import { Header } from '@components/header/Header'
import { Footer } from '@components/footer/Footer'
import { Home } from './home/Home'
import styles from './App.module.sass'

export const App = () => {
    return (
        <>
            <div className={styles.main_block}>
                <Header />
                <Home />
            </div>
            <Footer />
        </>
    )
}
