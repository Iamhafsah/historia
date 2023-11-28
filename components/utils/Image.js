import Image from "next/image"
import ctl from '@netlify/classnames-template-literals'
import Link from "next/link"


const imageDivStyle = ctl(`
`)
const imageStyle= ctl(`
   filter
   hover:grayscale
`)

// image loader
const imgLoader = ({src, width, quality}) => {
    return `${src}?w=${width}&q=${quality || 99}`
}

const ImageComponent = ({art, height,width, imgStyle, gallery, galleriaImageStyle, single, fill, wrapStyle}) => {

    return (
        <div className="text-left">
            <div className={`${imageDivStyle} ${galleriaImageStyle} ${wrapStyle}`}>
            {gallery ? (
                <Link href={`/galleria/${art.id}`}>
                <Image 
                    loader={imgLoader}
                    src={art.images.web.url}
                    alt={art.title}
                    width={width}
                    height={height}
                    className={`${imageStyle} ${imgStyle} cursor-pointer`}
                    fill={fill}
                />
                </Link>) : (
                <Image 
                loader={imgLoader}
                src={art.images.web.url}
                alt={art.title}
                width={width}
                height={height}
                className={`${imageStyle} ${imgStyle}`}
                fill={fill}
            />
            )}
            </div>
        
            {!single && (<>
            <p className="text-base sm:text-xl md:text-2xl">{art.title}</p>
            </>
            )}
        </div>
    )
}

export default ImageComponent
