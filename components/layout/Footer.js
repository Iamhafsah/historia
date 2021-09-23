import ctl from '@netlify/classnames-template-literals'
import Link from "next/link"

const footerstyle = ctl(`
    bg-gray-900
    text-white
    flex
    justify-between
    text-center
    pt-40
    pb-12
    mt-12
`)
const logoStyle = ctl(`
    md:text-3xl
    text-2xl
    font-semibold
    -rotate-90
    ml-16
    md:ml-8
`)
const footerListStyle = ctl(`
    flex
    rotate-90
    mb-24
    -mr-24
    -ml-12
    md:ml-0
    footer-list-style
`)

const date = new Date();
const thisYear = date.getFullYear();

const Footer = () => {
    return (
        <div className={footerstyle}>
            <span className={logoStyle}><Link href="/">Historia</Link> </span>
            
            <p className=" md:text-[1.3rem] text-xl  mt-24 ml-4 md:ml-8">&copy; {thisYear} Historia. Made by <a href="https://github.com/iamhafsah" className="hover:underline">Hafsah</a> </p>

            <ul className={footerListStyle}>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/gallery'>Gallery</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Footer
