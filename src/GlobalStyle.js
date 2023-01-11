import { createGlobalStyle } from "styled-components";
import background from "./waluta.png"

const GlobalStyle = createGlobalStyle`
html {
   box-sizing: border-box;
}

*, ::after, ::before {
   box-sizing: inherit;
}

body {
   background-color: hsl(0, 0%, 15%);
   font-family: "Lato", sans-serif;
   background-image: url("${background}");
   background-repeat: no-repeat;
   background-size: cover;
   background-attachment: fixed;
}
`;

export default GlobalStyle;