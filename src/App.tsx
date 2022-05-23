import './App.scss'
import { Task } from './components/TaskList/TaskList'
import { TaskCreator } from './components/TaskCreator/TaskCreator'
import { ErrorModal } from './components/ErrorModal/ErrorModal'
import TaskProvider from './context/TaskContext'
import ModalContextProvider from './context/ModalContext'

function App() {
  
  return (
    <ModalContextProvider>
    <TaskProvider>
      <TaskCreator />

        <ErrorModal />
      
      <Task/>
    </TaskProvider>
    </ModalContextProvider>
  )
}

export default App
