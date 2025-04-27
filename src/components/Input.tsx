import style from './Input.module.css'

export function Input() {
  return (
    <form className={style.form}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className="input"
        required
      >
      </input>
    </form>
  )
}
