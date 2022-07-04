import axios from 'axios';
import React, { Component } from 'react'
import Card from './cards';

class Movie extends Component {
    state = { 
        details:{},
        recomend:[]
     } 

     renderGener(){
        if(this.state.details.genres){
            return this.state.details.genres.map(function (genre){
                return<span style={{marginRight:10}}>{genre.name}</span>
            })
        }
     }

    callApi(movie){
        axios
        .get('https://api.themoviedb.org/3/movie/'+movie+'?api_key=1de101fa99d9b77ac2154b64d13847bc&language=en-US')
        .then((response)=>{
            let recomend=this.state.recomend;
            this.setState({ details: response.data,recomend:recomend})
            //console.log(this.state.details)

        })
        .catch(function(err){
            console.log(err)
        })

        axios
        .get('https://api.themoviedb.org/3/movie/'+movie+'/recommendations?api_key=1de101fa99d9b77ac2154b64d13847bc&language=en-US&page=1')
        .then((response)=>{

            let details=this.state.details;
            this.setState({ details:details,recomend:response.data.results})
            window.scroll(0,0);
            console.log(this.state)
            

        })
        .catch(function(err){
            console.log(err)
        })
    } 

    componentDidUpdate(prevProps){
        if(prevProps.match.params.id !== this.props.match.params.id){
            this.callApi(this.props.match.params.id);
        }
    }

    componentDidMount(){
        let movie =this.props.match.params.id;
        this.callApi(movie);
       

       
    }
    render() { 
        
        let releaseDate=new Date(this.state.details.release_date);
        releaseDate=releaseDate.getFullYear();
        return (
            <div>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <div className='row'>
                         <div className='col-3'>
                            <img src={"https://image.tmdb.org/t/p/w300/"+this.state.details.poster_path}class="card-img-top" alt="..."></img>
                        </div>
                             <div className='col-9'>
                                <h1 class="display-4">{this.state.details.original_title}.({releaseDate})</h1>
                             <p>{
                            this.renderGener()
                            }*{this.state.details.runtime} min</p>
                             <h1>{this.state.details.vote_average}/10</h1>
                                 <p>{this.state.details.tagline}</p>
                                <h3>Overview</h3>
                                <p class="dispaly-4">{this.state.details.overview}</p>
              
                            </div>
                    
                    </div>
              
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='display-4'>
                                Similar to {this.state.details.title}
                            </h3>
                        </div>
                        {this.state.recomend.map((movie,index)=>{
                            if(index<5){
                                return <div className='col-3'>
                                  <Card id={movie.id} name={movie.title} brief={movie.overview} img={movie.poster_path} /></div>
                            }
                           
                        })}
                        
                    </div>

                </div>
               
            </div>
            
            
        );
    }
}
 
export default Movie;