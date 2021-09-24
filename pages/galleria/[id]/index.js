import {useRouter} from "next/router";

const Galleria = ({artPiece}) => {
    const art = artPiece.data
    return (
        <div>
            {art.title}
            {art.wall_description}
            {art.tombstone}
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
