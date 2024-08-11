import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importă fișierul CSS
import App from './App'; // Importă componenta principală

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
