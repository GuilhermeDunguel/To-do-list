import './TaskCreator.scss'

interface taskCreatorProps {
   inputValue: string,
   setInputValue: (param: string) => void,
   handleCreatingNewTask: () => void,
}

export function TaskCreator(props: taskCreatorProps) {
   return (
      <section className="task-creator">
         <input 
            className="task-input"
            type="text"
            placeholder="O que você precisa fazer hoje?"
            onChange={event => props.setInputValue(event.target.value)}
            required
         />
         <button
            className="task-button"
            onClick={props.handleCreatingNewTask}
         >
            Criar
         </button>
      </section>
   )

}