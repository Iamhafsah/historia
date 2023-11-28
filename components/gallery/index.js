import ImageComponent from "../utils/Image"
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import { HeroText } from "../../components";
import ctl from '@netlify/classnames-template-literals'


const index = ({artworks}) => {
    const imageDivStyle = ctl(`
    w-[40vw] sm:w-[40vw] 
    relative
    sm:min-h-[300px] h-[40vw]
    border-4
    border-gray-900
    mr-1
    bg-gray-600
`)
    
    return (
        <>
        <HeroText topText="The" bottomText="Gallery"/>
        
        <div className="grid grid-cols-2 gap-x-12 gap-y-8 md:mx-auto md:pl-24 pr-14 pl-8 pt-12">
            {artworks.data.map((art, i) => (
                 <ImageComponent
                 key={i}
                 art={art}
                 fill
                 wrapStyle={imageDivStyle}
                 gallery
                 />         
                ))}
                <span>&rarr;</span>
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
