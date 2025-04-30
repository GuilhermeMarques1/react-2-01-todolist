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

  function handleDeleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete
    })

    setTasks(tasksWithoutDeletedOne)
  }

  return (
    <div>
      <Header />
      <Input 
        onCreateTask={handleCreateTask}
      />
      <TaskList 
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  )
}

export default App
