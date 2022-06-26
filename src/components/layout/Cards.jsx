import React from 'react';


function Cards(props){
    return(
      <div className="cards__element">
        <p className="cards__texts">
          {props.text}
        </p>
        <div className="cards__profile">
          <img src={props.img} alt="profile" />
          <div className="cards__info">
            <p className="cards__name">{props.name}</p>
            <p className="cards__title">{props.title}</p>
          </div>
        </div>
      </div>
    )
}

export default Cards;