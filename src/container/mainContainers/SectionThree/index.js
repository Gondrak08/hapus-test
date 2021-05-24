import React from 'react';
import './sectionThreeStyles.css'
import ImgSection3 from '../../../assets/ImageSection3.svg'

export const SectionThree = () => {
    return (
        <section className="container_three" >
            <div>
                <div>
                    <img src={ImgSection3} alt="A product to share paymants and to make automated payments" id="img" />
                </div>

                <div>
                    <h2>Shared payments made simple</h2>
                    <p>
                        Sometimes it’s hard enough just sharing a restaurant bill. Try sharing that bill week in, week out and you might encounter more than a few snares. But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. You need never talk money or who owes what.
                     </p>
                    <span>
                        <a href="#">
                            Read how Bridget’s share (without Hapu) ended over $15
                        </a>
                     </span>
                </div>
            </div>
        </section>
    )
}

export default SectionThree