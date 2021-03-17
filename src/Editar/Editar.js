import React, { Component, useState, useEffect, withRouter } from 'react';

import { Link } from 'react-router-dom';

import './Editar.css';

function Editar(props){

	const id = props.match.params.id

	const [name, setName] = useState("")
	const [description, setDescription] = useState("")
	const [manager, setManager] = useState("")
	const [assigned, setAssigned] = useState("")
	const [status, setStatus] = useState(true)

	useEffect(() => {

	    fetch("https://desafio-esto-es.herokuapp.com/id/"+id,{
			method: 'GET'
	    })
	    .then(response => response.json())
	    .then((responseJson)=> {

	    	setName(responseJson.name)
	    	setDescription(responseJson.description)
	    	setManager(responseJson.manager)
	    	setAssigned(responseJson.assigned)
	    	setStatus(responseJson.status)

	    })

  
 	 }, []);

	let editarCambios = ()=>{

		if(name!=""&&description!=""&&manager!=""&&assigned!=""){
			fetch("https://desafio-esto-es.herokuapp.com/update", {
			  method: 'POST', 
			  body: JSON.stringify({
			  	id: id,
				name:name,
				description: description,
				manager: manager,
				assigned: assigned,
				status: status
				}), 
			  headers:{
			    'Content-Type': 'application/json'
			  }
			}).then(res => res.text())
			.catch(error => console.error('Error:', error))
			.then(response => {console.log(response); props.history.push("/proyectos")});
		}
	} 

    return (

      <div className="Editar">

        	<nav class="navbar navbar-expand-lg navbar-light bg-light">

	            <div class="nav-editar">

			      <Link to="/proyectos">
			    	  <button type="button" class="btn bg-light text-black">
			    	  <i class="fas fa-long-arrow-alt-left"></i>Back</button>
			      </Link>

	              <h5>Edit project</h5>

	            </div>

        	</nav>

			<div class="card">
			  <div class="card-body">

			  <div class="mb-3">
			    <label for="exampleInputPassword1" class="form-label">Project name</label>
			    <input value={name} onChange={(e)=>{setName(e.target.value)}}
			    type="text" class="form-control" id="exampleInputPassword1"></input>
			  </div>

			  <div class="mb-3">
			    <label for="exampleInputPassword1" class="form-label">Description</label>
			    <input value={description} onChange={(e)=>{setDescription(e.target.value)}}
			    type="text" class="form-control" id="exampleInputPassword1"></input>
			  </div>

			  	<label class="form-label" for="form1Example3">Project manager</label>
				<select value={manager} onChange={(e)=>{setManager(e.target.value)}}
				id="form1Example3" class="form-select" aria-label="Default select example">
				  <option disabled selected>Select a person</option>
				  <option value="1">Juan Ignacio Luna</option>
				  <option value="2">Facundo Isola</option>
				  <option value="3">Simon Bochini</option>
				</select>

			  	<label class="form-label" for="form1Example4">Assigned to</label>
				<select value={assigned} onChange={(e)=>{setAssigned(e.target.value)}}
				id="form1Example4" class="form-select" aria-label="Default select example">
				  <option disabled selected>Select a person</option>
				  <option value="1">Juan Ignacio Luna</option>
				  <option value="2">Facundo Isola</option>
				  <option value="3">Simon Bochini</option>
				</select>

			  	<label class="form-label" for="form1Example5">Status</label>
				<select value={status} onChange={(e)=>{setStatus(e.target.value)}}
				id="form1Example5" class="form-select" aria-label="Default select example">
				  <option selected value= "true">Enabled</option>
				  <option value="false">Disable</option>
				</select>

			  <button onClick={editarCambios} 
			  class="btn bg-danger text-white">Save changes</button>

			  </div>
			</div>


      </div>


    );

}

export default Editar;
