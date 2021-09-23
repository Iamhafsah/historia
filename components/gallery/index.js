import ImageComponent from "../utils/Image"
import ctl from "@netlify/classnames-template-literals"
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

const heroStyle=ctl(`
    xl:text-[10em]
    lg:text-[9em]
    md:text-[6em]
    text-[3.5em]
    font-bold
    uppercase
    text-right
    md:pr-32
    pr-20
    xl:-mt-12
    md:-mt-2
    md:h-auto
    h-[30vh]
`)
const bottomTextStyle = (`
    -mt-24
    md:-mt-44
    lg:mt-[-2em]
`)
const index = ({artworks}) => {
    return (
        <>
        <div className={heroStyle}>
            <h1>The</h1><br/>
            <h1 className={bottomTextStyle}>Gallery</h1>
        </div>
        
        <div className="grid grid-cols-2 gap-12 max-w-[90vw] px-12 mx-auto">
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
