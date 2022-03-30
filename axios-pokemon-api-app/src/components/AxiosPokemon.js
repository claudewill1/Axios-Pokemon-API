import React, {useEffect, useState} from 'react';
import axios from 'axios';

const AxiosPokemon = (props) =>{
    const [pokemon, setPokemon] = useState([]);
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807/')
            .then(response=>{setPokemon(response.data.results)})
    },[]);

    return (
        <div>
            <ul>
                {
                    pokemon.map((poke,i)=>{
                        return <li key={i}>{poke.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default AxiosPokemon;