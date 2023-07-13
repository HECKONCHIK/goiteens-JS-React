import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const great = (<div>Hello</div>)

// console.log(great);

// root.render(great);



root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();