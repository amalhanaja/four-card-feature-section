import * as React from 'react';
import styled, { ThemeProvider } from '../../styles/styled-components';
import DefaultTheme from '../../styles/themes';
import GlobalStyle from '../../styles/globalStyle';
import H1 from '../../components/Typography/H1';
import Feature from '../../components/Feature';
import IconCalculator from '../../images/icon-calculator.svg';
import IconSupervisor from '../../images/icon-supervisor.svg';
import IconKarma from '../../images/icon-karma.svg';
import IconTeamBuilder from '../../images/icon-team-builder.svg';
import media from '../../styles/media';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 88px;
  padding-left: 24px;
  padding-right: 24px;
  max-width: 375px;
  margin: auto;
  .attribution {
    color: ${({ theme }): string => theme.colors.grayishBlue};
    text-align: center;
    a {
      text-decoration: none;
      color: ${({ theme }): string => theme.colors.veryDarkBlue};
      font-weight: ${({ theme }): number => theme.fontWeight.semiBold};
    }
  }
  ${media.desktop} {
    max-width: 960px;
    footer {
      position: absolute;
      bottom: 0;
    }
  }
`;

const Tagline1 = styled(H1)`
  font-weight: ${({ theme }): number => theme.fontWeight.light};
`;
const Description = styled.p`
  color: ${({ theme }): string => theme.colors.grayishBlue};
  text-align: center;
  font-size: 16px;
  line-height: 1.5;
  max-width: 576px;
`;

const FeatureSection = styled.section`
  margin-top: 32px;
  margin-bottom: 44px;
  display: flex;
  flex-direction: column;
  ${media.desktop} {
    flex-direction: row;
    align-items: center;
  }
`;

const App: React.FC = () => (
  <ThemeProvider theme={DefaultTheme}>
    <GlobalStyle />
    <Wrapper>
      <Tagline1>Reliable, efficient delivery</Tagline1>
      <H1>Powered by Technology</H1>
      <Description>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </Description>
      <FeatureSection>
        <Feature
          title="Supervisor"
          description="Monitors activity to identify project roadblocks"
          icon={IconSupervisor}
          borderTopColor={DefaultTheme.colors.cyan}
        />
        <section style={{ display: 'flex', flexDirection: 'column' }}>
          <Feature
            title="Team Builder"
            description="Scans our talent network to create the optimal team for your project"
            icon={IconTeamBuilder}
            borderTopColor={DefaultTheme.colors.red}
          />
          <div />
          <Feature
            title="Karma"
            description="Regularly evaluates our talent to ensure quality"
            icon={IconKarma}
            borderTopColor={DefaultTheme.colors.orange}
          />
        </section>
        <Feature
          title="Calculator"
          description="Uses data from past projects to provide better delivery estimates"
          icon={IconCalculator}
          borderTopColor={DefaultTheme.colors.blue}
        />
      </FeatureSection>
      <footer>
        <p className="attribution">
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a
            href="https://amalcodes.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alfian Akmal Hanantio
          </a>
          .
        </p>
      </footer>
    </Wrapper>
  </ThemeProvider>
);

export default App;
