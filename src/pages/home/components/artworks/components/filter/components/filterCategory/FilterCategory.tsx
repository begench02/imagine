import { useState } from 'react'
import clsx from 'clsx'
import styles from './FilterCategory.module.sass'
import ArrowIcon from '@icons/pagination-arrow.svg'

const categories = ['Sculpture', 'Architecture', 'Landscape', 'Graphic arts', 'Portrait']

export const FilterCategory = () => {
    const [isCategoryOpen, setCategoryOpen] = useState<boolean>(false)
    const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0)

    return (
        <div className={styles.main_block}>
            <div onClick={() => setCategoryOpen(prev => !prev)} className={styles.title_block}>
                <div>Category</div>
                <div className={clsx(styles.title_arrow, isCategoryOpen && styles.title_arrow_active)}>
                    <ArrowIcon />
                </div>
            </div>
            <div className={clsx(styles.options, !isCategoryOpen && styles.options_close)}>
                {categories.map((category: string, index) => (
                    <div className={styles.select_item_block} onClick={() => setSelectedItemIndex(index)}>
                        {index === selectedItemIndex ? <SelectedItem isSelected={true} /> : <SelectedItem />}
                        <div>{category}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function SelectedItem({ isSelected = false }: { isSelected?: boolean }) {
    return <div className={styles.select_item}>{isSelected && <div className={styles.selected_item}></div>}</div>
}
