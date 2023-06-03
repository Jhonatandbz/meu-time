import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from "./pages/"
import MainPage from "./pages/App"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/meutime' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
);

reportWebVitals();
