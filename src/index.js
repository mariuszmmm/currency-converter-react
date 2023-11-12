import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from './GlobalStyle';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         <GlobalStyle />
         <App />
      </ThemeProvider>
   </React.StrictMode>
);

reportWebVitals();