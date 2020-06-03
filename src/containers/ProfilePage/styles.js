import styled from 'styled-components';

export const ProfileContainer = styled.div`
  @media (max-width: 768px) {
    .mainContent {
      flex-direction: column;
      padding: 0px;
    }
    .contentSection, .rightSideSection, .bookSection {
      width: 100%;
    }
    .rightSideSection {
      margin: 0;
    }
    .reviewContHeader {
      align-items: start;
    }
  }
`;
