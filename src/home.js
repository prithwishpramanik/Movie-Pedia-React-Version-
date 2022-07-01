import React, { Component } from 'react'
import Card from './cards';
import axios from 'axios'
class Home extends Component {
    state = { 
        movies:[]
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