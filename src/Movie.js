import React, { Component } from 'react'
import { useParams } from 'react-router-dom';
class Movie extends Component {
    state = {  } 

    componentDidMount(){
        console.log(this.props)
    }
    render() { 
        
        console.log(this.props.id)
        return (
            <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <div className='row'>
                    <div className='col-3'>
                        <img src={"https://image.tmdb.org/t/p/w500//9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"}class="card-img-top" alt="..."></img>
                    </div>
                    <div className='col-9'>
                    <h1 class="display-4">Inception(2010)</h1>
                    <p>Action&Mystery</p>
                    <h1>9.1/10</h1>
                    <p>Whyyyyyyy</p>
                    <h3>Overview</h3>
              <p class="dispaly-4">One-stop Movie-Encyclopedia</p>
              
                    </div>
                    
                </div>
              
            </div>
          </div>
        );
    }
}
 
export default Movie;