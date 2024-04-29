import { useState } from "react";

const Notes = () => {
	const [notes, setNotes] = useState(localStorage.getItem("notes"));

	return (
		<div>
			<div>Notes</div>
			<textarea
				value={notes}
				style={{ maxHeight: "200px", maxWidth: "400px" }}
				onInput={(e) => {
					setNotes(e.target.value);
					localStorage.setItem("notes", e.target.value);
				}}
				cols="30"
				rows="10"></textarea>
		</div>
	);
};

export default Notes;
