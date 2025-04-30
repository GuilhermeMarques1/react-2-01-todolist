import { TaskInterface } from '../App';
import { Task } from './Task';
import style from './TaskList.module.css'
import { ClipboardText } from 'phosphor-react'

interface TaskListProps {
  tasks: TaskInterface[];
  onDeleteTask: (task: string) => void;
  onCompleteTask: (task: string) => void;
}

export function TaskList({ tasks, onDeleteTask, onCompleteTask }: TaskListProps) {
  const numberOfTasksCompleted = tasks.filter(task => task.isCompleted).length

  return (
    <div className={style.tasklist}>
      <header className={style.header}>
        <div>
          <h2>Tarefas criadas</h2>
          <span>{tasks.length}</span>
        </div>
        <div>
          <h2>Concluídas</h2>
          <span>{numberOfTasksCompleted} de {tasks.length}</span>
        </div>
      </header>

      <main>
        {tasks.length === 0 ? (
           <div className={style.emptyTask}>
              <ClipboardText size={56} className={style.icon}/>
              <div>
                <p>
                  <span>Você ainda não tem tarefas cadastradas</span>
                  <br />
                  Crie tarefas e organize seus itens a fazer
                </p>
              </div>
            </div>
          ) : ( 
          tasks.map((task) => (
            <Task 
              key={task.text} 
              task={task}
              onDeleteTask={onDeleteTask}
              onCompleteTask={onCompleteTask}
            />
          ))
        )}
       
      </main>
    </div>
  )
}