import { StyledSection, Content } from "./styled";

const Section = ({ title, body }) => (
   <StyledSection>
      <label>
         <Content>{title}</Content>
         {body}
      </label>
   </StyledSection>
);

export default Section;