import * as styledComponents from 'styled-components';

export interface Theme {
  colors: {
    red: string;
    cyan: string;
    orange: string;
    blue: string;
    veryDarkBlue: string;
    grayishBlue: string;
    veryLightGray: string;
  };
  fontSizes: {
    base: string;
  };
  fontWeight: {
    light: 200;
    regular: 400;
    semiBold: 600;
  };
}
const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export {
  css, createGlobalStyle, keyframes, ThemeProvider,
};
export default styled;
