import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterDetails = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  console.log(params);

  let character = store.characters.filter(
    (item, index) => index == params.theid
  )[0];

  return (
    <div className="jumbotron">
      <div className="d-flex container justify-content-center">
        <div className="w-25">
          <img
            src={
              "https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/" +
              (parseInt(params.theid) + 1) +
              ".jpg?raw=true"
            }
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className="w-50 ms-5">
          <h2 className="text-center">{character.name}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="row border-top border-danger container justify-content-center">
        <div className="col">
          <h6>Gender: </h6>
          <p> {character.gender}</p>
        </div>
        <div className="col">
          <h6>Birth Year: </h6>
          <p> {character.birth_year}</p>
        </div>
        <div className="col">
          <h6>Hair Color: </h6>
          <p> {character.hair_color}</p>
        </div>
        <div className="col">
          <h6>Eye Color: </h6>
          <p> {character.eye_color}</p>
        </div>
        <div className="col">
          <h6>Skin Color: </h6>
          <p> {character.skin_color}</p>
        </div>
        <div className="col">
          <h6>Height: </h6>
          <p> {character.height}</p>
        </div>
      </div>
    </div>
  );
};

export const PlanetDetails = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let planet = store.planets.filter((item, index) => index == params.theid)[0];

  return (
    <div className="jumbotron">
      <div className="d-flex container justify-content-center">
        <div className="w-25">
          <img
            src={
              "https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/" +
              (parseInt(params.theid) + 1) +
              ".jpg?raw=true"
            }
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className="w-50 ms-5">
          <h2 className="text-center">{planet.name}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="row border-top border-danger container justify-content-center">
      <div className="col">
        <h6> Name:</h6>
      {planet.name}</div>
      <div className="col">
        <h6>Climate:</h6>
      {planet.climate}</div>
      <div className="col">
        <h6>Terrain:</h6>{planet.terrain}</div>
      <div className="col">
        <h6>Rotation Period:</h6>
        {planet.rotation_period}</div>
    </div>
    </div>
  );
};
export const StarshipDetails = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <div className="jumbotron">
      <div className="d-flex container justify-content-center">
        <div className="w-25">
          <img
            src={
              "https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/" +
              (parseInt(params.theid) + 1) +
              ".jpg?raw=true"
            }
            className="card-img-top"
            alt="..."
          />
        </div>
        
        <div className="w-50 ms-5">
          <h2 className="text-center">{character.name}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="row border-top border-danger container justify-content-center">
        <div className="col">
          <h6>Name:</h6>
          {starship.name}</div>

        <div className="col">
          <h6>Model:</h6>
          {starship.model}</div>
        <div className="col">
          <h6>Cost:</h6>
          {starship.cost}</div>
      </div>
    </div>
    
  );
};
export const SpeciesDetails = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <div className="jumbotron">
      {species.classification}
      {species.language}
      {species.lifespan}
      {species.designation}
    </div>
  );
};
