import React, { Component } from 'react'
import Card from './cards';
import axios from 'axios'
class Home extends Component {
    state = { 
        movies:[]
     } 

     searchMovie(){
        let search=document.querySelector('#search').value;
        console.log(search);
        this.props.history.push('/search/'+ search);
     }
    componentDidMount(){
        axios
     .get('https://api.themoviedb.org/3/movie/popular?api_key=1de101fa99d9b77ac2154b64d13847bc&language=en-US&page=1')
     .then((response)=>{
        
        this.setState({ movies:response.data.results})
     })
     .catch(function(error){
           console.log(error);
     })
    }
    
    render() { 
        
        return (
            
                <div>
                     <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Welcome To Movie-Pedia</h1>
    <p class="lead">One Stop place where you can find every info about all of your favourite movies.</p>
    <input id='search' type="text" className='form-control form-control-lg' placeholder="Search any Movie"></input><br></br>
    <button onClick={this.searchMovie.bind(this)} className='btn btn-dark btn-lg'>Search</button>
  </div>
</div>
<div className='container'>
    <div className='row'>
        <div className='col-12'>
            <h3>Top Movies</h3>
        </div>
    </div>

    <div className='row'>{
        this.state.movies.map(function(movie,index){
            return <div key='index' className='col-4 mt-3'>
            <Card id={movie.id} name={movie.title} brief={movie.overview} img={movie.poster_path}/>

        </div>
        })
    }
        
        
    </div>
</div>

                </div>
            
        );
    }
}
 
export default Home;