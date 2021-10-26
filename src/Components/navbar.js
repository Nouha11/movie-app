import React from "react";
import { Navbar,Container,Nav } from "react-bootstrap";
import Rate from "./rate";
import {Link} from 'react-router-dom' ;


function Head ({setSearch,setStars, stars}) {
    const getInput = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="Box">
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Movie App</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <div className="searchContainer">
                <input placeholder="Search for MOVIES !" className="searchBar" onChange={getInput}></input>
                </div>
                <Nav className="searchStars">
                <h4>
                    <Rate 
                    stars={stars}
                    setStars={setStars} />
                </h4>
                </Nav>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Head;
