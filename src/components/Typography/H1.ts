import styled from '../../styles/styled-components';
import media from '../../styles/media';

const H1 = styled.h1`
  margin: 0;
  font-weight: ${({ theme }): number => theme.fontWeight.semiBold};
  font-size: 24px;
  color: ${({ theme }): string => theme.colors.veryDarkBlue};
  ${media.desktop} {
    font-size: 32px;
  }
`;

export default H1;
