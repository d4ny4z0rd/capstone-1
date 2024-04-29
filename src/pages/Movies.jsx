import { useState } from "react";
import Box from "../components/Box";
import Chip from "../components/Chip";
import { useNavigate } from "react-router-dom";

const moviesData = [
	{
		id: 1,
		name: "Action",
		img: "",
	},
	{
		id: 2,
		name: "Drama",
		img: "",
	},
	{
		id: 3,
		name: "Romance",
		img: "",
	},
	{
		id: 4,
		name: "Thriller",
		img: "",
	},
	{
		id: 5,
		name: "Western",
		img: "",
	},
	{
		id: 6,
		name: "Horror",
		img: "",
	},
	{
		id: 7,
		name: "Fantasy",
		img: "",
	},
	{
		id: 8,
		name: "Music",
		img: "",
	},
	{
		id: 9,
		name: "Science Fiction",
		img: "",
	},
];

const Movies = () => {
	const [selectedMovies, setSelectedMovies] = useState([]);
	const navigate = useNavigate();

	function handleNextPage() {
		if (selectedMovies.length < 3) {
			alert("Please select 3 movies");
		} else {
			localStorage.setItem("selectedMovies", JSON.stringify(selectedMovies));
			localStorage.setItem("allData", JSON.stringify(moviesData));
			navigate("/browse");
		}
	}

	return (
		<div>
			Movies
			<div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
				{moviesData.map((movie) => (
					<Box
						movie={movie}
						key={movie.id}
						selectedMovies={selectedMovies}
						setSelectedMovies={setSelectedMovies}
					/>
				))}
			</div>
			<div>
				{selectedMovies.map((movie) => (
					<Chip
						movie={movie}
						moviesData={moviesData}
						key={movie}
						selectedMovies={selectedMovies}
						setSelectedMovies={setSelectedMovies}
					/>
				))}
			</div>
			<button onClick={handleNextPage}>Next Page</button>
		</div>
	);
};

export default Movies;
