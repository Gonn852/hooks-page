import React, {useState, useEffect, useContext, useReducer} from 'react';
import {Card, Button, Figure} from 'react-bootstrap';
import ThemeContext from './context/ThemeContext';

const initialState = {
    favoritos: []
}

const favoritosReducer = (state, action) => {
    switch (action.type) {
        case 'AGREGAR_A_FAVORITOS':
            return{
                ...state,
                 favoritos: [...state.favoritos, action.payload]
            };
        default:
            return state;    
    }
}

const Personajes = (props) => {

    const [personajes, setPersonajes] = useState([]);
    const [favoritos, dispatch] = useReducer(favoritosReducer, initialState);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setPersonajes(data.results))
    },[])    

    const darkMode = useContext(ThemeContext)

    const handleClick = favorito => {
        dispatch({
            type: 'AGREGAR_A_FAVORITOS',
            payload: favorito
        })
    }

    return(
        <div className="container">
            <div className="row"> 
               <div>
                   {favoritos.favoritos.length > 0 && <h1 style={{textAlign:'left'}}>Favoritos</h1>}
               </div>
               
               <div>
                    {favoritos.favoritos.map(favorito => (
                            <Figure.Image src={favorito.image} width={151} height={170} style={{marginRight: 5}}></Figure.Image>
                    )
                    )}      
                </div>   
                <h1 style={{textAlign:'left'}}>Todos los personajes</h1>
                {personajes.map(personaje => (
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3" style={{marginBottom:5}} key={personaje.id}>
                        <Card className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{color: darkMode ? 'white' : 'black', backgroundColor: darkMode ? 'black' : 'white'}}>
                            <Card.Img variant="top" src={personaje.image} />
                            <Card.Body>
                                <Card.Title>{personaje.name}</Card.Title>
                                <Card.Text>{personaje.status}</Card.Text>
                                <Card.Text>{personaje.species}</Card.Text>
                                <Button type="button" onClick={()=>handleClick(personaje)}>Agregar a favoritos</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    
                ))}
            </div>
        </div>
    );
}

export default Personajes