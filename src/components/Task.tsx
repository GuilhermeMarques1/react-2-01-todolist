import { Trash } from 'phosphor-react'
import style from './Task.module.css'

interface TaskProps {
  text: string;
  onDeleteTask: (task: string) => void;
}

export function Task({ text, onDeleteTask }: TaskProps) {
  return (
    <div className={style.task}>
      <div>
        <input type='checkbox' />
        <p className={''}>
          {text}
        </p>
      </div>
      <Trash 
        size={20} 
        onClick={() => onDeleteTask(text)} 
        className={style.deleteIcon}
      />
    </div>
  )
}