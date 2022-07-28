import styles from './Navigation.module.sass'

export const FooterNavigation = () => {
    return (
        <div className={styles.main_block}>
            <div>
                <p>Artworks</p>
                <p>Landscape</p>
                <p>Portrait</p>
                <p>Still life</p>
            </div>
            <div>
                <p>Painting</p>
                <p>Sculpture</p>
                <p>Architecture</p>
                <p>Graphic arts</p>
            </div>
        </div>
    )
}
