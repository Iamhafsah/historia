import ctl from '@netlify/classnames-template-literals'

const footerstyle = ctl(`
    text-center
    text-xl 
    md:text-2xl
    absolute
    bottom-0
    left-[45%]
    pb-8
`)
const Footer = () => {
    return (
        <div className={footerstyle}>
            <p className="">&copy; 2021 Historia</p>
        </div>
    )
}

export default Footer
