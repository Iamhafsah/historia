import ctl from '@netlify/classnames-template-literals'
import ImageComponent from "../utils/Image"
import SeeMore from '../utils/SeeMore'


const imageWrapStyle=ctl(`
    flex 
    justify-center
    px-12
    lg:px-0
    pt-8 
    md:text-2xl
`)

const TopArt = ({artworks}) => {
    const topArtwork = artworks.data.slice(0, 2)

    return (
        <>
        <div className={imageWrapStyle}>
            {artworks && topArtwork.map((art, i) => (
                <ImageComponent
                key={i}
                art={art}
                height={600}
                width={400}
                imgStyle="cursor-auto"
                />
            )) }
        </div>
       
            <SeeMore/>
        </>
    )
}

export default TopArt
