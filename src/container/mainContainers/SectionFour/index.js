import React from 'react';
import './sectionFourStyles.css'

import ImgSection4 from '../../../assets/ImageSection4.svg'


export const SectionFour = () => {
    return(
        <section className="container_four" >
            <div>
                <div>
                    <h2>
                        A framework built for the long term
                    </h2>
                    <p>
                        Childcare is for the long term. And you need a framework you can count on that gives your share long term viability and success. That’s why we’ve defined Hapu around our three tribal principles; clearly defined process, transparency over money and equality of participation.
                    </p>
                    <span>
                        <a href="#">
                        Read how Hapu’s tribal background defines our app
                        </a>
                    </span>
                </div>
                
                <div>
                    <img src={ImgSection4} alt="A product to managing your schedule" />
                </div>
            </div>
        </section>
    )
}

export default SectionFour;
