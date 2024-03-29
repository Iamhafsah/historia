import { HeroText } from "../../../components";
import ImageComponent from "../../../components/utils/Image";
import ctl from '@netlify/classnames-template-literals'

const Galleria = ({artPiece}) => {
    const imageDivStyle = ctl(`
    w-[300px] lg:w-[550px] sm:w-[80vw] 
    relative
    sm:min-h-[400px] md:min-h-[60vw] h-[300px]
    border-4
    border-gray-900
    mr-1
    bg-gray-600
`)

    const art = artPiece.data
    return (
        <div className=" ">
            <HeroText topText="More" bottomText="Details🎨"/>

            <div className="pt-8 pb-20 w-[75vw] sm:w-[80vw] mx-auto text-gray-700  ">
                <p className="font-semibold text-xl md:text-3xl">{art.title}</p>
                <ImageComponent
                art={art}
                fill
                wrapStyle={imageDivStyle}
                galleriaImageStyle="galleria-image my-8 gallery-image"
                single
                />
            
            
                <p className="font-semibold mb-4 text-xl md:text-2xl">Created by {art.creators[0].description}</p>

                <em className=" mb-4 text-xl md:text-2xl">Technique ~ {art.technique}</em>

                <p className=" border-l-4 border-r-4 border-gray-700 md:px-12 px-8 my-12 md:text-2xl sm:text-xl font-light text-gray-900" dangerouslySetInnerHTML={{__html:`${art.description}`}}></p>

                <p className="sm:text-xl md:text-2xl" dangerouslySetInnerHTML={{__html:`Fun fact 😎~ ${art.did_you_know}`}}/>
            </div>
        </div>
    )
}

// export const getServerSideProps = async(context) => {
//     const res = await fetch(`https://openaccess-api.clevelandart.org/api/artworks/${context.params.id}`);
//     const artPiece = await res.json();

//     return{
//         props:{artPiece}
//     }
// }



export const getStaticProps = async(context) => {
    const res = await fetch(`https://openaccess-api.clevelandart.org/api/artworks/${context.params.id}`);
    const artPiece = await res.json();

    return{
        props:{artPiece}
    }
}
export const getStaticPaths = async()=> {
    const res = await fetch(`https://openaccess-api.clevelandart.org/api/artworks/?limit=30&has_image=1`)
    const artPiece = await res.json();
    
    const ids = artPiece.data.map(item => item.id);
    const paths = ids.map(id => ({params: {id:id.toString()}}))

    return{
        paths,
        fallback:false
    }
}

export default Galleria
