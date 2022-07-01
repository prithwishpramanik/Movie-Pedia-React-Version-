import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class Card extends Component {
    state = {  } 
    render() { 
        return (
            <div class="card">
  <img src={"https://image.tmdb.org/t/p/w500/"+this.props.img }class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">{this.props.name}</h5>
    <p class="card-text">{this.props.brief}</p>
    <Link to={"/details/"+this.props.id} class="btn btn-dark btn-block">View Details</Link>
  </div>
</div>
        );
    }
}
 
export default Card;