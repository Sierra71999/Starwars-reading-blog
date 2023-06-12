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
		},
		//action is an object and getCharacters is a key
		actions: {
			
			//   characterFavorites: (character) => {
			// 	let favoriteCharacters = getStore().favoriteCharacters
			// 	favoriteCharacters = favoriteCharacters.filter(
			// 		(characters_i) => characters_i.characters_name != character.characters_name
			// 	);
			// 	let characters = [...favoriteCharacters, characters];
			// 	setStore({favoriteCharacters: characters});
			//   },
			//   charactersFavoriteRemove: (characters) => {
			// 	let favortieCharacters = getStore(). favortieCharacters;
			// 	favoriteCharacters = favortieCharacters.filter(
			// 		(characters_i) => characters_i.characters_name != characters.characters_name
			// 	);
			// 	setStore({favoriteCharacters: characters});
			//   },
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
					setStore({species:data.result})
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
					setStore({starships:data.result})
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
					setStore({planets:data.result})
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
