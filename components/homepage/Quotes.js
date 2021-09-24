import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

const Quotes = () => {
    return (
        <>
        <span className="lg:pl-32 md:pl-20 pl-12 font-semibold md:text-3xl text-xl">~🎨</span>
        <div className="w-[60vw] lg:py-16 py-8 mx-auto">
            <ImQuotesLeft/>
            <span className="w-[90%] px-8 md:text-4xl">A painter should begin every canvas with a wash of black, because all things in nature are dark except where exposed by the light.</span>
            <cite className="md:text-xl">― Leonardo da Vinci</cite>
            <ImQuotesRight className="relative left-[50%]"/>
        </div>
        </>
    )
}

export default Quotes
