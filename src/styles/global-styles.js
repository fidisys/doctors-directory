import { createGlobalStyle } from 'styled-components';
// Abstracts
import * as palette from './variables';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
  @-ms-viewport {
  width: device-width;
  }
  html {
  box-sizing: border-box;
  font-size: 13pt;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  }

  body {
  -ms-overflow-style: scrollbar;
  line-height: 1;
  -webkit-text-size-adjust: none;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  background-color: ${palette.APP_BACKGROUND_COLOR} !important;
  }

  html, body, #root {
  width: 100%;
  height: 100%;
  }

  *, *:before, *:after {
  box-sizing: inherit;
  }

  html, body, div, span, applet, object,
  iframe, h1, h2, h3, h4, h5, h6, p, blockquote,
  pre, a, abbr, acronym, address, big, cite,
  code, del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var, b,
  u, i, center, dl, dt, dd, ol, ul, li, fieldset,
  form, label, legend, table, caption, tbody,
  tfoot, thead, tr, th, td, article, aside,
  canvas, details, embed, figure, figcaption,
  footer, header, hgroup, menu, nav, output, ruby,
  section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
  display: block;
  }

  ol, ul {
  list-style: none;
  }

  blockquote, q {
  quotes: none;
  }
  blockquote:before, blockquote:after, q:before, q:after {
  content: none;
  }
  input::-moz-focus-inner {
  border: 0;
  padding: 0;
  }
  input, select, textarea {
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  }
  body, input, select, textarea, button {
  font-family: ${palette.FONT_FAMILY};
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.65;
  }
  section {
  position: relative;
  }
  a {
  -moz-transition: color 0.2s ease-in-out;
  -webkit-transition: color 0.2s ease-in-out;
  -ms-transition: color 0.2s ease-in-out;
  transition: color 0.2s ease-in-out;
  text-decoration: none;
  }
  strong {
  font-weight: 600;
  }

  h1,h2,h3,h4,h5,h6 {
  line-height: 1.25;
  }

  h1 {
  font-size: 36px;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 26px;
  }

  h4 {
    font-size: 20px;
  }

  img {
    width: 100%;
  }

  p {
  font-family: ${palette.CONTENT_FONT_FAMILY};
  font-size: 16px;
  line-height: 1.5;
  }
  
  .ant-message-notice {
    text-align: right;
  }

  .ant-modal-mask {
    background-color: rgba(0, 0, 0, 0.70) !important;
  }
  .ant-modal-mask, .ant-modal-wrap {
    left: 65px !important;
  }
  .ant-modal {
    width: initial !important;
    max-width: 500px;
    top: 90px !important;
  }
  .ant-modal-content {
    border-radius: 0px !important;
  }
  .ant-modal-body {
    padding: 0px !important;
  }
  .ant-select-selection {
    min-height: 46px !important;
    &:focus {
      border-color: #15959A !important;
      box-shadow: none !important;
    }
    &:hover {
      border-color: #15959A !important;
    }
  }
  .ant-select-dropdown-menu-item {
    padding: 7px 14px !important;
  }
  .tags-selection {
    max-width: 100% !important;
  }
  .ant-tooltip {
    line-height: 1 !important;
  }
  .ant-tooltip-inner {
    min-height: 20px !important;
    font-size: 12px;
    font-weight: 600;
  }
  .ant-dropdown-menu-item {
    &:hover {
      background-color: #3b4ada14 !important;
    }
  }
  .ant-modal-header {
    background: initial !important;
    border-bottom: initial !important;
    .modal-title {
      font-size: 24px;
      color: #5860AF;;
      position: relative;
      padding-bottom: 12px;
      text-transform: capitalize;
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        max-width: 75px;
        height: 4px;
        border-radius: 2px;
        background-color: #CAC8F6;
        bottom: 0px;
        left: 5px;
      }
    }
  }
  .ant-modal-footer {
    padding: 16px 24px !important;
    border: initial !important;
  }
  .ant-btn {
    &.active, &:hover {
      color: #5860AF !important;
      border-color: #5860AF !important;
    }
  }
  .ant-btn-primary {
    background-color: #5860AF !important;
    border-color: #5860AF !important;
    &.active, &:hover {
      color: #fff !important;
    }
  }
  .ant-input {
    height:  46px !important;
    &:focus, &:hover {
      border: 1px solid #15959A !important;
      box-shadow: initial !important;
    }
  }
  .ant-modal-confirm-body-wrapper {
    padding: 25px;
  }
  .uppy-FileInput-btn {
    background-color: ${palette.APP_BRAND_COLOR};
    color: ${palette.WHITE_COLOR};
    border-radius: none;
  }

  .header {
    padding: 10px 35px;
    h1 {
      margin: 0;
    }
  }
  .resumeDetailsContainer {
    padding: 20px !important;
    .paragraph {
      margin-bottom: 15px;
    }
  }
  .cardContent {
    img {
      width: 160px;
      height: 160px;
      object-fit: cover;
    }
  }
  .statesList {
    column-count: 2;
  }
`;
