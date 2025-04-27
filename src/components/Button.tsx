import style from './Button.module.css'
import { PlusCircle } from 'phosphor-react'

interface ButtonProps {
  label: string;
}

export function Button({ label }: ButtonProps) {
  return (
    <button className={style.button}>
      {label}
      <PlusCircle size={20} className={style.icon}/>
    </button>
  )
}
