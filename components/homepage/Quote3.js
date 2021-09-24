import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

const Quote2 = () => {
    return (
        <>
         <span className="lg:pl-32 md:pl-20 pl-12 font-semibold md:text-3xl text-xl">~🎨</span>
        <div className="w-[60vw] lg:py-16 py-8 mx-auto">
            <ImQuotesLeft/>
            <span className="w-[90%] px-8 md:text-4xl">Art is not what you see, but what you make others see.</span>
            <cite className="md:text-xl">― Edgar Degas</cite>
            <ImQuotesRight className="relative left-[30%]"/>
        </div>
        </>
    )
}

export default Quote2
