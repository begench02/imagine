import { useState } from 'react'
import SearchIcon from '@icons/search.svg'
import styles from './Search.module.sass'
import { SearchItem } from '../../../../../../components/seachItem/SearchItem'

export const ArtworksSearch = () => {
    const [searches] = useState(['Mixed Media', 'Abstract Expressionism'])

    return (
        <div className={styles.main_block}>
            <div className={styles.search}>
                <SearchIcon />
                <div className={styles.searched_items}>
                    {searches.map(search => (
                        <SearchItem text={search} />
                    ))}
                </div>
            </div>
            <p className={styles.clear_filters}>Clear filters</p>
        </div>
    )
}
