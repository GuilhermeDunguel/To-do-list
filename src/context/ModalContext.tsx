import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

interface ModalProviderReq {
  children: ReactNode,
}

interface ModalContextProps {
  isModalOpen: boolean,
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

export const modalContext = createContext<ModalContextProps>({} as ModalContextProps)

export default function ModalContextProvider({children}: ModalProviderReq) {

  const [isModalOpen, setIsModalOpen] = useState(false)  

  return (
    <modalContext.Provider value={{isModalOpen, setIsModalOpen}}>
      {children}
    </modalContext.Provider>
  )
}
