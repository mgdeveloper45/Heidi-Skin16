import { createGlobalStyle } from "styled-components/macro";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`

${variables}

h1 { 
  font-size: var(--fs-4xl);
  line-height: var(--line-4xl);
  font-weight: 700;
}
h2{
  font-size: var(--fs-3xl);
  line-height: var(--line-3xl);
  font-weight: 700;
}
h3{
  font-size: var(--fs-2xl);
  line-height: var(--line-2xl);
  font-weight: 700;

}
h4{
  font-size: var(--fs-xl);
  line-height: var(--line-xl);
  font-weight: 700;
}
h5{
  font-size: var(--fs-lg);
  line-height: var(--line-lg);
  font-weight: 700;
}
h6{
  font-size: var(--fs-base);
  line-height: var(--line-base);
  font-weight: 700;
}


p {
  font-size: var(--fs-lg);
  line-height: var(--line-lg);
}


`;

export default GlobalStyle;
