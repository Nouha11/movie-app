import React from 'react';
import MovieCard from './MovieCard';
import { useParams,Link } from 'react-router-dom';

export default function Description({ movies,match }) {
    
    //const {ID}=useParams()
    const movieDes = movies.find(el => el.id == match.params.id);
    console.log(movieDes);
    return (

        <div className="description">
         {movies
        .filter(el => el.id == movieDes.id) 
        .map((el,key) => (
        <MovieCard  
        movie={el}
        key={el.id}
        />))
        } 

        <div>
        <h4 style={{color:"white"}}> {movieDes.description}</h4>
        <iframe width="560" height="315" 
        src={movieDes.trailer} 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

        </iframe>
        <Link to={'/'}>
        <button >Go Home</button>
        </Link>
        </div>
            
        </div>
    )
}
