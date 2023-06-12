import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from '../store/appContext.js';

export const StarshipsCard = (props) => {
    return (
    <div className="card" style={{"width":"18rem"}}>
      <img src={"https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/starships/" + (parseInt(props.index) + 1 ) + ".jpg?raw=true"} className="card-img-top" alt="..."/>

  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.model}</p>
    <p>{props.cost}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

    )
}