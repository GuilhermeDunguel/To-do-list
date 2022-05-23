import { X } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { modalContext } from '../../context/ModalContext'
import { TaskContext } from '../../context/TaskContext'
import './ErrorModal.scss'

export function ErrorModal() {

   const ModalData = useContext(modalContext)

   return (
      <>
         {ModalData.isModalOpen ? 
            <div className="teste">
               <div className="error-modal">
                  <button
                     onClick={() => ModalData.setIsModalOpen(false)}
                  >
                     <X className="close-modal" size={32} weight="thin" />
                  </button>
               
                  <span>Insira um título válido</span>
               </div>
            </div>
          : null
         }
      </>
   )
}