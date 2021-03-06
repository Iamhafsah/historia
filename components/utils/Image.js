import Image from "next/image"
import ctl from '@netlify/classnames-template-literals'
import Link from "next/link"


const imageDivStyle = ctl(`
    w-[40vw]
    border-4
    border-gray-900
    mr-1
    bg-gray-600
`)
const imageStyle= ctl(`
   filter
   hover:grayscale
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
                    className={`${imageStyle} ${imgStyle} cursor-pointer`}
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
        
            {!single && (<>
            <p className="text-base sm:text-xl md:text-2xl">{art.title}</p>
            </>
            )}
        </div>
    )
}

export default ImageComponent
