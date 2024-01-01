import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Provider } from 'react-redux'; 
import dashboardStore from './Redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={dashboardStore}> {/* Provide the Redux store */}
    <App />
</Provider>,
);