import { Trash } from "phosphor-react";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import './TaskList.scss'

export function Task() {

   const data = useContext(TaskContext)

   return (
      <section className="task-list">
         {data.tasks.map(task => (
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
                  onClick={() => data.handleDeletingTask(task.id)}
               >
                  <Trash size={25} weight="thin" />
               </button>
            </div>
         ))}
      </section>
   )
}