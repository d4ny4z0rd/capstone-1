import News from "../components/News";
import Notes from "../components/Notes";
import UserInfo from "../components/UserInfo";

const Dashboard = () => {
	const user = JSON.parse(localStorage.getItem("formData"));

	console.log(user);

	return (
		<div>
			Dashboard
			<UserInfo />
			<Notes />
			<News />
		</div>
	);
};

export default Dashboard;
