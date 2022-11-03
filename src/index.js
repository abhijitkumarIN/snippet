import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import styled from "styled-components"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastContainerCostume = styled(ToastContainer)`
  margin: auto !important;
  @media only screen and (max-width: 750px) {
    width: 80%;
    font-size: 14px;
    margin-top: 50px !important;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <div className="grid">
      <ToastContainerCostume
      position="top-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
     </div>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);



reportWebVitals();
