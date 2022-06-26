import React from 'react';
import illustration from '../../assets/illustration-stay-productive.png'
import icon from '../../assets/icon-arrow.svg'

function Works(){
    return(
        <section className="works">
         <div className="works__box">
                <img src={illustration} alt="illustration" className="works__img" />
            </div>
            <div className="works__content" >
                <h3 className="works__title">Stay productive, wherever you are</h3>
                <p className="works__texts"> Never let location be an issue when accessing your files. Fylo has you covered for
                all of your file
                storage needs.
                </p>
                <p className="works__texts">Securely share files and folders with friends, family and colleagues for live
                collaboration. No email
                attachments required.</p>
                <a href="#" className="works__button">
                <span>See how Fylo works</span>
                <img src={icon} alt="icon" className="works__icon" />
                </a>
        </div>
    </section>
    )
}

export default Works;