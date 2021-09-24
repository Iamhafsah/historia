import ctl from '@netlify/classnames-template-literals'

const TextWrap = ctl(`
    overflow-hidden
    whitespace-nowrap
    box-border
    mt-16
    lg:mt-0
    md:py-[.8em]
    py-[.5em]
    px-12
   
`)
const movingTextStyle= ctl(`
    sm:text-xl 
    md:text-2xl
    uppercase
    transition
    duration-[18s]
    motion-safe:animate-moving-text
    moving
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
