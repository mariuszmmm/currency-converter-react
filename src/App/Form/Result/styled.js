import styled, { css } from "styled-components";

export const Container = styled.div`
   margin: 10px;
   height: 40px;
   width: auto;
   font-size: 30px;
   text-align: center;
   font-weight: 700;
   text-shadow: grey 1px 1px 10px;
   padding: 0;
   padding: 0 35px;
   color: red;

   ${({ outdated }) => outdated && css`
      color: rgba(128, 128, 128, 0.2)
   `}
`;