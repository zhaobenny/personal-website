import Repocard from '../components/projects/repocard'
import Head from 'next/head'
import axios from 'axios';

export const getStaticProps: any = async (context: any) => {
  try {
    let token: any = process.env.GITHUB_AUTH_TOKEN;
    const username: String = "zhaobenny";
    let response = await axios.get(
      `https://api.github.com/search/repositories?q=user:${username}+sort:updated`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );
    let data: any = response.data['items'];
    if (!data) {
      return {
        notFound: true,
      }
    } else {
      return {
        props: {
          data
        },
        revalidate: 5,
      }
    }
  } catch (err) {
    console.log(err);
  }
}

const Projects = ((props: any) => {
  return (
    <>
      <Head>
        <title>Benny Zhao | Projects</title>
      </Head>
      <div className='flex flex-1 flex-col items-center mx-3'>
        <h1 className="text-4xl lg:text-6xl pb-1 mt-2 font-semibold text-transparent bg-clip-text bg-gradient-to-bl from-blue-400 to-fuchsia-600">Projects</h1>
        <p className="text-sm sm:text-lg mb-2 lg:mt-5 lg:mb-12">Current repos from my Github</p>
        <section className="grid sm:gap-4 sm:grid-cols-3">
          {props.data &&
            props.data.map((repo: any, id: any) => (
              <Repocard repo={repo} key={id} />
            ))}
        </section>
      </div>
    </>
  )
})

export default Projects;