import './App.css';
import pokemons from './data/pokedex';
import React from 'react';
import {PadZeros, BigLetterFirst, BigLetterAll,} from './methods.js';


function Types (props){
  return (
    <div className='singleType'>
      {`${BigLetterAll(props.typeName)}`}
    </div>
  )
}

function Card (props){

  return(
    <div className='card'>
      <div className='cardName'>{`${PadZeros(props.index)} ${BigLetterFirst(props.name)}`}</div>
      <img className='cardImage' src={props.image} alt='bulbasurs' />
      <div className='cardType'>
        {
        props.types.map(
          type => {
            return <Types typeName={type} />
          }
          )
          }
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
      {
        pokemons.map(
          (pokemon,index) => {
          return <Card name={pokemon.name} image={pokemon.image} types={pokemon.types} index={index+1}/>
        }
        )
      }
      </div>
    </div>
  );
}

export default App;