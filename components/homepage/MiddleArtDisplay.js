import ImageComponent from "../utils/Image"
import ctl from '@netlify/classnames-template-literals'
import SeeMore from "../utils/SeeMore"

const containerStyle=ctl(`
    inline-block
    box-border
`)
const imageWrapStyle=ctl(`
    flex 
    pl-12
    md:pl-32
    pt-12
    md:text-2xl
    overflow-x-auto
    transition
    motion-safe:animate-moving-images
    art-display
`)
const imageDivStyle = ctl(`
    w-[300px] lg:w-[550px] sm:w-[400px] 
    relative
    sm:min-h-[400px] md:min-h-[40vw] h-[300px]
    border-4
    border-gray-900
    mr-1
    bg-gray-600
`)


const MiddleArtDisplay = ({artworks}) => {
    const displayImages = artworks.data.slice(2, 8)
    return (
        <div className="overflow-hidden ">
            <div className={containerStyle}>
            <div className={imageWrapStyle}>
                    {artworks && displayImages.map((art, i) => (
                        <ImageComponent
                        key={i}
                        art={art}
                        fill
                        wrapStyle={imageDivStyle}
                        />
                    )) }
            </div>
        </div>
        <SeeMore/>
        </div>
    )
}

export default MiddleArtDisplay
