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
	
	<div className="text-center mt-5 container">

        <h2 className="">Charcters</h2>
		<div className="row data-row">
			
          {store.characters?.map((character, index)=>  (
		<CharacterCard key = {index} name = {character.name} birth_year = {character.birth_year} gender = {character.gender} index = {index} />))}
		</div>
{/* <h2>Species</h2>
		<div className="row data-row">
			
         {store.species?.map((species, index)=> (
		<SpeciesCard key = {index} species = {species} index = {index} />))} 
		</div>
<h2>Planets</h2>
		<div className="row data-row">
			
         {store.planets?.map((planet, index)=> (
		<PlanetsCard key = {index} name = {planet} climate = {planet.climate}  terrain = {planet.terrain} rotation_period ={planet.rotation_planet} index = {index} />))} 
		</div>
		<h2>Starships</h2>
		<div className="row data-row">
			
         {store.starships?.map((starship, index)=> (
		<StarshipsCard key = {index} name = {starship.name} model = {starship.model}  cost = {starship.cost} index = {index}/>))} 
		</div> */}
	</div>
	);
	};
