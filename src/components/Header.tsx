import logo from '../assets/rocketlogo.svg'
import style from './Header.module.css'

export function Header() {
  return (
    <header className={style.header}>
      <img src={logo} alt="Rocket logo" />
      <p className={style.text}>to<span>do</span></p>
    </header>
  )
}