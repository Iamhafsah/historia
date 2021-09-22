import ctl from '@netlify/classnames-template-literals'

const heroStyle=ctl(`
    xl:text-[10em]
    lg:text-[9em]
    md:text-[6em]
    text-[3.5em]
    font-bold
    uppercase
    text-right
    pr-32
    xl:-mt-12
    md:-mt-2
`)
const bottomTextStyle = (`
    -mt-24
    md:-mt-44
    lg:mt-[-2em]
`)
const HeroText = () => {
    return (
        <div className={heroStyle}>
            <h1>History</h1><br/>
            <h1 className={bottomTextStyle}>in pictures</h1>
        </div>
    )
}

export default HeroText
