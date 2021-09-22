import Image from 'next/image'
import ctl from '@netlify/classnames-template-literals'

// image loader
const imgLoader = ({src, width, quality}) => {
    return `${src}?w=${width}&q=${quality || 99}`
}

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
    border-4
    border-black
`)
const imageStyle= ctl(`
   filter
   hover:grayscale
   cursor-pointer  
`)

const TopArt = ({artworks}) => {
    console.log(artworks);
    return (
        <>
        <div className={imageWrapStyle}>
            {artworks && artworks.data.map((art, i) => (
                <div key={i} className="text-center">
                    <div className={imageDivStyle}>
                        <Image 
                            loader={imgLoader}
                            src={art.images.web.url}
                            alt={art.title}
                            width={400}
                            height={600}
                            className={imageStyle}
                            layout="responsive"
                        />
                    </div>
               
                    <span>{art.title}</span>
                </div>
            )) }
        </div>
        <p>See More</p>
        </>
    )
}

export default TopArt
