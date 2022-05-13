import ButtonUI from './ButtonUI'
import Col from './Col'
import Container from './Container.js'
import Logo from './Logo.js'
import Nav from './Nav'
import NavOverlay from './NavOverlay'
import Row from './Row.js'
import styles from './header.module.scss'
import { useState } from 'react'

const Header = () => {
    const [isMenuVisible, setMenuVisible] = useState(false)

    return(
        <header className={styles.header}>
            {isMenuVisible &&
                <NavOverlay clickHandler={setMenuVisible}/>
            }
            <Container>
                <Row justifyContent="space-between" alignItems="center">
                    <Col xs="3" sm="3">
                        <Logo color="white" size={4}/>
                    </Col>
                    <Col xs="9" sm="9" textAlign="right">
                        <Nav mobile/>
                        <ButtonUI icon="menu" color="white"
                            clickHandler={() => {
                                setMenuVisible(true)
                            }}/>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header