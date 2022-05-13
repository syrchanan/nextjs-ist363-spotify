import Heading from "../../components/Heading"
import Layout from "../../components/Layout"
import {getAllAlbumSlugs, getSingleAlbumData} from '../../lib/api'
import Image from 'next/image'
import Link from 'next/link'
import Container from "../../components/Container"
import Row from "../../components/Row"
import Col from "../../components/Col"

export async function getStaticPaths() {
    const paths = await getAllAlbumSlugs()

    return {
        paths, 
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const albumData = await getSingleAlbumData(params.id)
    return{
        props: {
            albumData
        }
    }
}

const SingleAlbumPage = ({albumData}) => {
    const {title, featuredImage, albumInformation} = albumData;
    const {sourceUrl, altText, mediaDetails} = featuredImage.node
    const {year, songsToAlbums, artistsToAlbums} = albumInformation

    return(
        <Layout>
            <Container>
                <Image
                    src={sourceUrl}
                    alt={altText}
                    width={mediaDetails.width}
                    height={mediaDetails.height}
                />
                <Row>
                    <Col xs="12" sm="12">
                        <Heading level="1">{title}</Heading>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="12">
                        <Heading level="2">{year}</Heading>
                    </Col>
                </Row>
                <Row>
                    {artistsToAlbums && 
                    artistsToAlbums.map((artist, index) => {
                        const {title, slug} = artist
                        return(
                            <Col key={index} xs="12" sm="12">
                                <Link href={`/artists/${slug}`}>
                                    <a>
                                        <Heading level="2">{title}</Heading>
                                    </a>
                                </Link>
                            </Col>
                        )
                    })}
                </Row>
                <Row>
                    <Col>
                        {songsToAlbums &&
                            <section>
                            <Heading level="2">Songs</Heading>
                            <Row>
                                {songsToAlbums.map((song, index) => {
                                    const {title} = song
                                    return(
                                        <Col key={index} xs="12" sm="12">
                                            <Heading level="3">{title}</Heading>
                                        </Col>
                                    )
                                })}
                            </Row>
                            </section>
                        }
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default SingleAlbumPage