import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import NotFound from "./pages/NotFound.jsx";
import Browse from "./pages/Browse.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/movies" element={<Movies />} />
					<Route path="/browse" element={<Browse />} />
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
