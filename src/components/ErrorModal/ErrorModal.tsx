import { X } from 'phosphor-react'
import './ErrorModal.scss'

interface ErrorModal {
   error: string
   setIsModalOpen: (state:boolean) => void,
}

export function ErrorModal(props: ErrorModal) {
   return (
      <div className="teste">
         <div className="error-modal">
            <button
               onClick={() => props.setIsModalOpen(false)}
            >
               <X className="close-modal" size={32} weight="thin" />
            </button>
         
            <span>{props.error}</span>
         </div>
      </div>
   )
}