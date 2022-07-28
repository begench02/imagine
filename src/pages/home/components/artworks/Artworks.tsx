import { ArtworksFilter } from './components/filter/ArtworksFilter'
import { ArtworksPictures } from './components/pictures/Pictures'
import { ArtworksSearch } from './components/search/Search'
import styles from './Artworks.module.sass'

export const Artworks = () => {
    return (
        <div>
            <div className={styles.title_block}>
                <div>
                    <h2 className={styles.title}>Artworks</h2>
                </div>
                <div>
                    <h2>588</h2>
                </div>
            </div>
            <ArtworksSearch />
            <ArtworksFilter />
            <ArtworksPictures />
        </div>
    )
}
