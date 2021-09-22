import {HomePage, TopArt} from "../components";

export default function Home({artworks}) {
  return (
    <div className="">
      <HomePage/>
      <TopArt artworks={artworks}/>
    </div>
  )
}

export const getStaticProps = async() => {
  const res = await fetch(`https://openaccess-api.clevelandart.org/api/artworks/?q=art&limit=2&has_image=1`)
  const artworks = await res.json();

  return{
      props: {artworks}
  }
}
