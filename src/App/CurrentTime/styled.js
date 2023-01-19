import styled from "styled-components";

export const Date = styled.p`
   font-family: 'Roboto Mono', monospace;
   font-size: 13px;
   margin: 0 5px 25px;
   text-align: right;
   color: ${(props) => props.theme.colors.color};
`;