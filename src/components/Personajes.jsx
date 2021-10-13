import React, {useState, useEffect} from 'react'

const Personajes = () => {

    const [personajes, setPersonajes] = useState([]);
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setPersonajes(data.results))
    },[])    

    return(
        <div className="Personajes">
            {personajes.map(personaje => (
                <h2>{personaje.name}</h2>
            ))}
        </div>
    );
}

export default Personajes