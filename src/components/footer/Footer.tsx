import { FooterInfo, FooterNavigation, FooterContacts } from './components'
import styles from './Footer.module.sass'

export const Footer = () => {
    return (
        <div className={styles.main_block}>
            <FooterInfo />
            <FooterNavigation />
            <FooterContacts />
        </div>
    )
}
