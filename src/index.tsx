import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root')!); //A exclamação indica ao React a garantia de que o doccument.GetElementById() não vai retonrar nulo
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 