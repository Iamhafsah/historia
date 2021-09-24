import ctl from '@netlify/classnames-template-literals'

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
const HeroText = ({topText, bottomText}) => {
    return (
        <div className={heroStyle}>
            <h1>{topText}</h1><br/>
            <h1 className={bottomTextStyle}>{bottomText}</h1>
        </div>
    )
}

export default HeroText
