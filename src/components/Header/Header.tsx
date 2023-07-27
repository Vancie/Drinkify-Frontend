import Styles from './Header.module.css'
import Logo2 from '../Logo/Logo'
const Header = () => {
  

  return (
      <header className={Styles.header}> 
        <Logo2 fill="white" width="5rem" height="5rem"/>
        <h1> Drinkify </h1>
      </header>
      )
}

export default Header
