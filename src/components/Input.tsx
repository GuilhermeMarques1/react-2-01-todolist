import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Button } from './Button'
import style from './Input.module.css'

interface InputProps {
  onCreateTask: (task: string) => void;
}

export function Input({ onCreateTask }: InputProps) {
  const [task, setTask] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    console.log("Try this")

    onCreateTask(task)

    setTask('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')

    setTask(event.target.value)
  }

  function handleInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('O campo não pode ser vazio')
  }

  return (
    <form className={style.form} onSubmit={handleSubmit} >
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className="input"
        required
        value={task}
        onChange={handleNewTaskChange}
        onInvalid={handleInvalid}
      >
      </input>

      <Button 
        type='submit'
        label="Criar"
      />
    </form>
  )
}
