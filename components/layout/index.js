import Meta from "../Meta"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({children}) => {
    return (
        <div>
            <Meta/>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout
