import {HomePage, TopArt, ArtDisplay, Quotes, Quote2} from "../components";


export default function Home({artworks}) {
  return (
    <div className="">
      <HomePage artworks={artworks}/>
    </div>
  )
}

export const getStaticProps = async() => {
  const res = await fetch(`https://openaccess-api.clevelandart.org/api/artworks/?q=art&limit=14&has_image=1`)
  const artworks = await res.json();

  return{
      props: {artworks}
  }
}
