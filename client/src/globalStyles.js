import { createGlobalStyle } from "styled-components/macro";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`

${variables}

body {
  color: var(--black);
  

}
h1 { 
  font-size: var(--fs-3xl);
  line-height: var(--line-3xl);
  font-weight: 700;
  font-style: normal;
}
h2{
  font-size: var(--fs-2xl);
  line-height: var(--line-2xl);
}
h3{
  font-size: var(--fs-xl);
  line-height: var(--line-xl);

}
h4{
  font-size: var(--fs-lg);
  line-height: var(--line-lg);
}
h5{
  font-size: var(--fs-base);
  line-height: var(--line-base);
}

p {
  font-size: var(--fs-base);
  line-height: var(--line-base);
}
`;

export default GlobalStyle;
