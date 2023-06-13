import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from '../store/appContext.js';
import { Link } from "react-router-dom";
export const StarshipsCard = (props) => {
    return (
    <div className="card-container">
      <img src={"https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/starships/" + (parseInt(props.index) + 1 ) + ".jpg?raw=true"} className="card-img-top" alt="..."/>

  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.model}</p>
    <p>{props.cost}</p>
    <Link to ={ "/starships-details/" + props.index}>Go somewhere</Link>  
    </div>
</div>

    )
}