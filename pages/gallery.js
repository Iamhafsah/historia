import {ArtGallery} from '../components'

const Gallery = ({artworks}) => {
    return (
        <div>
            <ArtGallery artworks={artworks}/>
        </div>
    )
}

export default Gallery

export const getStaticProps = async() => {
    const res = await fetch(`https://openaccess-api.clevelandart.org/api/artworks/?limit=30&has_image=1`)
    const artworks = await res.json();
  
    return{
        props: {artworks}
    }
  }
  