import React from 'react';
import App from './App';
import Login from './login';
import Movies from './Movies';
import Register from './register';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App/>} />
        <Route exact path='/login' element= {<Login/>}/>
        <Route exact path='/register' element= {<Register/>}/>
        <Route exact path='/movies' element= {<Movies/>}/>
      </Routes>
    </BrowserRouter>
  </>
);
