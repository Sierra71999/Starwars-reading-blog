import React, { useEffect, useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from '../store/appContext.js';
import { Link } from "react-router-dom";
export const CharacterCard = (props) => {
  const {store,actions}= useContext(Context)
  const handleFavorites = () => {
     actions.updateFavoriteCharacters(props.character)
  };
  
    return (
      <div className="col">
        <div className="card" style={{"width":"18rem"}}>
      
      {/* this url was pulled from the starwars github */}
    <img src={"https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/" + (parseInt(props.index) + 1 ) + ".jpg?raw=true"} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.birth_year}</p>
    <p>{props.gender}</p>
    
    <Link to ={ "/character-details/" + props.index}>Go somewhere</Link>
    <div className="buttonDiv mb-1">
          <i
            className={
              store.favoriteCharacters.includes(props.character) // this is from the store
                ? "fa-regular fas fa-heart fa-lg card-heart"
                : " fa-regular far fa-heart fa-lg card-heart"
            }
            style={{ color: "#8968CD" }}
            onClick={() => handleFavorites()} // this line executes line 9
          ></i>
        </div>
  </div>
</div>
      </div>
    

    )
}


