
import './styles/styleNavegation.css'
import { Link } from 'react-scroll';
function Navegation() {
  return (
    <div className='containerNavbar'>
        <Link to="about" spy={true} smooth={true} offset={-100} duration={100} className="navLink">ABOUT</Link>
        <Link className="navLink" to="tech" spy={true} smooth={true} offset={-100} duration={100}>TECH STACK</Link>
        <Link className="navLink" to="projects" spy={true} smooth={true} offset={-100} duration={100}>PROJECTS</Link>
    </div>
  );
}

export default Navegation;