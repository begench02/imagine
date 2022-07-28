import styles from './SearchItem.module.sass'

export const SearchItem = ({ text }: TProps) => {
    return (
        <div className={styles.main_block}>
            <p>
                <span className={styles.cross}>&times;</span>
                <span className={styles.text}>{text}</span>
            </p>
        </div>
    )
}

type TProps = {
    text: string
}
