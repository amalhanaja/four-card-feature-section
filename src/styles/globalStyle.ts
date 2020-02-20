import { createGlobalStyle } from './styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-size: ${({ theme }): string => theme.fontSizes.base};
    -webkit-font-smoothing: antialiased;
    background: ${({ theme }): string => theme.colors.veryLightGray};
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default GlobalStyle;
