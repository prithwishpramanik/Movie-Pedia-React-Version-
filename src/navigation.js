import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class Nav extends Component {
    state = {  } 
    render() { 
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="#">Navbar</a>
    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link to="/" class="nav-link active text-white">Home</Link>
        <a class="nav-link active text-white">Recommend</a>
        <a class="nav-link active text-white" >Pricing</a>
        
      </div>
    </div>
  </div>
</nav>
        );
    }
}
 
export default Nav;