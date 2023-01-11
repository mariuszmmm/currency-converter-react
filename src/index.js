import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './App/Form';
import GlobalStyle from './GlobalStyle';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <GlobalStyle />
      <Form />
   </React.StrictMode>
);

reportWebVitals();