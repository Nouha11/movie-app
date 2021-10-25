import React from "react";
import MovieCard from "./MovieCard"

export default function MovieList({ movies,search,stars }) {
  
  const searchHandler = () => {
    
    console.log(stars);
      return movies
        .filter(el => el.title.toLowerCase().includes(search.toLowerCase())&& el.rating >= stars )
        .map((el,key) => (
        <MovieCard  
        movie={el}
        key={el.id}
        />
      ))

  }

  return (
    <div className="moviesContainer">
      {searchHandler()}
    </div>
  );
}

