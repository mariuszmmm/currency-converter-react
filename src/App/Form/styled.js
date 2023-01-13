import styled from "styled-components";

export const StyledForm = styled.form`
   max-width: 560px;
   min-width: 400px;
   margin: 0 auto;
   padding: 0 10px;
`;

export const Contents = styled.fieldset`
   border: black 3px solid;
   padding: 10px 20px;
   border-radius: 5px;
   margin: 20px 0px;
   background-color: white;
   box-shadow: 0px 0px 50px 20px #000000;
`;


export const Input = styled.input`
    border: 1px solid #666;
    padding: 5px 10px;
    max-width: 200px;
    width: 100%;
    border-radius: 5px;
    font-size: 18px;
    text-align: right;
    margin-bottom: 10px;
    background-color: white;
`;

export const Button = styled.button`
   max-width: 500px;
   width: 100%;
   border: none;
   background-color: hsl(210, 65%, 20%);
   color: white;
   font-size: 20px;
   padding: 10px;
   border-radius: 5px;
   border: black 3px solid;
   margin-bottom: 20px;

   &:hover {
      cursor: pointer;
      background-color: hsl(210, 65%, 30%);
   }

   &:active {
    background-color: hsl(210, 65%, 40%);
   }
`;

export const Flags = styled.span`
   position: relative;

   &::before {
   background-image: url(${(props) => props.flag});
   background-position: center;
   box-shadow: 0 0 7px rgb(0 0 0 / 40%);
   content: '';
   height: 20px;
   left: 10px;
   top: 0;
   bottom: 0;
   width: 35px;
   position: absolute;
   transition: 0.2s;
}
`;