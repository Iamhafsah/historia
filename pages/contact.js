import { HeroText } from "../components"

const Contact = () => {
    return (
        <>
        <HeroText topText="Hey" bottomText="There 👋🏽" />
       
        <div className={`contact-div`}>
        <a href="https://medium.com/@emekomahafsah"><p className="">Medium</p></a>
        <a href="https://github.com/iamhafsah"> <p className="">My Github</p></a>
        <a href="mailto:emekomahafsah@gmail.com"><p className="">Send an Email</p></a>
        <a href="https://twitter.com/hafsyforever"><p className="">Reach out on Twitter</p></a>
        </div>
        </>
    )
}

export default Contact
