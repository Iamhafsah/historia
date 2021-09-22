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
  const res = await fetch(`https://openaccess-api.clevelandart.org/api/artworks/?q=africa&skip=2&limit=3`)
  const artworks = await res.json();

  return{
      props: {artworks}
  }
}
