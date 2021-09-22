import ctl from '@netlify/classnames-template-literals'

const footerstyle = ctl(`
    text-center
    text-xl 
    md:text-2xl
    relative
    bottom-0
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
