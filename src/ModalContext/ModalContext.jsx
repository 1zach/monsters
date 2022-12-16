import { createContext, useState } from "react"

export const ModalContext = createContext({
  modal: "",
  isModalOpen: () => {},
  monster: {},
  setMonster: () => {}
})

export const ModalProvider = ({children}) => {
  const [modal, setModal] = useState(false)
  const [monster, setMonster] = useState(null)
  const value = {modal, setModal, monster, setMonster}

  
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  )
}