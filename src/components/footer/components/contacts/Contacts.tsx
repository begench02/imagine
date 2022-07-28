import FacebookIcon from '@icons/facebook.svg'
import InstagramIcon from '@icons/instagram.svg'
import WhatsAppIcon from '@icons/whatsApp.svg'
import styles from './Contacts.module.sass'

export const FooterContacts = () => {
    return (
        <div className={styles.main_block}>
            <div className={styles.contacts_block}>
                <div className={styles.contacts}>
                    <div>imagine.com</div>
                    <div>info@imagine.com</div>
                </div>
                <div className={styles.copyright}>
                    <span>&#169; Imagine 2021.</span> All rights Reserved
                </div>
            </div>
            <div className={styles.phone_and_media}>
                <div>
                    <p className={styles.phone}>+44 (0) 35 2953 2953</p>
                </div>
                <div className={styles.social_media}>
                    <div>
                        <FacebookIcon />
                    </div>
                    <div>
                        <InstagramIcon />
                    </div>
                    <div>
                        <WhatsAppIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
