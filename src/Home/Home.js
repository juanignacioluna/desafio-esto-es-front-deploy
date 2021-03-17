import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './Home.css';


function Home(){

    return (

      <div className="Home">

		<header>
		  <div class="p-5 text-center bg-light">
		    <h1 class="mb-3">Bienvenido al Gestor de proyectos</h1>
		    <h4 class="mb-3">Este es un administrador de proyectos para realizar la gestión, puede crearlos, editarlos y eliminarlos!</h4>
		    <Link to="/proyectos">
		    	<button type="button" class="btn bg-danger text-white">Mis proyectos</button>
		    </Link>
		  </div>
		</header>

      </div>


    );

}

export default Home;
