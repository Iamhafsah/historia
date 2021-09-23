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
    motion-safe:animate-moving-text
    art-display
`)


const ArtDisplay = ({artworks}) => {
    const displayImages = artworks.data.slice(2, 8)
    return (
        <div className="overflow-hidden ">
            <div className={containerStyle}>
            <div className={imageWrapStyle}>
                    {artworks && displayImages.map((art, i) => (
                        <ImageComponent
                        key={i}
                        art={art}
                        height={400}
                        width={400}
                        />
                    )) }
            </div>
        </div>
        <SeeMore/>
        </div>
    )
}

export default ArtDisplay
