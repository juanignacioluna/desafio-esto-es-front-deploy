import React, { Component, useState, useEffect, withRouter } from 'react';

import { Link } from 'react-router-dom';

import './Nuevo.css';

function Nuevo(props){

	const [name, setName] = useState("")
	const [description, setDescription] = useState("")
	const [manager, setManager] = useState("")
	const [assigned, setAssigned] = useState("")
	const [status, setStatus] = useState("true")



	let createProject = (e)=>{

		if(name!=""&&description!=""&&manager!=""&&assigned!=""){		

			let statusBoolean = (status == 'true')

			console.log(status)

			fetch("https://desafio-esto-es.herokuapp.com/insert", {
			  method: 'POST', 
			  body: JSON.stringify({
				name:name,
				description: description,
				manager: manager,
				assigned: assigned,
				status: statusBoolean
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

      <div className="Nuevo">

        	<nav class="navbar navbar-expand-lg navbar-light bg-light">

	            <div class="nav-nuevo">

			      <Link to="/proyectos">
			    	  <button type="button" class="btn bg-light text-black">
			    	  <i class="fas fa-long-arrow-alt-left"></i>Back</button>
			      </Link>

	              <h5>Add project</h5>

	            </div>

        	</nav>

			<div class="card">
			  <div class="card-body">

			  <div class="mb-3">
			    <label for="exampleInputPassword1" class="form-label">Project name</label>
			    <input type="text" class="form-control" id="exampleInputPassword1"
			    value={name} onChange={(e)=>{setName(e.target.value)}}></input>
			  </div>

			  <div class="mb-3">
			    <label for="exampleInputPassword1" class="form-label">Description</label>
			    <input type="text" class="form-control" id="exampleInputPassword1"
			    value={description} onChange={(e)=>{setDescription(e.target.value)}}></input>
			  </div>

			  	<label class="form-label" for="form1Example3">Project manager</label>
				<select id="form1Example3" class="form-select"
			    value={manager} onChange={(e)=>{setManager(e.target.value)}}>
				  <option hidden selected>Select a person</option>
				  <option value="1">Juan Ignacio Luna</option>
				  <option value="2">Facundo Isola</option>
				  <option value="3">Simon Bochini</option>
				</select>

			  	<label class="form-label" for="form1Example4">Assigned to</label>
				<select id="form1Example4" class="form-select"
			    value={assigned} onChange={(e)=>{setAssigned(e.target.value)}}>
				  <option hidden selected>Select a person</option>
				  <option value="1">Juan Ignacio Luna</option>
				  <option value="2">Facundo Isola</option>
				  <option value="3">Simon Bochini</option>
				</select>

			  	<label class="form-label" for="form1Example5">Status</label>
				<select id="form1Example5" class="form-select"
			    value={status} onChange={(e)=>{setStatus(e.target.value)}}>
				  <option selected value= "true">Enabled</option>
				  <option value="false">Disable</option>
				</select>

			  <button onClick={createProject}
			  class="btn bg-danger text-white">Create project</button>

			  </div>
			</div>


      </div>


    );

}

export default Nuevo;
