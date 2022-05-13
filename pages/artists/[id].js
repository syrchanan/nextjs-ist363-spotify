import Heading from "../../components/Heading"
import Layout from "../../components/Layout"
import {getSingleArtistData, getAllArtistSlugs} from '../../lib/api'
import Image from 'next/image'
import Row from "../../components/Row"
import Col from "../../components/Col"
import Container from "../../components/Container"
import Link from 'next/link'
import Paragraph from '../../components/Paragraph'
import Section from '../../components/Section'

export async function getStaticPaths() {
    const paths = await getAllArtistSlugs()

    return {
        paths, 
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const artistData = await getSingleArtistData(params.id)
    return{
        props: {
            artistData
        }
    }
}

const SingleArtistPage = ({artistData}) => {
    const {title, content, featuredImage, artistInformation} = artistData
    const {sourceUrl, altText, mediaDetails} = featuredImage.node
    const {artistsToAlbums} = artistInformation
    return(
        <Layout>
            <Container>
                <Row>
                    <Col xs="12" sm="12" md="5" marginBottom="2">
                        <Image
                            src={sourceUrl}
                            alt={altText}
                            width={mediaDetails.width}
                            height={mediaDetails.height}
                        />
                    </Col>
                    <Col xs="12" sm="12" md="7" justifyContent="center" marginBottom="2">
                        <Heading level="1">{title}</Heading>
                        {/* <Paragraph intro>
                            {content}
                        </Paragraph> */}

                    </Col>
                </Row>
                
                {artistsToAlbums &&
                    <Section>
                        <Row>
                            <Col xs="12" sm="12">
                                <Heading level="2">Albums</Heading>
                            </Col>
                        </Row>
                        <Row>
                        {artistsToAlbums.map((album, index) => {
                            const {title, slug, featuredImage} = album
                            const {sourceUrl, altText, mediaDetails} = featuredImage.node
                            return(
                                <Col key={index} xs="6" sm="4" md="3">
                                    <Link href={`/albums/${slug}`}>
                                        <a>
                                            <Image
                                                src={sourceUrl}
                                                alt={altText}
                                                width={mediaDetails.width}
                                                height={mediaDetails.height}
                                            />
                                        </a>
                                    </Link>
                                    <Heading level="3">{title}</Heading>
                                </Col>
                            )
                        })}
                        </Row>
                    </Section>
                }
                <Row>
                    <Col xs="12" sm="12">
                        <Paragraph>
                            <Link href="/artists">
                                <a>
                                    Back to Artists
                                </a>
                            </Link>
                        </Paragraph>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default SingleArtistPage