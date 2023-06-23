const getState = ({ getStore, getActions, setStore }) => {
	const apiUrl = "https://swapi.dev/api"
	return {
		store: {
			//null is used bc (for now) so i can test if the data exist
			// store is used so we have to fetch it once than store helps be faster / and we can reused data throughout code
			characters: [],
			species: [],
			starships: [],
			planets: [],
			favoriteCharacters: [],
			favoritePlanets: [],
            favoriteSpecies: [],
			favoriteStarships: []
		},
		//action is an object and getCharacters is a key
		actions: {
			//function is to add and remove characters underneath
			updateFavoriteCharacters: (newFavorite) => {
				let favoritesCharacters = getStore().favoriteCharacters;
			  
				if (favoritesCharacters.includes(newFavorite)) { // Check if newFavorite is already in favorites
				  let newFavoriteCharacters = favoritesCharacters.filter(
					(item) => item !== newFavorite // Filter out the character to be removed
				  );
				  setStore({ favoriteCharacters: newFavoriteCharacters });
				} else {
				  let newFavoriteCharacters = [...favoritesCharacters, newFavorite]; // Add newFavorite to favorites another way to do this is the push method
				  setStore({ favoriteCharacters: newFavoriteCharacters }); //save command 
				}
			  },
			updateFavoritePlanets: (newFavorite) => {
				let favoritesPlanets = getStore().favoritePlanets;
			  
				if (favoritesPlanets.includes(newFavorite)) { // Check if newFavorite is already in favorites
				  let newFavoritePlanets = favoritesPlanets.filter(
					(item) => item !== newFavorite // Filter out the character to be removed
				  );
				  setStore({ favoritePlanets: newFavoritePlanets });
				} else {
				  let newFavoritePlanets = [...favoritesPlanets, newFavorite]; // Add newFavorite to favorites another way to do this is the push method
				  setStore({ favoritePlanets: newFavoritePlanets }); //save command 
				}
			  },
			updateFavoriteSpecies: (newFavorite) => {
				let favoritesSpecies = getStore().favoriteSpecies;
			  
				if (favoritesSpecies.includes(newFavorite)) { // Check if newFavorite is already in favorites
				  let newFavoriteSpecies = favoritesSpecies.filter(
					(item) => item !== newFavorite // Filter out the character to be removed
				  );
				  setStore({ favoriteSpecies: newFavoriteSpecies });
				} else {
				  let newFavoriteSpecies = [...favoritesSpecies, newFavorite]; // Add newFavorite to favorites another way to do this is the push method
				  setStore({ favoriteSpecies: newFavoriteSpecies }); //save command 
				}
			  },
			updateFavoriteSpecies: (newFavorite) => {
				let favoritesStarships = getStore().favoriteSpecies;
			  
				if (favoritesStarships.includes(newFavorite)) { // Check if newFavorite is already in favorites
				  let newFavoriteStarships = favoritesStarships.filter(
					(item) => item !== newFavorite // Filter out the character to be removed
				  );
				  setStore({ favoriteStarships: newFavoriteStarships });
				} else {
				  let newFavoriteStarships = [...favoritesStarships, newFavorite]; // Add newFavorite to favorites another way to do this is the push method
				  setStore({ favoriteStarships: newFavoriteStarships }); //save command 
				}
			  },
			 
			getCharacters: async () => {
				//doesnt work move onto catch
				try{
					const response = await fetch(apiUrl + "/people");
					//grab response and read  json data that was Fetched on line 11
					const data = await response.json();
					setStore({characters:data.results})
					// it is data.results bc the responce is an object that has a key named results that holds the information we need tho fetch 
					//always need a return statement in try
					return data;
				}
				//catch is to alert on error if try doeant work 
				catch{
                     (error) => console.log(error);
				}
				//get response and then transforms
			},
			
				
			getSpecies: async () => {
				//if try(to fetch) doesnt work move onto catch
				try{
					const response = await fetch(apiUrl + "/species");
					//grab response and read  json data that was Fetched on line 11
					const data = await response.json();
					setStore({species:data.results})
					// it is data.results bc the responce is an object that has a key named results that holds the information we need tho fetch 
					//always need a return statement in try
					return data;
				}
				//catch is to alert on error if try doeant work 
				catch{
                     (error) => console.log(error);
				}
				//get response and then transforms
			},
			getStarships: async () => {
				//if try(to fetch) doesnt work move onto catch
				try{
					const response = await fetch(apiUrl + "/starships");
					//grab response and read  json data that was Fetched on line 11
					const data = await response.json();
					setStore({starships:data.results})
					// it is data.results bc the responce is an object that has a key named results that holds the information we need tho fetch 
					//always need a return statement in try
					return data;
				}
				//catch is to alert on error if try doeant work 
				catch{
                     (error) => console.log(error);
				}
				//get response and then transforms
			},
			getPlanets: async () => {
				//if try(to fetch) doesnt work move onto catch
				try{
					const response = await fetch(apiUrl + "/planets");
					//grab response and read  json data that was Fetched on line 11
					const data = await response.json();
					setStore({planets:data.results})
					// it is data.results bc the responce is an object that has a key named results that holds the information we need tho fetch 
					//always need a return statement in try
					return data;
				}
				//catch is to alert on error if try doeant work 
				catch{
                     (error) => console.log(error);
				}
				//get response and then transforms
			},
		}
	};
};

export default getState;
