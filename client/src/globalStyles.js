import { createGlobalStyle } from "styled-components/macro";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`

${variables}

body {
  color: var(--black);
  font-size:var(--fz-md);
}
`;

export default GlobalStyle;
