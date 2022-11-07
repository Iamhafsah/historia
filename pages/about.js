import { HeroText } from "../components"
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import ctl from "@netlify/classnames-template-literals"

const About = () => {
    return (
        <div>
            <HeroText topText="About" bottomText="Historia "/>

            <div className={aboutWrap}>
                <p>Historia came into existence as a result of me wanting to work on a fun project. Working on it was fulfilling because I had the opportunity to learn a lot of things - those relating to art as well as technology. </p>
                <p>
                    Art is an everlasting gift to the world. It can be seen many years after it was created. Historia seeks to celebrate artworks and artists, and showcase the beautiful works that have graced the earth and our eyes.
                </p>
                <p>
                    The beauty of art is that it can help us see the world from another perspective. We are able to see how the artist saw the world when creating it and marvel at the mystery that is art.
                </p>
                <p>
                    Art is a gift that keeps on giving, and we  gladly accept its gift. It was possible to display the artworks on this website thanks to the <a href="https://www.programmableweb.com/api/cleveland-museum-art-open-access-rest-api-v21" className="hover:underline  font-semibold" > Cleveland Museum of Art's open access API.</a> A big thank you to them.🙏🏽</p>
            </div>

            <>
                <span className="lg:pl-32 md:pl-20 pl-12 font-semibold md:text-3xl text-xl">~🎨</span>
                <div className="w-[60vw] lg:py-24 py-8 mx-auto">
                    <ImQuotesLeft/>
                    <span className="w-[90%] px-8 md:text-4xl">Creativity takes courage.</span>
                    <cite className="md:text-xl">― Henri Matisse</cite>
                    <ImQuotesRight className="relative left-[30%]"/>
                </div>
            </>
        </div>
    )
}

export default About


const aboutWrap = ctl(`
    md:text-2xl 
    sm:text-xl 
    md:mx-28 
    mx-12 
    mt-16 
    mb-24 
    about-div 
    border-l-4 
    border-r-4 
    border-gray-700 
    md:px-12
    px-8
    font-light
`)