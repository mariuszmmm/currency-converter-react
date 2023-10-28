import styled from "styled-components";

const StyledLegend = styled.legend`
   background-color: ${({ theme }) => theme.color.prussianBlue};
   color: ${({ theme }) => theme.color.white};
   padding: 10px 20px;
   border-radius: 5px;
   border: black 3px solid;
   margin-top: 15px;
`;

export default StyledLegend;