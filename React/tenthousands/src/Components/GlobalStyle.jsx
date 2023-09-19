import styled, { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'OTEnjoystoriesBA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/OTEnjoystoriesBA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

  * {
    color: white

  }
  body {
    background-color: #5B2386;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "GmarketSansMedium";
  }
`

const Fonts = {
  FontStyle: css`
    font-family: "GmarketSansMedium";
    font-size: 24px;
  `,
  FontEnjoy: css`
    font-family: "OTEnjoystoriesBA";
    font-size: 36px;
  `
}

export default GlobalStyle;
export { Fonts };