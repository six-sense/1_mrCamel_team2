import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
* {
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  user-select: none;
  -webkit-tap-highlight-color:rgba(255,255,255,0);
  -webkit-touch-callout: none;
}
button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
img {
  object-fit: cover;
}
input[type='checkbox'] {
  cursor: pointer;
}
button {
  cursor: pointer;
}
ul,li {
  list-style: none;
}
a {
  text-decoration: none;
  cursor: pointer;
}
html {
  overflow-x: hidden;
}
`;
export default GlobalStyle;
