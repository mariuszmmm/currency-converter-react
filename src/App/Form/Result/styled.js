import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 10px 0;
  width: auto;
  font-size: 30px;
  text-align: center;
  font-weight: 700;
  text-shadow: 1px 1px 5px ${({ theme }) => theme.color.doveGray};
  padding: 0;
  color: ${({ theme }) => theme.color.red};

  ${({ outdated }) => outdated && css`
    transition: 1s;
    opacity: 0;
  `}
`;

export const AmountInfo = styled.p`
  margin: 10px 0;
  font-size: 20px;
  color: ${({ theme }) => theme.color.black};
`;

export const ResultInfo = styled(AmountInfo)`
  font-size: 35px;
  color: ${({ theme }) => theme.color.red};
`;