import Layout from '../../components/Layout'
import Heading from '../../components/Heading'
import {getAlbums} from '../../lib/api'
import Row from '../../components/Row'
import Col from '../../components/Col'
import Container from '../../components/Container'
import Image from 'next/image'
import Link from 'next/link'
import Paragraph from '../../components/Paragraph'

export async function getStaticProps() {
    const albums = getAlbums()

    return {
        props: {
            albums
        }
    }
}

const AlbumsPage = ({albums}) => {
    return(
        <Layout>
            <Container>
                <Heading level="1">Albums</Heading>
                <Row>
                    {albums.map((album, index) => {
                        const {featuredImage, title, slug} = album;
                        const {src, alt, width, height} = featuredImage;

                        return(
                            <Col key={index} xs="6" sm="4">
                                <Image
                                    src={`/images/${src}`}
                                    alt={alt}
                                    width={width}
                                    height={height}
                                />
                                <Heading level="3">{title}</Heading>
                                <Paragraph>
                                    <Link href={`/albums/${slug}`}>
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

export default AlbumsPage;