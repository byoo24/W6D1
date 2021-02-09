import { createGlobalStyle } from 'styled-components'

import Reset from '@styles'
import Fonts from './fonts'


// color theme: https://www.behance.net/gallery/74526039/Sanlorenzo-Yacht?tracking_source=curated_galleries_list

const GlobalStyle = createGlobalStyle`
    ${Reset};
    ${Fonts};

    :root {
        --color-bunting: #111D40;
        --color-regal-blue: #025373;
        --color-mosque: #025E73;
        --color-summer-creme: #F2D95C;
        --color-cream-can: #F2C166;

        --color-bg: var(--color-bunting);
        --color-primary: var(--color-summer-creme);

        --font-sans: 'Open Sans', serif;
        --font-mono: 'Roboto Mono', arial;
    }

    body {
        font-size: 14px;
        background-color: var(--color-bg);
        color: var(--color-primary);
        font-family: var(--font-sans);
    }
`


export default GlobalStyle

