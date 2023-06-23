
import React, { useEffect, useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from '../store/appContext.js';
import { Link } from "react-router-dom";
export const StarshipsCard = (props) => {
    const [isValid, setIsValid] = useState(true);
const handleImageError = () => {
      setIsValid(false);
    };
    const {store,actions}= useContext(Context)
    const handleFavorites = () => {
       actions.updateFavoriteStarships(props.starships)
    };
    return (
    <div className="card " style={{"width":"18rem"}}>
      <div className="frame" style={{"width":"18rem", "height" : "18rem" }}>
        {isValid ? (
          <img src={"https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/starships/" + (parseInt(props.index) + 1 ) + ".jpg?raw=true"} alt="Image" onError={handleImageError} className="w-100 h-100 "/>
        ) : (
          <img src={"https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200"} alt="Image" className="w-100 my-auto" />

        )}
      </div>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.model}</p>
    <p>{props.cost}</p>
    <Link to ={ "/starships-details/" + props.index}>Go somewhere</Link>  
    </div>
    <div className="buttonDiv mb-1">
          <i
            className={
              store.favoriteStarships.includes(props.starships) // this is from the store
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