import { Trash } from "phosphor-react";
import './TaskList.scss'

interface Tasks {
   id: number,
   title: string,
   isComplete?: boolean,
}

interface TaskProps {
   task: Tasks[],
   handleDeletingTask: (id: number) => void,
}

export function Task(props: TaskProps) {

   return (
      <section className="task-list">
         {props.task.map(task => (
            <div className="task" key={task.id}>
               <div className="left-side">
                  <input
                     className="checkbox-input"
                     type="checkbox"
                  />
                  <span
                     className="title-span"
                  >
                     {task.title}
                  </span>
               </div>
               <button
                  className="delete-button"
                  onClick={() => props.handleDeletingTask(task.id)}
               >
                  <Trash size={25} weight="thin" />
               </button>
            </div>
         ))}
      </section>
   )
}