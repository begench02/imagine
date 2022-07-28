import styles from './Header.module.sass'
import Logo from '@images/black-logo.svg'
import Home from '@icons/home.svg'
import Chat from '@icons/chat.svg'
import Settings from '@icons/settings.svg'
import UserPic from '@images/userpic.svg'
import { Select } from '@components/select/Select'

const languages = ['Eng', 'Rus']

export const Header = () => {
    return (
        <div className={styles.main_block}>
            <Logo />
            <div className={styles.actions}>
                <div>
                    <Home />
                </div>
                <div className={styles.chat}>
                    <Chat />
                    <div className={styles.chat_bluedot}></div>
                </div>
                <div>
                    <Settings />
                </div>
                <div>
                    <UserPic />
                </div>
                <Select options={languages} />
            </div>
        </div>
    )
}
