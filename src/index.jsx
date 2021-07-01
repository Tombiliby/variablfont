import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import "./fonts/fontFace.css"
import MainLayout from './layout/MainLayout'
import Firebase from './layout/Firebase'


ReactDOM.render(
  <React.StrictMode>
    <MainLayout />
  </React.StrictMode>,
  document.getElementById('root')
);