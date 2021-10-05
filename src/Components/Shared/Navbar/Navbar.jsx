import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { UserContext } from '../../../App';
const Navbar = ({textColor}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light" id='home'>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavHashLink smooth className="nav-link me-5" to="/#home">Home</NavHashLink>
                        </li>    
                        <li className="nav-item">
                            <NavHashLink smooth className="nav-link me-5" to="/dashboard">DashBoard</NavHashLink>
                        </li>
                        <li className="nav-item">
                            <NavHashLink smooth to="/#service" className="nav-link me-5">Dental Service</NavHashLink>
                        </li>
                        <li className="nav-item">
                            <NavHashLink smooth className={textColor ? 'nav-link me-5' : 'nav-link me-5 text-white'} to="/#review">Reviews</NavHashLink>
                        </li>
                        <li className="nav-item">
                            <NavHashLink smooth className={textColor ? 'nav-link me-5' : 'nav-link me-5 text-white'} to="/#blog">Blogs</NavHashLink>
                        </li>
                        <li className="nav-item">
                            <NavHashLink smooth className={textColor ? 'nav-link me-5' : 'nav-link me-5 text-white'} to="/#contact">Contact</NavHashLink>
                        </li>
                        <li className="me-2 nav-item">
                            {
                                loggedInUser.email ? <img src={loggedInUser.photoURL} className="rounded-circle" style={{width: '40px'}} alt="" /> :
                                <Link style={{backgroundColor: '#1cc7c1'}} to='/login' className='btn'>Login</Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;