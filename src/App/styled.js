import styled from "styled-components";

export const StyledForm = styled.form`
   max-width: 560px;
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
