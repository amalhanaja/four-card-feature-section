const customMediaQuery = (minWidth: string): string => `
  @media (min-width: ${minWidth})
`;

const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery('1280px'),
};

export default media;
