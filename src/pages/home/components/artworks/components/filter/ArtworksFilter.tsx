import { FilterCategory } from './components/filterCategory/FilterCategory'
import { FilterName } from './components/filterName/FilterName'
import styles from './ArtworksFilter.module.sass'

export const ArtworksFilter = () => {
    return (
        <div className={styles.main_block}>
            <FilterCategory />
            <FilterName />
        </div>
    )
}
