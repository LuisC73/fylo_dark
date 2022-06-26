import React from 'react'

function Access(){
    return(
    <section className="access">
      <div className="access__container">
        <h3 className="access__title">Get early access today</h3>
        <p className="access__text">It only takes a minute to sign up and our free starter tier is extremely generous. If
          you have any
          questions, our support team would be happy to help you.</p>
        <div className="access__inputs">
          <input type="text" className="access__email" placeholder="example@fylo.com" />
          <input type="submit" value="Get Started For Free" className="access__submit" />
        </div>
      </div>
    </section>
    )
}

export default Access;