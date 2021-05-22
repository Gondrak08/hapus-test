import React from 'react';
import logo from '../../assets/Badge.svg'

import './NavbarStyles.css'

export const Navbar = () => {
    return (
        <section id="nav-section" >
            <nav className="nav_container">
                <div className="nav_links">
                    <img src={logo} alt="logo da empresa"/>
                    <ul>
                        <li>
                            <a href="#">
                                <p>Create Your Nanny Share</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <p>Browse Shares</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <p>Our Story</p>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="nav_buttons">
                    <button type="button">
                        <p>
                            Become a Nanny Share Host
                        </p>
                    </button>
                        
                    <button >
                        <p>Sign In</p>
                    </button>
                </div>
            </nav>
        </section>
    )
}

export default Navbar;