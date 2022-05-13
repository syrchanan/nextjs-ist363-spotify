import Col from "../../components/Col"
import Container from "../../components/Container"
import Heading from "../../components/Heading"
import Layout from "../../components/Layout"
import Link from 'next/link'
import Row from "../../components/Row"
import {getAllTrackPaths, getSingleTrackData} from '../../lib/api'

//1. get list of paths to pre-render
export async function getStaticPaths() {
    const paths = getAllTrackPaths()

    return {
        paths, 
        fallback: false //for a 404 page if nothing is found
    }
}

//2. get data belonging to single song
export async function getStaticProps({params}) {
    const singleTrackData = getSingleTrackData(params.id)
    
    return {
        props: {
            singleTrackData
        }
    }
}

const SingleTrackTemplate = ({singleTrackData}) => {
    const {matchingTrack} = singleTrackData;
    const {title, artist} = matchingTrack;
    return(
        <Layout>
            <Container>
                <Row>
                    <Col>
                        <Heading level="3">
                            <Link href="/tracks">
                                <a>
                                    Back to all songs
                                </a>
                            </Link>
                        </Heading>
                        <Heading level="1"><p>{title}</p></Heading>
                        <Heading level="2"><p>{artist}</p></Heading>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default SingleTrackTemplate