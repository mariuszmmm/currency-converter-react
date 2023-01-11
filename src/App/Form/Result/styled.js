import styled, { css } from "styled-components";

export const Container = styled.div`
	margin: 15px;
	height: 40px;
	font-size: 40px;
	text-align: center;
	font-weight: 700;
	text-shadow: grey 1px 1px 10px;

   ${({ outdated }) => outdated && css`
      color: rgba(128, 128, 128, 0.397)
   `}
`;