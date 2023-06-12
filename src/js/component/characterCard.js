import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from '../store/appContext.js';
import { Link } from "react-router-dom";
export const CharacterCard = (props) => {
    return (
    <div className="card" style={{"width":"18rem"}}>
      {/* this url was pulled from the starwars github */}
    <img src={"https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/" + (parseInt(props.index) + 1 ) + ".jpg?raw=true"} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.birth_year}</p>
    <p>{props.gender}</p>
    <Link to ={ "/character-details/" + props.index}><a href="#" className="btn btn-primary">Go somewhere</a></Link>
    
  </div>
</div>

    )
}


