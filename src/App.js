import React, {useState} from 'react';
import MovieList from './Components/MovieList';
import Form from './Components/Form';
import Head from './Components/navbar';
import Description from './Components/description';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([
    { title: "The Avengers", id: 1,description:"That is a good movie", img:"../avengers.jpg", rating:4 ,trailer:"https://www.youtube.com/embed/eOrNdBpGMv8"},
    { title: "Joker ", id: 2, description:"Crime...Fantastic movie", img:"../joker.jpeg", rating:4 ,trailer:"https://www.youtube.com/embed/zAGVQLHvwOY"},
    { title: "Harry Potter ", id: 3, description:"Fantasy/magic", img:"../harry poter.jpg", rating:2 ,trailer:"https://www.youtube.com/embed/VyHV0BRtdxo"},
    { title: "Big momma's house:2000 ", id: 4, description:"a good movie", img:"../bmh 2.jpg", rating:3 ,trailer:"https://www.youtube.com/embed/hmf4gHBa-Zw"},
    { title: "Dora ", id: 5, description:"a good movie", img:"../dora.jpg", rating:3, trailer:"https://www.youtube.com/embed/gUTtJjV852c" },
    { title: "How to train your dragon: The final ", id: 6, description:"a good movie", img:"../htyd 2019.jpg", rating:5 ,trailer:"https://www.youtube.com/embed/CQ7XUCQ6pbE"},
    { title: "Jumangi: 1 ", id: 7, description:"a good movie", img:"../jumangi 1.jpg", rating:1,trailer:"https://www.youtube.com/embed/2QKg5SZ_35I" },
 ]);
  
  const [search, setSearch] = useState("")

  const [stars, setStars] = useState(1)
  

  const [input, setInput] = useState({
    title:"",
    description:"",
    img:"",
    rating:"",
    trailer:"",
  });

  const addHandler = (newMovie) => {

    setMovies([...movies, newMovie])
    console.log(newMovie);
  };
  
  return (
    <div className="App">
      <Router>
      <Head 
      setSearch={setSearch}
      setStars={setStars}
      stars={stars}
      />

      <main>
      <Form
        addHandler={addHandler}
        input={input} 
        setInput={setInput}
      />

      <Route exact
      path='/'
      render={(props) => (
      <MovieList 
      {...props}
        movies={movies}
        search={search}
        setSearch={setSearch}
        stars={stars}
      />)}
      />

<Route 
      path='/description/:id'
      render={(props) => (
      <Description
      {...props}
      movies ={movies}
      />)}
      />

      </main>

      </Router>
    </div>
  );
}

export default App;
