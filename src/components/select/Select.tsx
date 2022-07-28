import ArrowIcon from '@icons/navbar-arrow-left.svg'
import styles from './Select.module.sass'

export const Select = ({ options }: TProps) => (
    <div className={styles.select_block}>
        <select className={styles.select}>
            {options.map((option: string) => (
                <option>{option}</option>
            ))}
        </select>
        <div className={styles.arrow}>
            <ArrowIcon />
        </div>
    </div>
)

type TProps = {
    options: string[]
}
