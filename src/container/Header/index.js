import React from 'react'
import './HeaderStyless.css'

import Navbar from '../navbar'
import PlayButton from '../../assets/Playbutton.svg'
import HeaderBox from '../../assets/ImageHeader.svg'
import ProfileImg from '../../assets/ProfileImage.svg'


import { Experiment, Variant } from '@marvelapp/react-ab-test'

export const Header = () => {


    const HeroTextA = () => {
        return (
            <>
                <div>    
                    <h1>
                        Easily creator or join a local nanny share with Hapu
                    </h1>
                </div>
                <div>
                    <p>Hapu is Airbnb for nanny share. Share you home, nanny and costs and create a new flexbile, affordable solutions in childcare.</p>
                </div>
            </>
        )
    }

    const HeroTextB = () => {
        return (
            <>
                <div>
                    <h1>
                        Create the childcare you need at a price you can afford
                    </h1>
                </div>
                <div>
                    <p>Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started.</p>
                </div>
            </>
        )
    }



    return (
       
        <header>
            <section className="hero" >
            <Navbar />
            <div className="header" >
                <div className="header_container" >
                    <div className="header_info" >
                            <Experiment name="Hero Text">
                                <Variant name="original">
                                    <HeroTextA />
                                </Variant>
                                <Variant name="test">
                                    <HeroTextB />
                                </Variant>
                            </Experiment>
                        <div className="play_button_box" >
                            <a href="#">
                                <img src={PlayButton} alt=""/>
                            </a>
                            <a href="#">
                                <span>See hapu in action (27seconds)</span>
                            </a>
                        </div>
                    </div>

                        <div className="header_box" >
                            <div>
                                <img src={HeaderBox} alt=""/>
                            </div>
                    </div>
                </div>
                </div>
            </section>
            
        <section className="header_footer">
            <div>
                <div className="header_footer_container">
                    <img src={ProfileImg} alt="" />
                    <div>
                        <a href="#">
                            <span>
                                Sarah's day care available now in North Sydney
                            </span>
                        </a>
                        <span>
                            Wednesday, Thursday, Friday - 7:30 - 5:30
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </header>
    )
}

export default Header;