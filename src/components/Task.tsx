import { Trash } from 'phosphor-react'
import style from './Task.module.css'
import { TaskInterface } from '../App';

interface TaskProps {
  task: TaskInterface;
  onDeleteTask: (task: string) => void;
  onCompleteTask: (task: string) => void;
}

export function Task({ task, onDeleteTask, onCompleteTask }: TaskProps) {
  return (
    <div className={style.task}>
      <div>
        <input 
          type='checkbox' 
          onClick={() => onCompleteTask(task.text)}
        />
        <p className={task.isCompleted ? `${style.checked}` : ''}>
          {task.text}
        </p>
      </div>
      <Trash 
        size={20} 
        onClick={() => onDeleteTask(task.text)} 
        className={style.deleteIcon}
      />
    </div>
  )
}