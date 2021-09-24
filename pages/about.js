import { HeroText , Strip } from "../components"

const About = () => {
    return (
        <div>
            <HeroText topText="About" bottomText="Historia"/>

            <Strip/>
            <div className="md:text-2xl sm:text-xl md:px-28 px-12 py-16 about-div text-gray-700 ">
                <p>
                    Art is an everlasting gift to the world. It is something that can be seen many years after it was created. Historia seeks to celebrate artworks and artists, and showcase the beautiful works that have graced the earth and our eyes.
                </p>
                <p>
                    The beauty of art is that it can help us see the world from another perspective. We are able to see how the artist saw the world when creating it and marvel at the mystery that is art.
                </p>
                <p>
                    Art is a gift that keeps on giving, and we  gladly accept its gift. It was possible to display the artworks on this website thanks to the <a href="https://www.programmableweb.com/api/cleveland-museum-art-open-access-rest-api-v21" className="hover:underline  font-semibold" > Cleveland Museum of Art's open access API.</a> A big thank you to them.🙏🏽</p>
            </div>
        </div>
    )
}

export default About
