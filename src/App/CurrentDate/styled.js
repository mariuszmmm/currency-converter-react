import styled from "styled-components";

export const ContainerDate = styled.div`
   margin-bottom: 25px;
`;

export const Date = styled.p`
   font-family: 'Roboto Mono', monospace;
   font-size: 13px;
   margin: 0;
   text-align: right;
   color: ${({ theme }) => theme.color.black};
`;