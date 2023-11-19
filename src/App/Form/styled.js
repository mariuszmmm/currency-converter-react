import styled, { css } from "styled-components";

export const Input = styled.input`
   background: ${({ theme }) => theme.color.white};
   color: ${({ theme }) => theme.color.black};
   border: 1px solid ${({ theme }) => theme.color.Silver};
   padding: 5px 10px;
   min-width: 230px;
   width: 70%;
   border-radius: 5px;
   font-size: 18px;
   margin-bottom: 10px;

   ${({ rate }) => rate && css`
   text-align: right;
   `}

   @media(max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
      width: 100%;
   }
`;

export const Select = styled(Input)`
padding-left: 50px;
`;