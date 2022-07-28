import styles from './Carousel.module.sass'
import Slider from 'react-slick'

const navItems = ['Artworks', 'Landscape', 'Portrait', 'Still life', 'Painting', 'Sculpture', 'Architecture', 'Graphic arts', 'Painting', 'Sculpture', 'Architecture', 'Graphic arts']

export const NavbarCarousel = () => {
    const settings = {
        speed: 500,
        draggable: false,
        slidesToShow: 8
    }

    return (
        <Slider {...settings} className={styles.carousel}>
            {navItems.map(item => (
                <div className={styles.carousel_items}>
                    <p className={styles.carousel_item}>{item}</p>
                </div>
            ))}
        </Slider>
    )
}
