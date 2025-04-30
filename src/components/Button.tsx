import { ButtonHTMLAttributes } from 'react';
import style from './Button.module.css'
import { PlusCircle } from 'phosphor-react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function Button({ label, ...props }: ButtonProps) {
  return (
    <button className={style.button} {...props}>
      {label}
      <PlusCircle size={20} className={style.icon}/>
    </button>
  )
}
