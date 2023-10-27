import styled from "styled-components";

export const StyledForm = styled.form`
   max-width: 560px;
   margin: 0 auto;
`;

export const Contents = styled.fieldset`
   background: ${({ theme }) => theme.color.primary};
   color: ${({ theme }) => theme.color.quaternary};
   border: solid 3px ${({ theme }) => theme.color.quaternary};
   padding: 10px 5%;
   border-radius: 5px;
   margin: 20px 0px;
   box-shadow: 0px 0px 50px 20px ${({ theme }) => theme.color.quaternary};
   margin-right: calc(+10px);
   margin-left: calc(+10px);
`;

export const Input = styled.input`
   background: ${({ theme }) => theme.color.primary};
   color: ${({ theme }) => theme.color.quaternary};
   border: 1px solid ${({ theme }) => theme.color.secondary};
   padding: 5px 10px;
   min-width: 190px;
   width: 60%;
   border-radius: 5px;
   font-size: 18px;
   text-align: right;
   margin-bottom: 10px;

   @media(max-width: ${({ theme }) => theme.breakpoint.mobileMin}px){
      width: 100%;
   }
`;

export const Button = styled.button`
   max-width: 500px;
   width: 100%;
   border: none;
   background-color: hsl(210, 65%, 20%);
   color: ${({ theme }) => theme.color.primary};
   font-size: 20px;
   padding: 10px;
   border-radius: 5px;
   border: solid 3px ${({ theme }) => theme.color.quaternary};
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
      box-shadow: 4px 4px 6px rgb(0 0 0 / 90%);
      content: '';
      height: 20px;
      left: 10px;
      top: 0;
      bottom: 0;
      margin: auto 0;
      width: 35px;
      position: absolute;
      transition: 0.2s;
   }
`;