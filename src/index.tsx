import React from 'react';
import ReactDOM from 'react-dom/client';
import { registerLicense } from '@syncfusion/ej2-base';
import App from './App';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NAaF5cWWJCf0x0RHxbf1x0ZFRGallSTnZZUiweQnxTdEZiW31ccXdWRmRaUEB2Ww==');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
