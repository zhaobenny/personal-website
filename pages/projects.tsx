import Repocard from '../components/repocard'
import Head from 'next/head'
import axios from 'axios';

const Projects = (({ data }) => {
  return (
    <>
      <Head>
        <title>Benny Zhao | Projects</title>
      </Head>
      <div className='flex flex-col items-center mx-3'>
          <h1 className="text-4xl lg:text-6xl mt-2 h-10 font-semibold">Projects</h1>
          <p className="text-sm sm:text-lg mt-2 mb-2 lg:mt-10 lg:mb-12">Current repos on my Github</p>
          <div className="grid sm:gap-4 sm:grid-cols-3 xl:mb-44 2xl:mb-80">
            {data &&
              data.map((repo: any, id: any) => (
                <Repocard repo={repo} key={id} />
              ))}
          </div>
        </div>
    </>
  )
})

export async function getServerSideProps() {
  try {
    let token: any = process.env.GITHUB_AUTH_TOKEN
    const username = "zhaobenny";
    let response = await axios.get(
      `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
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
        props: { data }, // will be passed to the page component as props
      }
    }
  } catch (err) {
    console.log(err);
  }
}
export default Projects;