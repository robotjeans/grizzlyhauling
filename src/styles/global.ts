import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        background: #f5f7fd;
        display: flex;
        position: relative;
        flex-direction: column;
        font-family: Poppins;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
    }
`;

export default GlobalStyles;
