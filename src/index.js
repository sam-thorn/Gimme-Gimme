import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './client/components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// BELOW IS WHAT WE USUALLY HAVE IN OUR INDEX.JS FILE:
// const server = require('./server')

// const port = process.env.PORT || 3000

// server.listen(port, () => {
//   // eslint-disable-next-line no-console
//   console.log('Listening on port', port)
// })