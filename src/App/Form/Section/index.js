import { StyledSection, Content } from "./styled";

export const Section = ({ title, body }) => (
  <StyledSection>
    <Content>{title}</Content>
    {body}
  </StyledSection>
);