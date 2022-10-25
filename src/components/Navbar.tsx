import '../style/Navbar.css'
import { Link } from "react-router-dom";
import icono1 from "../assets/icono1.svg"
import icono2 from "../assets/icono2.svg"
import icono3 from "../assets/icono3.svg"
import icono4 from "../assets/icono4.svg"

const Navbar = () => {
    const reload = () =>{
        setTimeout(() => {
          
          window.location.reload()
        }, 100);
      }
      return (
        <nav>
          <ul>
            <li>
              <Link to="/home"><img className="icon1" src={icono1}  /></Link>
            </li>
            <li>
              <Link to="/episode" onClick={reload}><img className="icon2" src={icono3}  /></Link>
            </li>
            <li>
              <Link to="/location" onClick={reload}><img className="icon3" src={icono4} /></Link>
            </li>
            <li>
              <Link to="/characters" onClick={reload}><img className="icon4" src={icono2} alt="" /></Link>
            </li>
          </ul>
        </nav>
      );
}

export default Navbar

