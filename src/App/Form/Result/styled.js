import styled, { css } from "styled-components";

export const Container = styled.div`
   margin: 10px;
   height: 40px;
   width: auto;
   font-size: 30px;
   text-align: center;
   font-weight: 700;
   text-shadow: 1px 1px 10px ${({ theme }) => theme.color.black};
   padding: 0;
   padding: 0 35px;
   color: ${({ theme }) => theme.color.red};;

   ${({ outdated }) => outdated && css`
      color: transparent;
      text-shadow: 1px 2px 6px ${({ theme }) => theme.color.grey};
   `}
`;