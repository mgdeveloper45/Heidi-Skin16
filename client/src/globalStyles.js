import { createGlobalStyle } from "styled-components/macro";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`

${variables}

body {
  color: var(--black);
  

}
`;

export default GlobalStyle;
