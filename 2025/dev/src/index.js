import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LanguageRouter from './LanguageRouter';
import { HashRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/:lang/*" element={<LanguageRouter />} />
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
