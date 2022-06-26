import React from 'react';
import './App.scss';
import Nav from './components/layout/Nav';
import Home from './components/layout/Home';
import Icon from './components/layout/Icon';
import Works from './components/layout/Works';
import Cards from './components/layout/Cards';
import Access from './components/layout/Access';
import Footer from './components/layout/Footer';
import img from './js/img';


function App() {

  return (
    <div className="App">
    <Nav />
    <main>
    <Home />
      <section className="icons">
        <div className="icons__container">
            <Icon
              title="Access your files, anywhere"
              text="The ability to use a smartphone, tablet, or computer to access your account means your
              files follow you everywhere."
              img={img.access}/>
              <Icon
              title="Security you can trust"
              text="2-factor authentication and user-controlled encryption are just a couple of the security
              features we allow to help secure your files."
              img={img.security} />
              <Icon
              title="Real-time collaboration"
              text="Securely share files and folders with friends, family and colleagues for live
              collaboration.
              No email attachments required."
              img={img.collaboration} />
              <Icon
              title="Store any type of file"
              text="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing
              for all
              file types to be securely stored and shared."
              img={img.any} />
        </div>
      </section>
    <Works />
    <section className="cards">
      <Cards 
      text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
      become a well-oiled collaboration machine."
      name="Satish Patel"
      title="Founder & CEO, Huddle" 
      img={img.profile1} />
      <Cards 
      text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
      become a well-oiled collaboration machine."
      name="Bruce McKenzie"
      title="Founder & CEO, Huddle" 
      img={img.profile2} />
      <Cards 
      text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
      become a well-oiled collaboration machine."
      name="Iva Boyd"
      title="Founder & CEO, Huddle"
      img={img.profile3} />
    </section>
    <Access />
    </main>
    <Footer />
    </div>

  )
}

export default App
