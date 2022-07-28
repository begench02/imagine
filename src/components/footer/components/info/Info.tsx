import Logo from '@images/white-logo.svg'
import styles from './Info.module.sass'

export const FooterInfo = () => {
    return (
        <div className={styles.main_block}>
            <div className={styles.logo}>
                <Logo />
            </div>
            <div className={styles.info}>
                <p>Contact offer</p>
                <p>Card payment rules</p>
            </div>
        </div>
    )
}
