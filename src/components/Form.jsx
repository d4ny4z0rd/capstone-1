import { useState } from "react";

const Form = () => {
	const [data, setData] = useState({
		name: "",
		username: "",
		email: "",
		phone: "",
		checkbox: false,
	});

	function handleSubmit(e) {
		e.preventDefault();
		validate();
		console.log(data);
	}

	function validatePhone(phone) {
		const phoneRegex = /^[0-9]{10}$/;
		return phoneRegex.test(phone);
	}

	function validate() {
		if (data.name.trim.length === 0) console.warn("Name is required");
		if (data.username.trim.length === 0) console.warn("Username is required");
		if (data.email.trim.length === 0) console.warn("Email is required");
		if (data.phone.trim.length === 0 || !validatePhone(data.phone)) {
			console.warn("Phone is either empty or invalid");
		}
		if (!data.checkbox) console.warn("Checkbox is required");
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Name"
					value={data.name}
					onInput={(e) => setData({ ...data, name: e.target.value })}
				/>
				<input
					type="text"
					placeholder="Username"
					value={data.username}
					onInput={(e) => setData({ ...data, username: e.target.value })}
				/>
				<input
					type="text"
					placeholder="email"
					value={data.email}
					onInput={(e) => setData({ ...data, email: e.target.value })}
				/>
				<input
					type="tel"
					placeholder="Phone"
					value={data.phone}
					onInput={(e) => setData({ ...data, phone: e.target.value })}
				/>
				<input
					type="checkbox"
					value={data.checkbox}
					onChange={(e) => setData({ ...data, checkbox: e.target.value })}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Form;
