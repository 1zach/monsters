
import Modal from "../Modal/Modal"
import { useState, useContext } from "react"
import { ModalContext } from "../../ModalContext/ModalContext"


export default function Card(props) {
  const [modalValue, setModalValue] = useState(null)
  const {modal, isModalOpen, monster, setMonster} = useContext(ModalContext)
  
    const openModal = (monster) => {
    setMonster(monster)
    //setModalValue(monster)
    isModalOpen(true)
    

  }

  const {monsters} = props
  return(
  <div className="card-list">
   <Modal monster={monster}/>
        {monsters.map((monster)=> {
        const {name, id} = monster
        return (
          <div className="card-container" key={id} onClick={() => openModal(monster)}>
            <img alt = {name} src={monster.sprites.front_default} />
            <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
            <p>{id}</p>
            
          </div>
        )
        })}
              </div>
  )
      }
      