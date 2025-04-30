import { Task } from './Task';
import style from './TaskList.module.css'
import { ClipboardText } from 'phosphor-react'

interface TaskListProps {
  tasks: string[];
}

export function TaskList({ tasks }: TaskListProps) {
  return (
    <div className={style.tasklist}>
      <header className={style.header}>
        <div>
          <h2>Tarefas criadas</h2>
          <span>0</span>
        </div>
        <div>
          <h2>Concluídas</h2>
          <span>0</span>
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
            <Task key={task} text={task}/>
          ))
        )}
       
      </main>
    </div>
  )
}