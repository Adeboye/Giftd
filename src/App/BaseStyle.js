import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @font-face {
        font-family: 'HeeboBlack';
        src: url('../assets/fonts/Heebo-Black.ttf') format('ttf');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'HeeboBold';
        src: url('../assets/fonts/Heebo-Bold.ttf') format('ttf');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'HeeboExtraBold';
        src: url('../assets/fonts/Heebo-ExtraBold.ttf') format('ttf');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'HeeboExtraLight';
        src: url('../assets/fonts/Heebo-ExtraLight.ttf') format('ttf');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'HeeboLight';
        src: url('../assets/fonts/Heebo-Light.ttf') format('ttf');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'HeeboMedium';
        src: url('../assets/fonts/Heebo-Medium.ttf') format('ttf');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'HeeboRegular';
        src: url('../assets/fonts/Heebo-Regular.ttf') format('ttf');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'HeeboSemiBold';
        src: url('../assets/fonts/Heebo-SemiBold.ttf') format('ttf');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'HeeboThin';
        src: url('../assets/fonts/Heebo-Thin.ttf') format('ttf');
        font-weight: normal;
        font-style: normal;
    }

    html, body, #root {
        height: 100%;
        min-height: 100%;
    }

    html {
        box-sizing: border-box;
        touch-action: manipulation;
    }

    body {
        -webkit-tap-highlight-color: transparent;
        line-height: 1.2;
        font-size: ${({ theme }) => theme.FONT_SIZES.BASE};
        font-weight: ${({ theme }) => theme.FONT_WEIGHTS.REGULAR}
    }

    #root {
        display: flex;
        flex-direction: column;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        font-weight: ${({ theme }) => theme.FONT_WEIGHTS.REGULAR}
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    ul, li, ol, dd, h1, h2, h3, h4, h5, h6, p {
        padding: 0;
        margin: 0;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-family: ${({ theme }) => theme.FONT.BOLD}
    }

    button {
        background: none;
        border: none;
    }

    body, select {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;
