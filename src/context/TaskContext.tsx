import 
  React, 
  { 
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState
  } from 'react'
import { modalContext } from './ModalContext'


interface Tasks {
  id: number,
  title: string,
  isComplete?: boolean,
}

interface TaskProviderReq {
  children: ReactNode,
}

interface TaskContextProps {
  tasks: Tasks[],
  inputValue: string,
  setInputValue: Dispatch<SetStateAction<string>>
  handleTakingInputValue: (param: string) => void,
  handleCreatingNewTask: () => void,
  handleDeletingTask: (id: number) => void,
}

export const TaskContext = createContext<TaskContextProps>({} as TaskContextProps)

export default function TaskProvider({children}: TaskProviderReq) {

  const ModalData = useContext(modalContext)

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

    inputValue === '' ? ModalData.setIsModalOpen(true) : setNewTasks(prevTask => [...prevTask, newTask])

    setTaskId(taskId + 1)
  }

  function handleDeletingTask(id: number) {
    const newTasks = tasks.filter(task => {
      return task.id !== id
    })
    setNewTasks(newTasks)
  }

  return (
    <TaskContext.Provider value={
      {
        tasks,
        inputValue,
        setInputValue,
        handleTakingInputValue,
        handleCreatingNewTask,
        handleDeletingTask,
      }
    }
    >
      {children}
    </TaskContext.Provider>
  )
}
