import ArtworkOne from '@images/artworks/Artwork1.png'
import ArtworkTwo from '@images/artworks/Artwork2.png'
import ArtworkThree from '@images/artworks/Artwork3.png'
import ArtworkFour from '@images/artworks/Artwork4.png'
import ArtistOne from '@images/artworks/Artist1.png'
import ArtistTwo from '@images/artworks/Artist2.png'
import ArtistThree from '@images/artworks/Artist3.png'
import ArtistFour from '@images/artworks/Artist4.png'

const artworks: TArtists = [
    {
        picture: {
            photo: ArtworkOne,
            name: 'Forest silence'
        },
        artist: {
            photo: ArtistOne,
            name: 'George Dillan'
        }
    },
    {
        picture: {
            photo: ArtworkTwo,
            name: 'Still life V'
        },
        artist: {
            photo: ArtistTwo,
            name: 'Peggy Wood'
        }
    },
    {
        picture: {
            photo: ArtworkThree,
            name: 'Surrounded'
        },
        artist: {
            photo: ArtistThree,
            name: 'Alice Gordan'
        }
    },
    {
        picture: {
            photo: ArtworkFour,
            name: 'Mountain landscape'
        },
        artist: {
            photo: ArtistFour,
            name: 'Timothy Taylor'
        }
    }
]

type TArtists = TArtwork[]

export type TArtwork = {
    picture: TPicture
    artist: TArtist
}

type TPicture = {
    photo: string
    name: string
}

type TArtist = {
    photo: string
    name: string
}

export default artworks
