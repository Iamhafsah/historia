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
const imageDivStyle = ctl(`
    w-[40vw]
    relative
    min-h-[60vw]
    border-4
    border-gray-900
    mr-1
    bg-gray-600
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
                imgStyle="cursor-auto"
                fill
                wrapStyle={imageDivStyle}
                />
            )) }
        </div>
       
            <SeeMore/>
        </>
    )
}

export default TopArt
