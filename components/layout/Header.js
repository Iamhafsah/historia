import Link from 'next/link'
import ctl from '@netlify/classnames-template-literals'

const navWrap = ctl(`
flex
justify-between
pt-24
`)
const logoStyle = ctl(`
md:text-3xl
text-xl
font-semibold
transform 
-rotate-90
w-16
hover:-translate-y-4
transition
cursor-pointer
`)
const navListStyle = ctl(`
flex 
nav-ul 
transform 
rotate-90 
w-16
`)

const Header = () => {
    return (
        <nav className={navWrap}>
            <span className={logoStyle}><Link href="/">Historia</Link> </span>
            
            <ul className={navListStyle}>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/gallery'>Gallery</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Header

