import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar(){

    return (
      <div className="NavBar">



          <nav class="navbar navbar-expand-lg navbar-light bg-light">

            <div class="container-fluid">

              <Link class="navbar-brand" to="/home">LOGO</Link>

            </div>

          </nav>

          <hr></hr>



      </div>
    );

}

export default NavBar;
