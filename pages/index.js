import Head from 'next/head'
import Container from '../components/Container'
import Layout from '../components/Layout'
import Row from '../components/Row'
import { getAlbums } from '../lib/api'
import Showcase from '../components/Showcase'
import NewReleases from '../components/NewReleases'


export async function getStaticProps() {
  const albums = await getAlbums()

  return {
    props: {
        albums
    }
}
}

export default function Home({albums}) {
  return (
    <Layout>
      <Head>
        <title>Spotify IST 363</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='description' content='This is a summary of my website'/>
      </Head>

      <Showcase/>
      <NewReleases items={albums}/>

    </Layout>
  )
}
