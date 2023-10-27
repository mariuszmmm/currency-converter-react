import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './App/Form';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from './GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         <GlobalStyle />
         <Form />
      </ThemeProvider>
   </React.StrictMode>
);

reportWebVitals();