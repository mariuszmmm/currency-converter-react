import styled from "styled-components";

export const theme = {
   colors: {
      background: "white",
      color: "black"
   },
};

export const StyledForm = styled.form`
   max-width: 560px;
   margin: 0 auto;
`;

export const Contents = styled.fieldset`
   background-color: ${(props) => props.theme.colors.background};
   color: ${(props) => props.theme.colors.color};
   border: black 3px solid;
   padding: 10px 5%;
   border-radius: 5px;
   margin: 20px 0px;
   box-shadow: 0px 0px 50px 20px #000000;
   margin-right: calc(+10px);
   margin-left: calc(+10px);
`;

export const Input = styled.input`
   background-color: white;
   color: black;
   border: 1px solid #666;
   padding: 5px 2px;
   min-width: 190px;
   width: 60%;
   border-radius: 5px;
   font-size: 18px;
   text-align: right;
   margin-bottom: 10px;

   @media(max-width: 370px){
      width: 100%;
   }
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

   &::after {
   background-image: url(${({ flag }) => flag});
   background-position: center;
   box-shadow: 0 0 7px rgb(0 0 0 / 40%);
   content: '';
   height: 20px;
   left: 10px;
   top: 0;
   bottom: 0;
   margin: auto 0;
   width: 35px;
   position: absolute;
   transition: 0.2s;
}
`;