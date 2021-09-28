import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavHashLink smooth className="nav-link me-5" to="#">Home</NavHashLink>
                        </li>    
                        <li className="nav-item">
                            <NavHashLink smooth className="nav-link me-5" to="#">About</NavHashLink>
                        </li>
                        <li className="nav-item">
                            <NavHashLink smooth to="/#service" className="nav-link me-5">Dental Service</NavHashLink>
                        </li>
                        <li className="nav-item">
                            <NavHashLink smooth className="nav-link me-5 text-white" to="/#review">Reviews</NavHashLink>
                        </li>
                        <li className="nav-item">
                            <NavHashLink smooth className="nav-link me-5 text-white" to="/#blog">Blogs</NavHashLink>
                        </li>
                        <li className="nav-item">
                            <NavHashLink smooth className="nav-link me-5 text-white" to="/#contact">Contact</NavHashLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;