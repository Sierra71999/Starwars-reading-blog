import React, { useEffect, useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from '../store/appContext.js';
import { Link } from "react-router-dom";
export const CharacterCard = (props) => {
  const [activeFav, setActiveFav] = useState(false);
  const handleFavorites = (e) => {
    e.preventDefault();
    if (activeFav === true) {
      actions.characterFavoriteAndRemove(props);
      setActiveFav(false);
    } else {
      actions.artistFavorite(props);
      setActiveFav(true);
    }
  };
  useEffect(() => {
    if (location.pathname == "/favorites") {
      setActiveFav(true);
    }
  }, []);
    return (
<div className="card-container justify-content-between" >
      {/* this url was pulled from the starwars github */}
    <img src={"https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/" + (parseInt(props.index) + 1 ) + ".jpg?raw=true"} className="card-img-top" alt="..."/>
 <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.birth_year}</p>
    <p>{props.gender}</p>
    
    <Link to ={ "/character-details/" + props.index}>Go somewhere</Link>
    <div className="buttonDiv mb-1">
          <a className="btn btn-sm purplebutton" href={props.link}>
           
          </a>
          <i
            className={
              activeFav
                ? "fa-regular fas fa-heart fa-lg card-heart"
                : " fa-regular far fa-heart fa-lg card-heart"
            }
            style={{ color: "#8968CD" }}
            onClick={(e) => handleFavorites(e)}
          ></i>
    </div>
  </div>
</div>

    )
}


