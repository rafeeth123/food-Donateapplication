import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from "./Components/NewLogin/configureStore"

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
