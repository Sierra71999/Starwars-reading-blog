import React, { useEffect, useContext, useMemo } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from '../store/appContext.js';
import { CharacterCard } from "../component/characterCard";
import {SpeciesCard} from '../component/speciesCard.js';
import {PlanetsCard} from '../component/planetsCard.js';
import { StarshipsCard } from "../component/starshipsCard";



export const Home = () => {
	const { store, actions } = useContext(Context);
	//will only run once when pg loads or if something is in [] (means array) changes(only if change occurs)
	


	//if store(flux.js) is empty return null bc try to used data and it is empty component will render ig full
   
	return ( 
	
	<div className="home-container container-fluid mt-5">
		<h2 className="mbt-">Charcters</h2>
		<div className="characters-container ">
			
          {store.characters?.map((character, index)=>  (
		<CharacterCard key = {index} name = {character.name} birth = {character.birth_year}  gender = {character.gender} index = {index} />))}
		</div>
		<div>
			<h2 className="mb-4">Species</h2>
			</div>
		<div className="species-container">
			
			
         {store.species?.map((species, index)=> (
		<SpeciesCard key = {index} name = {species.name} classification = {species.classification}  language = {species.language} lifespan = {species.lifespan} designation = {species.designation} index = {index} />))} 
		</div>
		
			<div><h2 className="mb-4">Planets</h2></div>
			<div className="planets-container">
         {store.planets?.map((planet, index)=> (
		<PlanetsCard key = {index} name = {planet.name} climate = {planet.climate}  terrain = {planet.terrain} rotation_period ={planet.rotation_planet} index = {index} />))} 
		</div>
		
			<div><h2 className="mb-4">Starships</h2></div>
			<div className="starships-container">
         {store.starships?.map((starship, index)=> (
		<StarshipsCard key = {index} name = {starship.name} model = {starship.model}  cost = {starship.cost} index = {index}/>))} 
		</div>
	</div>
	);
	};
