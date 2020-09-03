import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/app.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import { BlogContextProvider } from './context/BlogContext'

ReactDOM.render(
  <Router>
    <BlogContextProvider>
      <App />
    </BlogContextProvider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
