import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    return (
        <>
            <div className="nav-bar">
                <Link className="logo" to="/">
                    <img src={LogoS} alt="logo" />
                    <img className='sub-logo' src={LogoSubtitle} alt="slobodan" />
                </Link>
                <nav>
                    <NavLink
                        exact="true"
                        ctiveclassname="active"
                        to="/"
                    >
                        <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
                    </NavLink>
                    <NavLink
                        exact="true"
                        ctiveclassname="active"
                        className="about-link"
                        to="/about"
                    >
                        <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
                    </NavLink>
                    <NavLink
                        exact="true"
                        ctiveclassname="active"
                        className="contact-link"
                        to="/contact"
                    >
                        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
                    </NavLink>
                </nav>
            </div>
        </>
    )
}

export default Sidebar