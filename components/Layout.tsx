import Navbar from "./navbar";
import Footer from "./footer";
import Head from 'next/head'

const Layout = ({children}:{children:any}) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className="content">
                <Navbar/>
                    {children}
                <Footer/>
            </div>
        </>
    );
  }

  export default Layout;