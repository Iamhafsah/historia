import ImageComponent from "../utils/Image"
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import { HeroText } from "../../components";

const index = ({artworks}) => {
    
    return (
        <>
        <HeroText topText="The" bottomText="Gallery" />
        <div className="grid grid-cols-2 gap-12 md:px-12 pr-14 pl-8 pt-12">
            {artworks.data.map((art, i) => (
                <ImageComponent
                key={i}
                art={art}
                height={100}
                width={100}
                />            
                ))}
        </div>

        <div>
            <span className="relative lg:left-[70%] left-[60%] font-semibold">~🎨</span>
            
            <div className="w-[60vw] lg:pt-16 lg:pb-24 py-12 mx-auto">
                <ImQuotesLeft/>
                <span className="w-[90%] md:text-4xl">Everything you can imagine is real. </span>
                <cite className="md:text-xl"> – Pablo Picasso</cite>
                <ImQuotesRight className="relative left-[30%]"/>
            </div>     
        </div>
        </>
    )
}

export default index
