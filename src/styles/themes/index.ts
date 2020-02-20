import { Theme } from '../styled-components';

const DefaultTheme: Theme = {
  colors: {
    background: '#282c34',
    primary: '#61dafb',
    textPrimary: '#ffffff',
    textSecondary: '#ededed',
    red: 'hsl(0, 78%, 62%)',
    cyan: 'hsl(180, 62%, 55%)',
    orange: 'hsl(34, 97%, 64%)',
    blue: 'hsl(212, 86%, 64%)',
    veryDarkBlue: 'hsl(234, 12%, 34%)',
    grayishBlue: 'hsl(229, 6%, 66%)',
    veryLightGray: 'hsl(0, 0%, 98%)',
  },
  fontSizes: {
    base: '15px',
  },
  fontWeight: {
    regular: 400,
    semiBold: 600,
    light: 200,
  },
};
export default DefaultTheme;
