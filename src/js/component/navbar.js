import React , {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Navbar = () => {
	const {store, actions} = useContext(Context);
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand" href="#"><i className="fa-brands fa-jedi-order fa-xl" style={{color: "#ed0707"}}></i></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item dropdown">
          <button className="btn btn-dark dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
            favorites
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><a className="dropdown-item" href="#">Character</a></li>
            {store.favoriteCharacters.map( (character , index) => (
				<div key = {index} >{character.name}</div>
			)
			)}
          </ul>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><a className="dropdown-item" href="#">Species</a></li>
            {store.favoriteSpecies.map( (species , index) => (
				<div key = {index} >{species.name}</div>
			)
			)}
          </ul>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><a className="dropdown-item" href="#">Planets</a></li>
            {store.favoritePlanets.map( (planets , index) => (
				<div key = {index} >{planets.name}</div>
			)
			)}
          </ul>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><a className="dropdown-item" href="#">Starships</a></li>
            {store.favoriteStarships.map( (starships , index) => (
				<div key = {index} >{starships.name}</div>
			)
			)}
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
	);
};
