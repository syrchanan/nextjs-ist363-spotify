import Col from "./Col"
import Container from "./Container"
import Section from './Section'
import Row from "./Row"
import Image from "next/image"
import Paragraph from "./Paragraph"
import Heading from './Heading'
import Button from "./Button"

const Showcase = () => {
    return(
        <Section>
            <Container>
                <Row>
                    <Col xs="4" sm="4" md="3" alignItems="center">
                        <Image
                            src={`/images/led-zeppelin-ii.jpg`}
                            alt="Led Zeppelin II"
                            width="400"
                            height="400"
                        />
                    </Col>
                    <Col xs="8" sm="8" md="9" flexDirection="column" justifyContent="center">
                        <Heading level="1" marginBottom="1">
                            Listening is Everything.
                        </Heading>
                        <Paragraph marginBottom="1">
                            Millions of songs and podcasts. No credit card needed.
                        </Paragraph>
                        <Button label="Get Spotify Free" type="primary"/>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default Showcase