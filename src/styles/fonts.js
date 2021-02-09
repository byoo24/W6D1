import { css } from "styled-components"

import OpenSansBoldTTF from '@fonts/open-sans-bold.ttf';
import OpenSansItalicTTF from '@fonts/open-sans-italic.ttf';
import OpenSansRegularTTF from '@fonts/open-sans-regular.ttf';
import RobotoMonoBoldTTF from '@fonts/roboto-mono-bold.ttf';
import RobotoMonoItalicTTF from '@fonts/roboto-mono-italic.ttf';
import RobotoMonoRegularTTF from '@fonts/roboto-mono-regular.ttf';

const openSansFont = {
    family: 'Open Sans',
    normal: {
        400: [OpenSansRegularTTF],
        700: [OpenSansBoldTTF]
    }
}

const openSansItalicFont = {
    family: 'Open Sans',
    italic: {
        400: [OpenSansItalicTTF],
    }
}

const robotoMonoFont = {
    family: 'Roboto Mono',
    normal: {
        400: [RobotoMonoRegularTTF],
        700: [RobotoMonoBoldTTF],
    }
}

const robotoMonoItalicFont = {
    family: 'Roboto Mono',
    italic: {
        400: [RobotoMonoItalicTTF],
    }
}

const createFontFace = (font, style='normal') => {
    let fontFace = '';

    Object.entries(font[style]).forEach(([weight, url]) => {
        fontFace += `
            @font-face {
                font-family: '${font.family}';
                src: url(${url}) format('woff2');
                font-weight: ${weight};
                font-style: ${style};
            }
        `;
    })

    return fontFace;
}

const fonts = css`
    ${createFontFace(openSansFont)}
    ${createFontFace(openSansItalicFont, 'italic')}
    ${createFontFace(robotoMonoFont)}
    ${createFontFace(robotoMonoItalicFont, 'italic')}
`;

export default fonts;