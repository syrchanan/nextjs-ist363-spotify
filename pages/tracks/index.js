import Link from 'next/link';
import Layout from '../../components/Layout'
import Heading from '../../components/Heading'
import { getTracks } from '../../lib/api';

export async function getStaticProps() {
	// Get external data from the file system, API, DB, etc.
	const tracks = getTracks();
  
	// The value of the `props` key will be
	//  passed to the `Home` component
	return {
	  props: {
		  tracks
	  }
	}
  }

const TracksLandingPage = ({tracks}) => {
    return(
        <Layout>
            <Heading level="1">All tracks</Heading>
            {tracks.map((track, index) => {
                const {title, slug} = track
                return(
                    <p key={index}>
                        <Link href={`/tracks/${slug}`}>
                            <a>
                                {title}
                            </a>
                        </Link>
                    </p>
                )
            })}
        </Layout>
    )
}

export default TracksLandingPage