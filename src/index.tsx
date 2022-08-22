import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import { GlobalStyles } from './style/global';
import  { ResetCSS }  from './style/global';
import ProviderUser from "./context/userContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProviderUser>
        <GlobalStyles />
        <ResetCSS />
        <App />
      </ProviderUser>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
