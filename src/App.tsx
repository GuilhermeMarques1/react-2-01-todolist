import { Header } from './components/Header'
import { Input } from './components/Input'


import './global.css'
import { TaskList } from './components/TaskList'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState<string[]>([])

  function handleCreateTask(task: string) {
    setTasks((state) => {
      return [...state, task]
    })
  }

  return (
    <div>
      <Header />
      <Input onCreateTask={handleCreateTask}/>
      <TaskList tasks={tasks}/>
    </div>
  )
}

export default App
