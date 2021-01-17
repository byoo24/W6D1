import React from 'react'
import Header from './Header'

import { Nav } from '@components'

import { GlobalStyle } from '@styles'



const layout = (props) => {

    return (<>
        <GlobalStyle />

        <Header />
        <Nav />

        <div id="root">
            {props.children}
        </div>
    </>)
}

export default layout;