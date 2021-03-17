import React, { Component, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import './Proyectos.css';

import messi from './messi.jpg';
import brana from './brana.jpg';
import bochini from './bochini.jpg';

function Proyectos(props){

	const [proyectos, setProyectos] = useState([])

	useEffect(() => {

		actualizarProyectos()

  
 	 }, []);

	let personas = [
	{id:1,name:"Juan Ignacio Luna", foto: "messi"},
	{id:2,name:"Facundo Isola", foto: "brana"},
	{id:3,name:"Simon Bochini", foto: "bochini"}]

	let actualizarProyectos = ()=>{
	    fetch("https://desafio-esto-es.herokuapp.com/select",{
			method: 'GET'
	    })
	    .then(response => response.json())
	    .then((responseJson)=> {

	    	setProyectos(responseJson)

	    })
	}

	function formatDate(d){
	  let date = new Date(d)
	  var dd = date.getDate(); 
	  var mm = date.getMonth()+1;
	  var yyyy = date.getFullYear(); 
	  if(dd<10){dd='0'+dd} 
	  if(mm<10){mm='0'+mm};
	  return d = dd+'/'+mm+'/'+yyyy
	}

    return (


      <div className="Proyectos">

        	<nav class="navbar navbar-expand-lg navbar-light bg-light">

	            <div class="nav-projects">

	              <h5>My projects</h5>

			      <Link to="/nuevo">
			    	  <button type="button" class="btn bg-danger text-white">
			    	  <i class="fas fa-plus"></i>Add project</button>
			      </Link>

	            </div>

        	</nav>

			{proyectos.map((proyecto, index) => (

				<div class="card" key={proyecto.id}>
				  <div class="card-header">

				  	<h5 class="card-title">{proyecto.name}</h5>

					<div class="dropdown">
					  <button
					    class="btn btn-link text-black"
					    type="button"
					    id="dropdownMenuButton"
					    data-mdb-toggle="dropdown"
					    aria-expanded="false"
					  >
					    <i class="fas fa-ellipsis-v"></i>
					  </button>
					  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
					    <li><Link to={"/editar/"+proyecto.id}><a class="dropdown-item">Editar</a></Link></li>
					    <li><a onClick={()=>{
							fetch("https://desafio-esto-es.herokuapp.com/delete", {
							  method: 'DELETE', 
							  body: JSON.stringify({
							  	id: proyecto.id
								}), 
							  headers:{
							    'Content-Type': 'application/json'
							  }
							}).then(res => res.text())
							.catch(error => console.error('Error:', error))
							.then(response => {console.log(response); actualizarProyectos()});
					    }} class="dropdown-item" href="#">Eliminar</a></li>
					  </ul>
					</div>

				  </div>
				  <div class="card-body">
				    <p class="card-text">Creation date: {formatDate(new Date(proyecto.createdAt).toUTCString())}</p>
				    <p class="card-text">
				    <img src={"https://juanignacioluna.github.io/desafio-esto-es-front-deploy/"+proyecto.assigned+".jpg"} />
				    {
				    	personas.map((p)=>{
							if(p.id==(proyecto.assigned)){
								return p.name
							}
						})
				    }</p>
				  </div>
				</div>

			))}



      </div>


    );

}

export default Proyectos;
