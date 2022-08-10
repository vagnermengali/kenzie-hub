import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import { GlobalStyles } from './style/global';
import  { ResetCSS }  from './style/global';
import UserProvider from './context/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <GlobalStyles />
      <ResetCSS />
      <App />
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
