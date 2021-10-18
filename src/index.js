import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {NavLink, BrowserRouter} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
    <BrowserRouter>
      <nav className="nav"> 
      <NavLink className='link' exact to="/" activeStyle={{backgroundColor: '#FFB254'}}>Расчет</NavLink>  
      <NavLink className='link' to="/graph" activeStyle={{backgroundColor: '#FFB254'}}>График функции</NavLink>  
      <NavLink className='link' to="/method" activeStyle={{backgroundColor: '#FFB254'}}>Описание метода</NavLink>
      </nav>    
    <App/>
    </BrowserRouter>
    <p style = {{position: 'absolute', bottom: '15px', right: '15px',  backgroundColor:'#FFB254',border: '2px solid #FF9054', color: "white "}}>Автор: Куприянов В. А.</p>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
