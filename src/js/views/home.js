import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from '../store/appContext.js';
import { CharacterCard } from "../component/characterCard";
export const Home = () => {
	const { store, actions } = useContext(Context);
	//will only run once when pg loads or if something is in [] (means array) changes(only if change occurs)
	useEffect(() => {
		//actions is from the flux.js and characters is found in the action object
		
         actions.getCharacters().then((resp) => console.log(resp) );
         actions.getPlanets().then((resp) => console.log(resp) );
         actions.getSpecies().then((resp) => console.log(resp) );
         actions.getStarships().then((resp) => console.log(resp) );
        
	},[])
	//if store(flux.js) is empty return null bc try to used data and it is empty component will render ig full
    if ( !store.characters || !store.species)return null;
	return ( 
	
	<div className="text-center mt-5">
		<div>
         {store.characters.map((character, index)=> (
		<CharacterCard key = {index} name = {character.name} birth = {character.birth_year}  gender = {character.gender} />))} 
		</div>
		<div>
         {store.planets.map((character, index)=> (
		<PlanetsCard key = {index} name = {planet.name} birth = {character.birth_year}  gender = {character.gender} />))} 
		</div>
	</div>
	);
	};
