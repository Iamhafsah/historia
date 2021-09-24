import {MiddleArtDisplay,BottomArtDisplay, TopArt, Quotes, Quote2, Quote3, Strip, HeroText} from "../../components";

const HomePage = ({artworks}) => {
    return (
        <div>
            <HeroText topText="history" bottomText="in pictures"/>
            <Strip/>
            <TopArt artworks={artworks}/>
            <Quotes/>
            <MiddleArtDisplay artworks={artworks}/>
            <Quote2/>
            <BottomArtDisplay artworks={artworks}/>
            <Quote3/>
        </div>
    )
}

export default HomePage

