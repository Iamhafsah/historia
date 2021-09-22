import ctl from '@netlify/classnames-template-literals'

const TextWrap = ctl(`
    overflow-hidden
    whitespace-nowrap
    box-border
    mt-16
    lg:mt-0
    bg-red-900
    text-white
    md:py-[.8em]
    py-[.5em]
    px-24
    transition
    duration-[18s]
    motion-safe:animate-moving-text
    moving
`)
const movingTextStyle= ctl(`
    text-xl 
    md:text-2xl
    uppercase
`)

const Strip = () => {
    return (
        <div className="overflow-hidden">
            <p className={TextWrap}>
            <span className={movingTextStyle}>Art is passion. Art is history. Art is a gift. Art is everything. Art is more. Art is special. Art is you. Art is the world. Art evolves. Art tells stories. Art imitates life. Art gives. Art takes. Art lives. Art is breathtaking. </span>
        </p>
        </div>
        
    )
}

export default Strip
