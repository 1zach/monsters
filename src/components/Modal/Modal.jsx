import './Modal.css'

import { useContext } from 'react'
import { ModalContext } from '../../ModalContext/ModalContext'

export default function Modal(pokemon) {
const {modal, isModalOpen, monster, setMonster} = useContext(ModalContext)
console.log(monster)
const toggleMonster = () => {
  setMonster(null) }

if (!monster) {
  return null}
  return(
  <div className="modal modal-content">
    <button className="close-modal" onClick={toggleMonster}>X</button>
    <img className="modal-image" src={pokemon.monster.sprites.front_shiny} alt={`${pokemon.monster.name}`}/>
    <div className="name" >{pokemon.monster.name}</div>
    <div className="types">
      {pokemon.monster.types.map((type)=> {
      return (
            
              <div className={`type ${type.type.name}`}>{type.type.name}</div>
            
            )
      })}
    </div>
    <div>First Game: Pokemon {pokemon.monster.game_indices[0].version.name}, {pokemon.monster.game_indices[1].version.name}</div>
  </div>

  )
  }
