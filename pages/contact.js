import { HeroText } from "../components"

const Contact = () => {
    return (
        <>
        <HeroText topText="Hey" bottomText="There 👋🏽" />
       
        <div className={`contact-div`}>
        <a href="https://medium.com/@emekomahafsah"><p className="bg-green-100">Medium</p></a>
        <a href="https://github.com/iamhafsah"> <p className="bg-purple-300">My Github</p></a>
        <a href="mailto:emekomahafsah@gmail.com"><p className="bg-pink-200">Send an Email</p></a>
        <a href="https://twitter.com/hafsyforever"><p className="bg-indigo-200">Reach out on Twitter</p></a>
        </div>
        </>
    )
}

export default Contact
