import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LanguageRouter from './LanguageRouter';
import { HashRouter } from 'react-router-dom';
import App from './App';

const isLocalhost = window.location.hostname === 'localhost';
const basename = isLocalhost ? '/' : '/2025';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/:lang/*" element={<LanguageRouter />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
