import { Fragment } from 'react'

import Header from './Header.js'
import Footer from './Footer.js'

export default function Layout({children}) {
    return(
        <Fragment>
            <Header />
                <main>
                    {children}
                </main>
            <Footer />
        </Fragment> 
    )
}