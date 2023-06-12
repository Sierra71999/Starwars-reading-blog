import React, { useEffect, useContext, useMemo } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from '../store/appContext.js';
import { CharacterCard } from "../component/characterCard";
import {SpeciesCard} from '../component/speciesCard.js';
import {PlanetsCard} from '../component/planetsCard.js';
import { StarshipsCard } from "../component/starshipsCard";

//import {StarshipsCard} from '../component/starshipsCard.js';

export const Home = () => {
	const { store, actions } = useContext(Context);
	//will only run once when pg loads or if something is in [] (means array) changes(only if change occurs)
	


	//if store(flux.js) is empty return null bc try to used data and it is empty component will render ig full
   
	return ( 
	
	<div className="text-center mt-5 container d-flex">
		<div className="d-flex ">
			<h2 className="">Charcters</h2>
          {store.characters?.map((character, index)=>  (
		<CharacterCard key = {index} name = {character.name} birth = {character.birth_year}  gender = {character.gender} index = {index} />))}
		</div>
		<div className="d-flex">
			<h2>Species</h2>
         {store.species?.map((species, index)=> (
		<SpeciesCard key = {index} name = {species.name} classification = {species.classification}  language = {species.language} lifespan = {species.lifespan} designation = {species.designation} index = {index} />))} 
		</div>
		<div className="d-flex">
			<h2>Planets</h2>
         {store.planets?.map((planet, index)=> (
		<PlanetsCard key = {index} name = {planet.name} climate = {planet.climate}  terrain = {planet.terrain} rotation_period ={planet.rotation_planet} index = {index} />))} 
		</div>
		<div className="d-flex">
			<h2>Starships</h2>
         {store.starships?.map((starship, index)=> (
		<StarshipsCard key = {index} name = {starship.name} model = {starship.model}  cost = {starship.cost} index = {index}/>))} 
		</div>
	</div>
	);
	};
