import { useState } from 'react'
import ArrowIcon from '@icons/pagination-arrow.svg'
import styles from './Pagination.module.sass'

export const Pagination = () => {
    const [pages] = useState(0)

    return (
        <div className={styles.main_block}>
            <div className={styles.pagination}>
                <div>
                    <ArrowIcon />
                </div>
                <div className={styles.active_page}>1</div>
                <div>2</div>
                <div>3</div>
                <div>...</div>
                <div>74</div>
                <div className={styles.right_arrow}>
                    <ArrowIcon />
                </div>
            </div>
            <div className={styles.result}>
                <p>1-4 of 296 Results</p>
            </div>
        </div>
    )
}
