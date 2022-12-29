import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '../src/styles/index.css';
import App from './App.jsx';
import TimeSheetProvider from './context/TimeSheetProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <TimeSheetProvider>
    <App /> 
    </TimeSheetProvider>
    </BrowserRouter> 
  </React.StrictMode>
);