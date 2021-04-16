import { createGlobalStyle } from 'styled-components'

import Reset from './reset'
import Fonts from './fonts'


// color theme: https://www.behance.net/gallery/74526039/Sanlorenzo-Yacht?tracking_source=curated_galleries_list

const globalStyle = createGlobalStyle`
  ${Reset};
  ${Fonts};

  :root {
    --color-dark-blue: #041733;
    --color-regal-blue: #025373;
    --color-teal: #025E73;
    --color-yellow: #F2D95C;
    --color-orange: #F2C166;
    --color-white: #e2e5ff;
    --color-gray: #afb3cf;

    --color-bg: var(--color-dark-blue);
    --color-main: var(--color-white);
    --color-text: var(--color-gray);
    --color-highlight: var(--color-yellow);

    --font-sans: 'Open Sans', serif;
    --font-mono: 'Roboto Mono', arial;
  }

  #root {
    font-size: 14px;
    background-color: var(--color-bg);
    color: var(--color-text);
    font-family: var(--font-sans);
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--color-main);
  }

  a {
    color: var(--color-main);
    text-decoration: none;

    &:hover {
      color: var(--color-yellow);
    }
  }
`


export default globalStyle

