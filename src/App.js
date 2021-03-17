import React, { useState, useEffect } from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import Proyectos from './Proyectos/Proyectos';
import Nuevo from './Nuevo/Nuevo';
import Editar from './Editar/Editar';

import './App.css';


function App() {

  return (

      <BrowserRouter>

        <div>

          <NavBar />

          <Redirect
            from="/"
            to="/home" />

          <Switch>

            <Route
              path="/home"
              component={Home} />

            <Route
              path="/proyectos"
              component={Proyectos} />

            <Route
              path="/editar/:id"
              component={Editar} />

            <Route
              path="/nuevo"
              component={Nuevo} />

          </Switch>

        </div>

      </BrowserRouter>


  );
}

export default App;
