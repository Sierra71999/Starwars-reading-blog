import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from '../store/appContext.js';
import { Link } from "react-router-dom";
export const SpeciesCard = (props) => {
  const handleFavorites = () => {
    actions.updateFavoriteSpecies(props.species)
 };
 const {store,actions}= useContext(Context)

    return (
    <div className="card" style={{"width":"18rem"}}>
     <img src={"https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/species/" + (parseInt(props.index) + 1 ) + ".jpg?raw=true"} className="card-img-top" alt="..."/>

  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.classification}</p>
    <p>{props.language}</p>
    <p>{props.lifespan}</p>
    <p>{props.designation}</p>
    <Link to ={ "/species-details/" + props.index}>Go somewhere</Link>
  </div>
  <div className="buttonDiv mb-1">
          <i
            className={
              store.favoriteSpecies.includes(props.species) // this is from the store
                ? "fa-regular fas fa-heart fa-lg card-heart"
                : " fa-regular far fa-heart fa-lg card-heart"
            }
            style={{ color: "#8968CD" }}
            onClick={() => handleFavorites()} // this line executes line 9
          ></i>
        </div>
</div>

    )
}
