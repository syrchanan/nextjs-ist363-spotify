import { Fragment } from 'react'

import Header from './Header.js'
import Footer from './Footer.js'
import Main from './Main.js'

export default function Layout({children}) {
    return(
        <Fragment>
            <Header />
                <Main>
                    {children}
                </Main>
            <Footer />
        </Fragment> 
    )
}