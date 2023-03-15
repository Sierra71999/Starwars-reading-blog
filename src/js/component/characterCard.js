import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from '../store/appContext.js';

export const CharacterCard = (props) => {
    return (
    <div className="card" style={{"width":"18rem"}}>
  <img src={rigoImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.birth}</p>
    <p>{props.gender}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

    )
}


