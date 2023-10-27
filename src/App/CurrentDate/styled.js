import styled from "styled-components";

export const ContainerDate = styled.div`
   margin-bottom: 25px;
`;

export const Date = styled.div`
   font-family: 'Roboto Mono', monospace;
   font-size: 13px;
   text-align: right;
   color: ${({ theme }) => theme.color.quaternary};
`;