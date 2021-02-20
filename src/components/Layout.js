import React from 'react'
import Head from './Head'
import { ThemeProvider } from 'styled-components'

import { Nav } from '@components'
import { GlobalStyle, theme } from '@styles'



const Layout = (props) => {

    return (<>
        <Head />

        <div id="root">
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Nav />
                
                {props.children}
            </ThemeProvider>
        </div>
    </>)
}

export default Layout;