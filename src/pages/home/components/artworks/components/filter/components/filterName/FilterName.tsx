import { useState } from 'react'
import classNames from 'classnames'
import ArrowIcon from '@icons/pagination-arrow.svg'
import styles from './FilterName.module.sass'

export const FilterName = () => {
    const [isNameOpen, setNameOpen] = useState<boolean>(false)

    return (
        <div className={styles.main_block}>
            <div onClick={() => setNameOpen(prev => !prev)} className={styles.title_block}>
                <div>Name</div>
                <div className={classNames(styles.title_arrow, isNameOpen ? styles.title_arrow_active : '')}>
                    <ArrowIcon />
                </div>
            </div>
            <div className={classNames(styles.options, isNameOpen ? styles.options_opened : styles.options_close)}>
                <input placeholder="Start type a name" />
            </div>
        </div>
    )
}
