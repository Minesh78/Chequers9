import React, { useState, useEffect } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Loader from "./Components/Loader";
import  ProjectDetails  from "./Components/ProjectDetails";

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 5100);
	}, []);

	return (
		<>
			{loading ? <Loader /> : <></>}

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="projects" element={<Projects />}/>
            <Route path="projects/:id/:title" element={<ProjectDetails />} />
						<Route path="services" element={<Services />} />
						<Route path="contact" element={<Contact />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
