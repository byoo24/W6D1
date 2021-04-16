import React from 'react'
import Head from './Head'
import styled, { ThemeProvider } from 'styled-components'

import { Nav } from '@components'
import { GlobalStyle, theme } from '@styles'


const StyledLayout = styled.div`
  min-height: 100vh;
`


const StyledMain = styled.main`
  margin: 0 auto;
  max-width: ${p => theme.container.large}px;
`



const Layout = (props) => {

    return (<>
        <Head />

        <StyledLayout id="root">
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Nav />

                <StyledMain>
                  {props.children}
                </StyledMain>
            </ThemeProvider>
        </StyledLayout>
    </>)
}

export default Layout;