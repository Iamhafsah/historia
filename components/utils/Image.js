import Image from "next/image"
import ctl from '@netlify/classnames-template-literals'
import Link from "next/link"


const imageDivStyle = ctl(`
    w-[40vw]
    border-4
    border-gray-900
    mr-1
`)
const imageStyle= ctl(`
   filter
   hover:grayscale
   cursor-pointer  
`)

// image loader
const imgLoader = ({src, width, quality}) => {
    return `${src}?w=${width}&q=${quality || 99}`
}

const ImageComponent = ({art, height,width, imgStyle, gallery, galleriaImageStyle, single}) => {

    return (
        <div className="text-left">
            <div className={`${imageDivStyle} ${galleriaImageStyle}`}>
            {gallery ? (
                <Link href={`/galleria/${art.id}`}>
                <Image 
                    loader={imgLoader}
                    src={art.images.web.url}
                    alt={art.title}
                    width={width}
                    height={height}
                    className={`${imageStyle} ${imgStyle}`}
                    layout="responsive"
                />
            </Link>) : (
                <Image 
                loader={imgLoader}
                src={art.images.web.url}
                alt={art.title}
                width={width}
                height={height}
                className={`${imageStyle} ${imgStyle}`}
                layout="responsive"
            />
            )}
            </div>
        
            {!single && (<span>{art.title}</span>)}
        </div>
    )
}

export default ImageComponent
