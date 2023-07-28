import { Link } from 'react-router-dom'
import Styles from './Navigation.module.css'

const Navigation = () => {

  const isLoggedIn = false;

  return (
      <nav>
        <ul>
          <li>
            <Link to='/about' className={Styles.link}> About </Link>
          </li> 
          <li>
            <Link to='/feed' className={Styles.link}> Feed </Link>

          </li>
          <li>

            { isLoggedIn ?  
              <Link to='/account' className={Styles.link}> Account </Link>
              :
              <Link to='/signin' className={Styles.link}> Sign-In </Link>
            } 
          
          </li>
        </ul>
      </nav>
      )

}


export default Navigation
