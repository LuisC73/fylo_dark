import React  from 'react';
import illustration from '../../assets/illustration-intro.png'

function Home(){
    return(
        <section className="home">
        <img src={illustration} alt="illustration" className="home__img" />
        <div className="home__content">
        <h2 className="home__title">All your files in one secure location, accessible anywhere.</h2>
        <p className="home__text">Fylo stores all your most important files in one secure location. Access them wherever
          you need, share and collaborate with friends family, and co-workers.</p>
        <a href="#" className="home__button">Get Started</a>
        </div>
    </section>
    )
}

export default Home;