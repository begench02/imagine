import { Artworks, NavbarCarousel, Pagination } from './components'

export const Home = () => {
    return (
        <div>
            <NavbarCarousel />
            <Artworks />
            <Pagination />
        </div>
    )
}
