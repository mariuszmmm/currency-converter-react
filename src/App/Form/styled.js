import styled from "styled-components";

export const Input = styled.input`
   background: ${({ theme }) => theme.color.white};
   color: ${({ theme }) => theme.color.black};
   border: 1px solid ${({ theme }) => theme.color.Silver};
   padding: 5px 12px;
   min-width: 190px;
   width: 70%;
   border-radius: 5px;
   font-size: 18px;
   text-align: right;
   margin-bottom: 10px;

   @media(max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
      width: 100%;
   }
`;

export const Select = styled(Input)`
padding-right: 0;
`;

export const Flags = styled.span`
   position: relative;

   &::after {
      background-image: url(${({ flag }) => flag});
      background-position: center;
      box-shadow: ${({ flag }) => flag ? `4px 4px 6px rgb(0 0 0 / 90%)` : null};
      content: '';
      border: 1px solid ${({ theme }) => theme.color.silver};
      height: 20px;
      left: 10px;
      top: 0;
      bottom: 0;
      margin: auto 0;
      width: 28px;
      position: absolute;
      transition: 0.2s;
   }
`;