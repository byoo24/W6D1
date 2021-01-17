import React from 'react'
import Header from './Header'
import { ThemeProvider } from 'styled-components'


import { GlobalStyle } from '@styles'



const Layout = (props) => {

    return (<>
        <GlobalStyle />

        <Header />

        <div id="root">
            {props.children}
        </div>
    </>)
}

export default Layout;