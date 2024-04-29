import PropTypes from "prop-types";

const Chip = ({ movie, moviesData, selectedMovies, setSelectedMovies }) => {
	console.log("Movie " + movie);
	const obj = moviesData.find((item) => item.id === movie);

	function handleRemoveSelection() {
		setSelectedMovies(selectedMovies.filter((index) => index != movie));
	}

	return (
		<div>
			{obj.name} &nbsp; &nbsp; <span onClick={handleRemoveSelection}>X</span>
		</div>
	);
};

Chip.propTypes = {
	movie: PropTypes.number,
	moviesData: PropTypes.array,
	selectedMovies: PropTypes.array,
	setSelectedMovies: PropTypes.func,
};

export default Chip;
