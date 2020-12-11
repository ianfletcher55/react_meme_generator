import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import './style.css';
import { BrowserRouter, Route } from 'react-router-dom';
import MemeGenerator from './MemeGenerator';
import AllMemes from './AllMemes';



ReactDOM.render(<App />, document.getElementById('root')
);