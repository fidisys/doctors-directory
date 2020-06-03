import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    .banner-content {
      flex-direction: column;
      align-items: center;
    }
    .banner-title {
      margin: 30px 0px;
    }
    .banner-image {
      margin: 20px 0px;
    }
    .tabCheckboxes {
      height: auto;
      .ant-checkbox-group-item {
        width: 100%;
      }
    }
    .searchBox, .inputGroup, .inputItem, .inputZip {
      width: 100%;
    }
    .inputGroup {
      flex-direction: column;
    }
    .inputZip {
      margin: 20px 0px;
    }
    .statesList {
      column-count: 2;
    }
  }
`;
