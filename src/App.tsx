import { useState } from 'react'
import './App.scss'
import { Task } from './components/TaskList/TaskList'
import { TaskCreator } from './components/TaskCreator/TaskCreator'
import { ErrorModal } from './components/ErrorModal/ErrorModal'

  interface Tasks {
    id: number,
    title: string,
    isComplete?: boolean,
  }

function App() {
  const [inputValue, setInputValue] = useState('')
  const [tasks, setNewTasks] = useState<Tasks[]>([])
  const [taskId, setTaskId] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleTakingInputValue(param: string) {
    setInputValue(param)
  }

  function handleCreatingNewTask() {

    const newTask: Tasks = {
      id: taskId,
      title: inputValue,
    }

    setTaskId(taskId + 1)

    inputValue === '' ? setIsModalOpen(true) : setNewTasks(prevTask => [...prevTask, newTask])
    
  }

  function handleDeletingTask(id: number) {
    const newTasks = tasks.filter(task => {
      return task.id !== id
    })
    setNewTasks(newTasks)
  }
  
  return (
    <>
      <TaskCreator inputValue={inputValue} setInputValue={handleTakingInputValue} handleCreatingNewTask={handleCreatingNewTask} />

      {isModalOpen ?
       <ErrorModal error={'Insira um título válido'} setIsModalOpen={setIsModalOpen} /> : null
      }

      <Task task={tasks} handleDeletingTask={handleDeletingTask}/>
    </>
  )
}

export default App
