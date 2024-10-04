import { StrictMode } from 'react';
import { render } from 'react-dom'; // This is correct for React 17
import App from './App.jsx';
import './index.css';

// Add this code to define global for the browser
if (typeof global === 'undefined') {
  window.global = window; // Define global for browser
}

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
