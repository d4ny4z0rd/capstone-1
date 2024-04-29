import { genreObjects } from "../utils/genreObjects.jsx";

export default function UserInfo() {
	const user = JSON.parse(localStorage.getItem("formData"));
	return (
		<>
			<p>User Info</p>
			<p>{user.name}</p>
			<p>{user.email}</p>
			<p>{user.username}</p>
			{genreObjects.map((genre) => {
				return <p key={genre.id}>{genre.name}</p>;
			})}
		</>
	);
}
