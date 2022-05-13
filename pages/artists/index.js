import Layout from '../../components/Layout'
import Heading from '../../components/Heading'
import {getArtists} from '../../lib/api' 
import Row from '../../components/Row'
import Col from '../../components/Col'
import Image from 'next/image'
import Link from 'next/link'
import Paragraph from '../../components/Paragraph'
import Container from '../../components/Container'

export async function getStaticProps() {
    const artists = await getArtists()

    return {
        props: {
            artists
        }
    }
}

const ArtistsLandingPage = ({artists}) => {
    return(
        <Layout>
            <Container>  
                <Row>
                    <Col xs="12" sm="12">
                        <Heading level="1">Artists</Heading>
                    </Col>
                </Row>
                <Row>
                    {artists.map((artist, index) => {
                        const {title, slug, featuredImage} = artist.node;
                        const {sourceUrl, altText, mediaDetails} = featuredImage.node;
                        return (
                            <Col key={index} xs="6" sm="6" marginBottom="2">
                                <Image
                                    src={sourceUrl}
                                    alt={altText}
                                    height={mediaDetails.height}
                                    width={mediaDetails.width}
                                />
                                <Heading level="3">{title}</Heading>
                                    <Paragraph>
                                        <Link href={`/artists/${slug}`}>
                                            <a>
                                                Read More
                                            </a>
                                        </Link>
                                    </Paragraph>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </Layout>
    )
}

export default ArtistsLandingPage