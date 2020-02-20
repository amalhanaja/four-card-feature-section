import styled from '../../styles/styled-components';

const H1 = styled.h1`
  margin: 0;
  font-weight: ${({ theme }): number => theme.fontWeight.semiBold};
  font-size: 24px;
  color: ${({ theme }): string => theme.colors.veryDarkBlue};
`;

export default H1;
