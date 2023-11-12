import styled from "styled-components";

export const Input = styled.input`
   background: ${({ theme }) => theme.color.white};
   color: ${({ theme }) => theme.color.black};
   border: 1px solid ${({ theme }) => theme.color.Silver};
   padding: 5px 12px;
   min-width: 190px;
   width: 60%;
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

export const Button = styled.button`
   max-width: 500px;
   width: 100%;
   border: none;
   background-color: ${({ theme }) => theme.color.prussianBlue};
   color: ${({ theme }) => theme.color.white};
   font-size: 20px;
   padding: 10px;
   border-radius: 5px;
   border: solid 3px ${({ theme }) => theme.color.black};
   margin-bottom: 20px;
   transition: 0.1s;

   &:hover {
      cursor: pointer;
      filter: brightness(120%);
   }

   &:active {
      filter: brightness(140%);
   }
`;

export const Flags = styled.span`
   position: relative;

   &::after {
      background-image: url(${({ flag }) => flag});
      background-position: center;
      box-shadow: ${({ flag }) => flag ? `4px 4px 6px rgb(0 0 0 / 90%)` : null};
      content: '';
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