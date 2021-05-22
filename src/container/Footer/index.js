import React from 'react'
import './FooterStyles.css'

import Button from '../../assets/Button.svg';
import Logo from '../../assets/Logo.svg';
import Facebook from '../../assets/Facebook.svg';
import Twitter from '../../assets/Twitter.svg';
import Instagram from '../../assets/Instagram.svg';




const Footer = () => {
    return (
      <>
        <footer className="footer" >
                <section className="f-a" >
                    <div>
                        <div>
                            <h3>Become a nanny share host</h3>
                            <p>takes less than 5 minutes to get started</p>
                        </div>
                        <div>
                            <img src={Button} alt="Create Your Nanny Share - button"/>
                        </div>
                        <span>Or browse local nanny-shares</span>
                    </div>
                </section>

                <section className="f-b">
                    <div>
                        <div className="logo">
                            <img src={Logo} alt=""/>
                        </div>

                        <div className="termos" >
                            <ul>
                                <li>Share Your Nanny</li>
                                <li>Our Story</li>
                                <li>Blog</li>
                                <li>Terms & Privacy </li>
                            </ul>
                        </div>
                        
                        <div>
                            <a href="#">
                                <img src={Facebook} alt="Facebook" />
                            </a>
                            <a href="#">
                                <img src={Twitter} alt="Twitter" />
                            </a>
                            <a href="#">
                                <img src={Instagram} alt="Instagram" />
                            </a>

                        </div>
                    </div>
                </section>


                <div className="f-line">
                    <div/>
                </div>
                <section className="f-c">
                    <div>
                        <span>Copyright © 2017 Hapu PTY Limited All rights reserved</span>
                    </div>

                </section>
        </footer>
      </>
  )
    

}




export default Footer