import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Click from './Context/gifClickContext';
import GifContext from './Context/GifContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GifContext>
      
      <Click>
        <App />
      </Click>
    </GifContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

