import styled from "styled-components";

export const Flags = styled.span`
   position: relative;

   &::after {
      background-image: url(${({ flag }) => flag});
      background-position: center;
      box-shadow: ${({ flag }) => flag ? `4px 4px 6px rgb(0 0 0 / 90%)` : null};
      content: '';
      border: ${({ flag }) => flag ? `1px solid black` : null};
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