import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './components/themeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <body className="transition-all">
        <App />
      </body>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
