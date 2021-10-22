import React, {useState} from 'react';
import MovieList from './Components/MovieList';
import Form from './Components/Form';
import Head from './Components/navbar';

function App() {
  const [movies, setMovies] = useState([
    { title: "The Avengers", id: 1,description:"That is a good movie", img:"../avengers.jpg", rating:4 },
    { title: "Joker ", id: 2, description:"", img:"../joker.jpeg", rating:4 },
    { title: "Harry Potter ", id: 3, description:"Fantasy/magic", img:"../harry poter.jpg", rating:2 },
    { title: "Big momma's house:2000 ", id: 4, description:"a good movie", img:"../bmh 2.jpg", rating:3 },
    { title: "Dora ", id: 5, description:"a good movie", img:"../dora.jpg", rating:3 },
    { title: "How to train your dragon: The final ", id: 6, description:"a good movie", img:"../htyd 2019.jpg", rating:5 },
    { title: "Jumangi: 1 ", id: 7, description:"a good movie", img:"../jumangi 1.jpg", rating:1 },
  ]);
  
  const [search, setSearch] = useState("")

  const [stars, setStars] = useState(0)
  

  const [input, setInput] = useState({
    title:"",
    description:"",
    img:"",
    rating:"",
  });

  const addHandler = (newMovie) => {
    input&&
    setMovies([...movies, newMovie])
  };
  
  return (
    <div className="App">
      
      <Head 
      setSearch={setSearch}
      setStars={setStars}
      />
      <main>
      <Form
        addHandler={addHandler}
        input={input} 
        setInput={setInput}
      />
      <MovieList 
        movies={movies}
        search={search}
        setSearch={setSearch}
        stars={stars}
      />
      </main>
    </div>
  );
}

export default App;
