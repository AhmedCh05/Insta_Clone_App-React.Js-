import "./App.css";
import Timeline from "./components/Timeline";
import { useState } from "react";
import Profile from "./components/Profile";
import Comments from "./components/Comments";
import Mailbox from "./components/Mailbox";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DMs from "./components/DMs";
import { directMessages, Data } from "./JsonFile/materialdata";

const App = () => {
	const [msgText] = useState(directMessages);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Timeline data={Data} />} />
				<Route
				path="/:id"
				exact={true}
				element={<Profile data={Data} />}
				></Route>
				<Route
					path="/:id/:title"
					exact={true}
					element={<Comments data={Data} />}></Route>
				<Route
					path="/directMessages"
					exact={true}
					element={<DMs data={msgText} />}></Route>
				<Route
					path="/directMessages/:id"
					exact={true}
					element={<Mailbox msgText={msgText} data={Data} />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
