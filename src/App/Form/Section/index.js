import { StyledSection, Content } from "./styled";

const Section = ({ title, body }) => (
  <StyledSection>
    <Content>{title}</Content>
    {body}
  </StyledSection>
);

export default Section;