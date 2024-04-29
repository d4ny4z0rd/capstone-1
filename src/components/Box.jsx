import PropTypes from "prop-types";

const Box = ({ movie, selectedMovies, setSelectedMovies }) => {
	function handleSelection() {
		if (selectedMovies.includes(movie.id)) {
			setSelectedMovies(selectedMovies.filter((id) => id !== movie.id));
		} else setSelectedMovies([...selectedMovies, movie.id]);
	}

	console.log(selectedMovies);

	return (
		<div
			style={{
				border: selectedMovies.includes(movie.id)
					? "2px solid green"
					: "2px solid black",
				padding: "10px",
				margin: "10px",
				width: "200px",
				height: "200px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: selectedMovies.includes(movie.id)
					? "lightgreen"
					: "white",
			}}
			onClick={handleSelection}>
			{movie.name}
		</div>
	);
};

Box.propTypes = {
	movie: PropTypes.object,
	selectedMovies: PropTypes.array,
	setSelectedMovies: PropTypes.func,
};

export default Box;
