import axios from "axios";
import { useEffect, useState } from "react";
import { genreObjects } from "../utils/genreObjects.jsx";

const genreIds = [
	{
		id: 28,
		name: "Action",
	},
	{
		id: 12,
		name: "Adventure",
	},
	{
		id: 16,
		name: "Animation",
	},
	{
		id: 35,
		name: "Comedy",
	},
	{
		id: 80,
		name: "Crime",
	},
	{
		id: 99,
		name: "Documentary",
	},
	{
		id: 18,
		name: "Drama",
	},
	{
		id: 10751,
		name: "Family",
	},
	{
		id: 14,
		name: "Fantasy",
	},
	{
		id: 36,
		name: "History",
	},
	{
		id: 27,
		name: "Horror",
	},
	{
		id: 10402,
		name: "Music",
	},
	{
		id: 9648,
		name: "Mystery",
	},
	{
		id: 10749,
		name: "Romance",
	},
	{
		id: 878,
		name: "Science Fiction",
	},
	{
		id: 10770,
		name: "TV Movie",
	},
	{
		id: 53,
		name: "Thriller",
	},
	{
		id: 10752,
		name: "War",
	},
	{
		id: 37,
		name: "Western",
	},
];

const Browse = () => {
	const [fetchedMovies, setFetchedMovies] = useState([]);

	const genreNames = genreObjects.map((object) =>
		genreIds.find((genre) => genre.name === object.name)
	);

	console.log(genreNames);

	const selectedGenreIds = genreNames.map((genre) => genre.id).join(",");

	console.log(selectedGenreIds);

	const options = {
		method: "GET",
		url: "https://advanced-movie-search.p.rapidapi.com/discover/movie",
		params: {
			with_genres: selectedGenreIds,
			page: "1",
		},
		headers: {
			"X-RapidAPI-Key": "27bd669d47msh03f67d0d5f09806p10dd1fjsnbfccf910002e",
			"X-RapidAPI-Host": "advanced-movie-search.p.rapidapi.com",
		},
	};

	async function handleRequest() {
		try {
			const response = await axios.request(options);
			setFetchedMovies(response.data.results);
		} catch (error) {
			console.error(error);
		}
	}

	// Make API request on component mount or when options change
	useEffect(() => {
		handleRequest();
	}, []);
	console.log(fetchedMovies);

	return (
		<div>
			Browse
			{genreNames.map((genre) => (
				<div key={genre.id}>{genre.name}</div>
			))}
			{fetchedMovies.map((movie) => {
				return (
					<div
						key={movie.original_title}
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "1rem",
						}}>
						{movie.original_title}
						<img
							width={200}
							height={200}
							src={movie.poster_path}
							alt={movie.original_title}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default Browse;
