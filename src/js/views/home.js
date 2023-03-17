import React, { useEffect, useContext, useMemo } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from '../store/appContext.js';
import { CharacterCard } from "../component/characterCard";
import {SpeciesCard} from '../component/speciesCard.js';
import {PlanetsCard} from '../component/planetsCard.js';
//import {StarshipsCard} from '../component/starshipsCard.js';

export const Home = () => {
	const { store, actions } = useContext(Context);
	//will only run once when pg loads or if something is in [] (means array) changes(only if change occurs)
	const characters2 = useMemo(() => {
		if (!store) return null;
		else return store.characters;
	  });
	  const species2 = useMemo(() => {
		if (!store) return null;
		else return store.species;
	  });
	  const planets2 = useMemo(() => {
		if (!store) return null;
		else return store.planets;
	  });
	  const starships2 = useMemo(() => {
		if (!store) return null;
		else return store.starships;
	  });
	useEffect(() => {
		//actions is from the flux.js and characters is found in the action object
		//! means true or false
		if (!store) {
         actions.getCharacters().then((resp) => console.log(resp) );
         actions.getPlanets().then((resp) => console.log(resp) );
         actions.getSpecies().then((resp) => console.log(resp) );
         actions.getStarships().then((resp) => console.log(resp) );
    }
},[store])

	//if store(flux.js) is empty return null bc try to used data and it is empty component will render ig full
    if ( !characters2 || !species2 || !planets2 || !starships2)return null;
	return ( 
	
	<div className="text-center mt-5">
		<div>
          characters2.map((character, index)=> (
		<CharacterCard key = {index} name = {character.name} birth = {character.birth_year}  gender = {character.gender} />))} 
		</div>
		<div>
         {store.species.map((species, index)=> (
		<SpeciesCard key = {index} name = {character.name} birth = {character.birth_year}  gender = {character.gender} />))} 
		</div>
		<div>
         {store.planets.map((planet, index)=> (
		<PlanetsCard key = {index} name = {character.name} birth = {character.birth_year}  gender = {character.gender} />))} 
		</div>
		<div>
         {store.starships.map((starship, index)=> (
		<StarshipsCard key = {index} name = {starship.name} birth = {character.birth_year}  gender = {character.gender} />))} 
		</div>
	</div>
	);
	};
