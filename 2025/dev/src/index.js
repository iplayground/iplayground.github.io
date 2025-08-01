import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LanguageRouter from './LanguageRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));

const isLocalhost = window.location.hostname === 'localhost';
const basename = isLocalhost ? '/' : '/2025';
root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/:lang/*" element={<LanguageRouter />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
