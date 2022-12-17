import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Form from './App/Form';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <Form />
   </React.StrictMode>
);

reportWebVitals();
