import { useContext } from 'react'
import { TaskContext } from '../../context/TaskContext'
import './TaskCreator.scss'

export function TaskCreator() {

   const data = useContext(TaskContext)

   return (
      <section className="task-creator">
         <input 
            className="task-input"
            type="text"
            placeholder="O que você precisa fazer hoje?"
            onChange={event => data.setInputValue(event.target.value)}
            maxLength={40}
            required
         />
         <button
            className="task-button"
            onClick={data.handleCreatingNewTask}
         >
            Criar
         </button>
      </section>
   )

}