import axios from 'axios';
import React, { Component } from 'react'
import Card from './cards';
class Search extends Component {
    state = { 
        movies: [],
        terms: "",
     } 
    componentDidMount(){
        let serachTerm=this.props.match.params.term;

        axios
        .get('https://api.themoviedb.org/3/search/movie?api_key=1de101fa99d9b77ac2154b64d13847bc&language=en-US&page=1&include_adult=false&query='+ serachTerm)
        .then((response)=>{
            
            this.setState({movies:response.data.results,terms:serachTerm})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render() { 
        return (
            <div className='container'>
                
                <div className='row'>
                        <div className='col-12'>
                            <h3 className='display-4'>
                                Search Result for {this.state.terms}
                            </h3>
                        </div>
                        {this.state.movies.map((movie,index)=>{
                            
                                return <div className='col-4'>
                                  <Card id={movie.id} name={movie.title} brief={movie.overview} img={movie.poster_path} /></div>
                            
                           
                        })}
                        
                    </div>
            </div>
        );
    }
}
 
export default Search;