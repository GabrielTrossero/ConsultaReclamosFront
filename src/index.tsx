import React from 'react';
import ReactDOM from 'react-dom';
import {ToastContainer} from 'react-toastify';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import RedmineIndex from './components/Redmine/RedmineIndex'; //importo el componente y lo uso abajo (parte principal de la pagina)
import Navbar from './components/Navar/Navbar'; //importo el componente y lo uso abajo (parte de arriba de la pagina)

import './index.css';
import 'materialize-css'; //importar js de materialize
import 'materialize-css/dist/css/materialize.min.css'; //importar css de materialize
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <Navbar/>
    
      <Switch>
        <Route exact path="/" component={RedmineIndex} />
      </Switch>
      <ToastContainer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
