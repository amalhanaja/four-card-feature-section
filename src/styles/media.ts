const customMediaQuery = (minWidth: string): string => `
  @media (min-width: ${minWidth})
`;

const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery('1028px'),
};

export default media;
