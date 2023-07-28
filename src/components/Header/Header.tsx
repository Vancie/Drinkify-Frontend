import Styles from './Header.module.css'
import Logo2 from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
const Header = () => {
  

  return (
      <header className={Styles.header}> 
        <div className={Styles.logoAndHeader}>
          <Logo2 fill="black" width="4rem" height="4rem"/>
          <h1> Drinkify </h1>
        </div>
        <Navigation />
      </header>
      )
}

export default Header
