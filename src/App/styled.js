import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  max-width: 710px;
  min-width: 300px;
  margin: 0 auto;
`;

export const Contents = styled.fieldset`
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  border: solid 3px ${({ theme }) => theme.color.black};
  padding: 10px 5%;
  border-radius: 5px;
  margin: 20px 0px;
  box-shadow: 0px 0px 50px 20px ${({ theme }) => theme.color.black};
  margin-right: calc(+10px);
  margin-left: calc(+10px);
`;

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

export const Button = styled.button`
  width: 100%;
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
