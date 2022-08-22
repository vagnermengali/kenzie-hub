import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --color-primary: #FF577F;
  --color-primary-focus: #FF427F;
  --color-primary-negative: #59323F;
  --gray-4: #121214;
  --gray-3: #212529;
  --gray-2: #343B41;
  --gray-1: #868E96;
  --gray-0: #F8F9FA;
  --white: #FFFFFF;
  --negative: #E83F5B;
  --sucess: #3FE864;
  --transparent: #ffffff00;
  --shadow: rgba(0, 0, 0, 0.25);
}
  html, body, #root {
    width: 100%;
    height: 100%;
    font-family: Inter, sans-serif;
    background-color: var(--gray-4);
  }

  a, button {
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }

  `

export const ResetCSS = createGlobalStyle`

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
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
  body {
    line-height: 1;
  }
  ::-webkit-scrollbar {
  width: 7px;
  }
  ::-webkit-scrollbar-track {
    background: var(--gray-4);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--gray-2);
    border-radius: 20px;     
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`
  
