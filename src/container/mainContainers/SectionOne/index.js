import React from 'react';
import './sectionOneStyles.css'
import ImgSection1 from '../../../assets/ImageSectionOne.svg';


export const SectionOne = () => {
    return (
        <section className="container_one" >
            <div>
                <div>
                    <h2>
                        Share your home,<br />
                    nanny and costs
                  </h2>
                    <p>
                        You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. <span>Hapu means tribe</span> and it’s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community.
                  </p>
                    <span>
                        Ready to get started?
                  </span>
                </div>

                <div className="container-image" >
                    <img src={ImgSection1} alt=" A product use for finding nannies using gps" id="img-one" />
                </div>

            </div>
        </section>
    )
}

export default SectionOne;