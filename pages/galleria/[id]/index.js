// import {useRouter} from "next/router";

import { HeroText } from "../../../components";
import ImageComponent from "../../../components/utils/Image";

const Galleria = ({artPiece}) => {
    const art = artPiece.data
    return (
        <div className=" ">
            <HeroText topText="More" bottomText="Details🎨"/>

            <div className="pt-8 pb-20 w-[75vw] sm:w-[80vw] mx-12  md:mx-24 lg:mx-28 text-gray-700  ">
                <p className="font-semibold text-xl md:text-3xl">{art.title}</p>

                <ImageComponent 
                art={art}
                height={1500}
                width={2000}
                galleriaImageStyle="galleria-image my-8"
                single
                />
            
            
                <p className="font-semibold mb-4 text-xl md:text-2xl">Created by {art.creators[0].description}</p>

                <em className=" mb-4 text-xl md:text-2xl">Technique ~ {art.technique}</em>

                <p className=" border-l-4 border-r-4 border-gray-700 md:px-12 px-8 my-12 md:text-2xl sm:text-xl font-light text-gray-900" dangerouslySetInnerHTML={{__html:`${art.wall_description}`}}></p>

                <p className="sm:text-xl md:text-2xl" dangerouslySetInnerHTML={{__html:`Fun fact 😎~ ${art.fun_fact}`}}></p>
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
