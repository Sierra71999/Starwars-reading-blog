import React from "react";
import { SpeciesCard } from "../component/speciesCard";
import { CharacterCard } from "../component/characterCard";
import { StarshipsCard } from "../component/starshipsCard";
import { PlanetsCard } from "../component/planetsCard";




export const Favorites = () => {
    const { store, actions } = useContext(Context);
  
    console.log(store.favoriteCharacters);
    console.log(store.favoritePlanets);
    console.log(store.favoriteSpecies);
    console.log(store.favoriteStarships);
  
    //these are for add favorites and defavorite one
  
    return (
      <div className=" container-fluid mt-5">
        <h1 className="mb-4">Favorites</h1>
  
        <div>
          <h3>Characters</h3>
        </div>
        <div className="card-row px-3 d-flex flex-row flex-wrap justify-content-start">
          {store.favoriteCharacters.map((characters, index) => {
            return (
              <CharacterCard
              key = {index} name = {character.name} birth = {character.birth_year}  gender = {character.gender} index = {index} 
              />
            );
          })}
        </div>
        <div>
          <h3>Characters</h3>
        </div>
        <div className="card-row px-3 d-flex flex-row flex-wrap justify-content-start">
          {store.favoriteCharacters.map((characters, index) => {
            return (
              <CharacterCard
              key = {index} name = {character.name} birth = {character.birth_year}  gender = {character.gender} index = {index} 
              />
            );
          })}
        </div>
        <div>
          <h3>Planets</h3>
        </div>
        <div className="card-row px-3 d-flex flex-row flex-wrap justify-content-start">
          {store.favoritePlanets.map((characters, index) => {
            return (
              
              <PlanetsCard key = {index} name = {planet.name} climate = {planet.climate}  terrain = {planet.terrain} rotation_period ={planet.rotation_planet} index = {index}  
              />
            );
          })}
        </div>
        <div>
          <h3>Characters</h3>
        </div>
        <div className="card-row px-3 d-flex flex-row flex-wrap justify-content-start">
          {store.favoriteCharacters.map((characters, index) => {
            return (
              <CharacterCard
              key = {index} name = {character.name} birth = {character.birth_year}  gender = {character.gender} index = {index} 
              />
            );
          })}
        </div>
  
       
      </div>
    );
  };
  