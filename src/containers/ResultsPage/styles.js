import styled from 'styled-components';

export const ResultsContainer = styled.div`
  @media (max-width: 768px) {
    .mainContainer {
      flex-direction: column;
      padding: 15px 0px;
    }
    .sideSection {
      width: 100%;
      padding: 20px;
      margin: 0;
    }
    .mainSection {
      width: 100%;
      padding: 0px 20px 20px;
      margin: 0px;
    }
    .sectionHeader {
      flex-direction: column;
      align-items: start;
      justify-content: center;
      .ant-select {
        margin: 10px 0px;
        width: 200px;
      }
    }
    .cardContainer {
      flex-direction: column;
    }
    .cardContent {
      flex-direction: column;
      text-align: center;
    }
    .cardMeta {
      margin: 10px 0px;
    }
    .labelLink {
      align-items: center;
      margin: 10px 0px;
    }
    .sectionContent .ant-list-pagination {
      text-align: center !important;
    }
  }
`;
