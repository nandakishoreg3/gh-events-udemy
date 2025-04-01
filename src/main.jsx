import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

//This is important! made this changes to test the fork behaviour in pull request events
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
