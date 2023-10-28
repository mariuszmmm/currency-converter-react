import { createGlobalStyle } from "styled-components";
import background from "./waluta.png"

export const GlobalStyle = createGlobalStyle`
   html {
      box-sizing: border-box;
   }

   *, ::after, ::before {
      box-sizing: inherit;
   }

   body {
      background-color:${({ theme }) => theme.color.doveGray};
      font-family: "Lato", sans-serif;
      background-image: url("${background}");
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      user-select: none;
   }
`;