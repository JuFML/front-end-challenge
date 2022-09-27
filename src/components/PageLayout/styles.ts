import styled from 'styled-components';

import { SideMenu as DefaultSideMenu } from '$/components/SideMenu';
import { from } from '$/styles/utils/responsive';

export const Container = styled.div`
  display: flex;
  height: 100vh;

  @media (max-width: 1060px) {
    flex-direction: column;
  }
`;

export const SideMenu = styled(DefaultSideMenu)`
  flex-shrink: 0;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-inline: 2.5rem;

  ${from['tabletLandscape']} {
    padding-inline: 6rem;
  }

  @media (max-width: 510px) {
    padding-inline: 1.5rem;
  }

  @media (max-width: 380px) {
    padding-inline: 0.5rem;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 64rem;
`;
