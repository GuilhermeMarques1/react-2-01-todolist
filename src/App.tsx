import { Button } from './components/Button'
import { Header } from './components/Header'
import { Input } from './components/Input'


import './global.css'
import style from './App.module.css'
import { TaskList } from './components/TaskList'

function App() {
  return (
    <div>
      <Header />

      <div className={style.inputContainer}>
        <Input />
        <Button 
          label="Criar"
        />
      </div>

      <TaskList />
    </div>
  )
}

export default App
