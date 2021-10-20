import React, {useState, useEffect, useContext, useReducer} from 'react';
import {Card, Button, Figure, Col, Form, Row} from 'react-bootstrap';
import ThemeContext from './context/ThemeContext';

const initialState = {
    favorites: []
}

const favoritesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITES':
            return{
                ...state,
                 favorites: [...state.favorites, action.payload]
            };
        default:
            return state;    
    }
}

const Characters = (props) => {

    const [characters, setCharacters] = useState([]);
    const [favorites, dispatch] = useReducer(favoritesReducer, initialState);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    },[])    

    const darkMode = useContext(ThemeContext)

    const handleClick = favorite => {
        dispatch({
            type: 'ADD_TO_FAVORITES',
            payload: favorite
        })
    }

    const handleSearch = event => {
        setSearch(event.target.value);
    }

    const filteredCharacters = characters.filter((character) => {
        return character.name.toLowerCase().includes(search.toLowerCase())
    })

    return(
        <div className="container" style={{marginTop: 25}}>
            <div className="row">  
               <div>
                   {favorites.favorites.length > 0 && <h1 style={{textAlign:'left'}}>Favorites</h1>}
               </div>
               
               <div>
                    {favorites.favorites.map(favorite => (
                            <Figure.Image src={favorite.image} width={151} height={170} style={{marginRight: 5}}></Figure.Image>
                    )
                    )}      
                </div>   
                <Form>
                    <Row style={{display: 'flex', alignItems: 'center'}}>
                        <Col>
                            <h1 style={{textAlign:'left'}}>Characters</h1>
                        </Col>
                        <Col>
                            <Form.Control type="text" value={search} onChange={handleSearch} placeholder="Search..."/>
                        </Col>
                    </Row>
                </Form>
                {filteredCharacters.map(character => (
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3" style={{marginBottom:5}} key={character.id}>
                        <Card className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{color: darkMode ? 'white' : 'black', backgroundColor: darkMode ? 'black' : 'white'}}>
                            <Card.Img variant="top" src={character.image} />
                            <Card.Body>
                                <Card.Title>{character.name}</Card.Title>
                                <Card.Text>{character.status}</Card.Text>
                                <Card.Text>{character.species}</Card.Text>
                                <Button type="button" onClick={()=>handleClick(character)} variant='secondary'>Add to favorites</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    
                ))}
            </div>
        </div>
    );
}

export default Characters