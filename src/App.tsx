import { Header } from './components/Header'
import { Input } from './components/Input'


import './global.css'
import { TaskList } from './components/TaskList'
import { useState } from 'react'

export interface TaskInterface {
  text: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>([])

  function handleCreateTask(task: string) {
    const newTask = {
      text: task,
      isCompleted: false,
    }

    setTasks((state) => {
      return [...state, newTask]
    })
  }

  function handleDeleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.text !== taskToDelete
    })

    setTasks(tasksWithoutDeletedOne)
  }

  function handleCompleteTask(taskCompleted: string) {
    setTasks((state) => {
      return state.map((task) => {
        if (task.text === taskCompleted) {
          return {
            text: task.text,
            isCompleted: !task.isCompleted
          }
        }
  
        return task;
      })
    })
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
        onCompleteTask={handleCompleteTask}
      />
    </div>
  )
}

export default App
