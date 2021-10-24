import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";

const Layout = ({ children }: { children: any }) => {
  const description : string = "I'm Benny Zhao, a student in computing science, and this my personal website!";
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta property="og:description"  content={description} />
        <meta property="og:type" content="website" />
        <meta name="author" content="Benny Zhao" />
        <script async defer data-website-id="37e0f55d-8b45-41c1-9c48-be796a5c49c1" src="https://analytics.bubbletea.party/umami.js"
          data-domains="me.bubbletea.party, bubbletea.party"/>
      </Head>
      <section className="flex flex-col min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </section>
    </>
  );
};

export default Layout;
