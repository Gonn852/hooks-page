import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';

const Personajes = (props) => {

    const [personajes, setPersonajes] = useState([]);
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setPersonajes(data.results))
    },[])    

    return(
        <div className="container">
            <div className="row">
            {personajes.map(personaje => (
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3" style={{marginBottom:5}}>
                    <Card className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{color: props.darkMode ? 'white' : 'black', backgroundColor: props.darkMode ? 'black' : 'white'}}>
                        <Card.Img variant="top" src={personaje.image} />
                        <Card.Body>
                            <Card.Title>{personaje.name}</Card.Title>
                            <Card.Text>{personaje.status}</Card.Text>
                            <Card.Text>{personaje.species}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                
            ))}
            </div>
        </div>
    );
}

export default Personajes