import React from 'react'
import {Card,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom' ;

export default function MovieCard({movie}) {
  const changed = [];
  const notChanged = [];
  changed.length = movie.rating;
  notChanged.length = 5 - movie.rating;

//console.log(movie);
    return (
        <div className="MovieCard">
            <Card  style={{ width: '18rem' }}>
              <Link to={`/description/${movie.id}`}>
              <Card.Img variant="top" src={movie.img} className="MovieImage" />
              </Link>
              <Card.Body className="MovieBody">
                <Card.Title><h2>{movie.title} </h2></Card.Title>
                <Card.Text>
                 <h3>Description :</h3> <h5>{movie.description}</h5>
                 <h4>Rating :</h4>
                 <h4 className="stars">
                   {
                     changed.fill(
                       <div className="changeColor">
                      <i class="fas fa-star" id={Math.random()*1000}></i>
                      </div>
                     ).concat(notChanged.fill(                      
                     <i class="fas fa-star" id={Math.random()*1000}></i>
                     ))
                   }
                 </h4>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
        </div>
    )
}
