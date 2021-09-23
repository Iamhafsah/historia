import ctl from '@netlify/classnames-template-literals'
import {FaRegArrowAltCircleRight} from "react-icons/fa"
import Link from "next/link"

const seeMoreStyle = ctl(`
    flex 
    items-center 
    font-semibold 
    md:text-2xl 
    justify-end 
    xl:pr-[8rem] 
    lg:pr-[7rem] 
    md:pr-[5rem] 
    sm:pr-[4rem] 
    pr-12 
    py-16
    group 
    hover:text-gray-500
    cursor-pointer
`)
const arrowStyle=ctl(`
    text-3xl 
    md:text-5xl 
    ml-2 
    transform 
    group-hover:translate-x-6 
    transition-all
`)

const SeeMore = () => {

    return (
        <p className={seeMoreStyle}>
           <Link href="/gallery">See More</Link>
            <Link href="/gallery"><FaRegArrowAltCircleRight className={arrowStyle}/></Link>
        </p>
        
    )
}

export default SeeMore
