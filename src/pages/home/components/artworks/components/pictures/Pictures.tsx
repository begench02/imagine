import artworks, { TArtwork } from './artworks'
import DeleteIcon from '@icons/delete.svg'
import styles from './Pictures.module.sass'

export const ArtworksPictures = () => {
    return (
        <div className={styles.main_block}>
            {artworks.map((artwork: TArtwork) => {
                const { picture, artist } = artwork
                return (
                    <div>
                        <div className={styles.picture_block}>
                            <img src={picture.photo} />
                            <div className={styles.delete_icon}>
                                <DeleteIcon />
                            </div>
                        </div>
                        <div className={styles.artwork_info}>
                            <div className={styles.artist_photo_block}>
                                <img src={artist.photo} alt="" />
                            </div>
                            <div>
                                <div className={styles.artist_name}>{artist.name}</div>
                                <div>{picture.name}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
