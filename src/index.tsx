import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from "./pages/"
import MainPage from "./pages/App"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MainPage></MainPage>
  </React.StrictMode>
);

reportWebVitals();
