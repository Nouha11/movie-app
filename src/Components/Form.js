import React,{useState} from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function Form({addHandler,input,setInput}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const [id, setId] = useState([]);

    const inputHandler = (e) => {
      if(e.target.id === 'title'){input.title = e.target.value}
      else if(e.target.id === 'description'){input.description = e.target.value}
      else if(e.target.id === 'img'){input.img = e.target.value}
      else if(e.target.id === 'rating'){input.rating = e.target.value}
//console.log(input);
      };

      // const inputIDS = (e) => {
      //   input&&
      //   setId([...id, e])
      //   //setId([...new Set(id)])
      // };

       const addMovie = () => {

         const newMovie = { title: input.title , description: input.description , img: input.img , rating: input.rating , id: Math.random()*1000 };
         addHandler(newMovie);
         setInput({title:"lol",
         description:"",
         img:"",});
         //console.log(newMovie);
       };  

    return (
        <div className="formContainer">
            <Button variant="danger" onClick={handleShow}>
              Add YOUR own suggestion !
            </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add YOUR Favorite Film !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div >
                <h4> Title: </h4>
                <input  type="text" 
                id="title"
                onChange={inputHandler}
                  //value={input}
                 />
            </div>

            <div >
                <h4>Description :</h4>
                <input type="text"
                id="description"
                onChange={inputHandler}
                //value={input}
                />
            </div>

            <div >
                <h4>PosterURL :</h4>
                <input type="text"
                id="img"
                onChange={inputHandler}
                //value={input}
                />
            </div>

            <div >
                <h4>Rating:</h4>
                <input type="text" 
                placeholder="exp 3.5 STARS" 
                id="rating"
                onChange={inputHandler}
                //value={input}
                />
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => {
            handleClose();
            addMovie() }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}