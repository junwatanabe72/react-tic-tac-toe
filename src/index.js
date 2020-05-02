import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Lato', 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, Sans-Serif;
    line-height: 1.5;
    font-size: 15px;
    font-weight: 400; 
  }
  body {
    padding: 0;
    margin: 0; 
  }
  .App {
    width: 100%;
    max-width: 350px;
    height: 250px;
    margin: 200px auto;
}
`


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
