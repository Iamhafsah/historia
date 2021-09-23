import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

const Quote2 = () => {
    return (
        <>
        <span className="relative lg:left-[70%] left-[60%] font-semibold">~🎨</span>
        <div className="w-[60vw] lg:pt-16 lg:pb-24 py-12 mx-auto">
            <ImQuotesLeft/>
            <span className="w-[90%] px-8 md:text-4xl">Art evokes the mystery without which the world would not exist.</span>
            <cite className="md:text-xl">– René Magritte</cite>
            <ImQuotesRight className="relative left-[30%]"/>
        </div>
        </>
    )
}

export default Quote2
