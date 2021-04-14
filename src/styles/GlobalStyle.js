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
    --color-white: #dadada;

    --color-bg: var(--color-dark-blue);
    --color-primary: var(--color-white);
    --color-highlight: var(--color-yellow);

    --font-sans: 'Open Sans', serif;
    --font-mono: 'Roboto Mono', arial;
  }

  #root {
    font-size: 14px;
    background-color: var(--color-bg);
    color: var(--color-primary);
    font-family: var(--font-sans);
  }

  a {
    color: var(--color-primary);
    text-decoration: none;

    &:hover {
      color: var(--color-yellow);
    }
  }
`


export default globalStyle

