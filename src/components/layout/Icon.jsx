import React from 'react';
import icon from "../../assets/icon-access.svg";



function Icon(props){
    return(
        <div className="icons__content">
          <div className="icons__img">
            <img src={props.img} alt="acces" />
          </div>
          <h4 className="icons__title">{props.title}</h4>
          <p className="icons__text">{props.text}</p>
        </div>
    )
}

export default Icon;