import styled, { css } from "styled-components";

export const StyledLegend = styled.legend`
   background-color: ${({ theme }) => theme.color.prussianBlue};
   color: ${({ theme }) => theme.color.white};
   width: 100%;
   padding: 10px 20px;
   border-radius: 5px;
   border: black 3px solid;
   margin: 15px 0;
   background-color: ${({ theme }) => theme.color.prussianBlue};

   ${({ error }) => error && css`
      background-color: ${({ theme }) => theme.color.red};
   `};

   ${({ title }) => title && css`
   width: auto;
   `}
`;
