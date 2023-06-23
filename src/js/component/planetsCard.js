import React, { useEffect, useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from '../store/appContext.js';
import { Link } from "react-router-dom";
export const PlanetsCard = (props) => {
  const {store,actions}= useContext(Context)
 
const [isValid, setIsValid] = useState(true);
const handleImageError = () => {
      setIsValid(false);
    };
    const handleFavorites = () => {
      actions.updateFavoritePlanets(props.planets)
   };
    return (
    <div className="card" style={{"width":"18rem"}}>
      <div>
        {isValid ? (
          <img src={"https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/planets/" + (parseInt(props.index) + 1 ) + ".jpg?raw=true"} alt="Image" onError={handleImageError} className="w-100"/>
        ) : (
          <img src={"https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200"} alt="Image" className="w-100" />

        )}
      </div>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.climate}</p>
    <p>{props.terrain}</p>
    <p>{props.rotation_period}</p>
   
    <Link to ={ "/planet-details/" + props.index}>Go somewhere</Link>
    <div className="buttonDiv mb-1">
          <i
            className={
              store.favoritePlanets.includes(props.planets) // this is from the store
                ? "fa-regular fas fa-heart fa-lg card-heart"
                : " fa-regular far fa-heart fa-lg card-heart"
            }
            style={{ color: "#8968CD" }}
            onClick={() => handleFavorites()} // this line executes line 9
          ></i>
        </div>
  </div>
</div>

    )
}
