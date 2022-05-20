import { useState } from 'react'
import './App.scss'
import { Task } from './components/TaskList/TaskList'
import { TaskCreator } from './components/TaskCreator/TaskCreator'

  interface Tasks {
    id: number,
    title: string,
    isComplete?: boolean,
  }

function App() {
  const [inputValue, setInputValue] = useState('')
  const [tasks, setNewTasks] = useState<Tasks[]>([])
  const [taskId, setTaskId] = useState(0)

  function handleTakingInputValue(param: string) {
    setInputValue(param)
  }

  function handleCreatingNewTask() {
    const newTask: Tasks = {
      id: taskId,
      title: inputValue,
    }

    setTaskId(taskId + 1)
    setNewTasks(prevTask => [...prevTask, newTask])
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
      <Task task={tasks} handleDeletingTask={handleDeletingTask}/>
    </>
  )
}

export default App
