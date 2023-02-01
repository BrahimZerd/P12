import '../App.css'
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png'
import Title from '../assets/Title.png'

//** header return the header component with a nav bar link to the different pages // pages still not linked */

function Header() {

    return(
        <header>
            <div className="headerDiv">
                <div className="logoDiv">
                    <img id="logoID" src={Logo} alt="logo" />
                    <img id="titleID" src={Title} alt="Title" />
                </div>
                
                <nav className="navigationHeader">
                    <Link to ="">Accueil</Link>
                    <Link to ="">Profil</Link>
                    <Link to ="">Réglage</Link>
                    <Link to="">Communauté</Link>
                </nav>
            </div>
        </header>
    )
}


export default Header;