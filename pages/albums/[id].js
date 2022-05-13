import Heading from "../../components/Heading"
import Layout from "../../components/Layout"
import {getAllAlbumSlugs, getSingleAlbumData} from '../../lib/api'
import Image from 'next/image'
import Link from 'next/link'
import Container from "../../components/Container"
import Row from "../../components/Row"
import Col from "../../components/Col"
import Section from '../../components/Section'
import Tracks from '../../components/Tracks'
import Paragraph from "../../components/Paragraph"

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
                <Row>
                    <Col xs="12" md="3">
                        <Image
                            src={sourceUrl}
                            alt={altText}
                            width={mediaDetails.width}
                            height={mediaDetails.height}
                        />
                    </Col>
                    <Col xs="12" md="9" justifyContent="center">
                        <Heading level="1">{title}</Heading>
                        {/* <Heading level="2">{year}</Heading> */}
                        {artistsToAlbums && 
                        artistsToAlbums.map((artist, index) => {
                            const {title, slug} = artist
                            return(
                                    <Heading key={index} level="2">
                                        <Link href={`/artists/${slug}`}>
                                            <a>{title}</a>
                                        </Link>
                                    </Heading>
                            )
                        })}
                    </Col>
                </Row>
                <Row>
                    <Col marginBottom="2">
                        {songsToAlbums &&
                            <Section>
                                <Heading level="2">Songs</Heading>
                                <Tracks items={songsToAlbums}/>
                            </Section>
                        }
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="12">
                        <Paragraph>
                            <Link href="/albums">
                                <a>
                                    Back to Albums
                                </a>
                            </Link>
                        </Paragraph>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default SingleAlbumPage