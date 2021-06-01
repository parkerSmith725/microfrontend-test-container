import React, { useState } from "react";
import MicroFrontend from "./MicroFrontend";

import "./App.css";

const { DASHBOARD_HOST: dashboardHost } = process.env;

function Chat({ history }) {
	return null;
	//return <MicroFrontend history={history} host={dogsHost} name="chat" />;
}

function Dashboard({ history }) {
	console.log("running", dashboardHost);
	let host = "https://nostalgic-spence-09b48e.netlify.app";
	return (
		<MicroFrontend
			history={history}
			host={host}
			name="dashboard"
			//integrity="sha384-xgEUhh3umVoyzAS3Lml8p3Au0C8ZR8LJBDuEkHaNKgalFk+FJZZ/ly4bJYhuiipO"
			//integrity="sha384-xgEUhh3umVoyzAS3Lml8p3Au0C8ZR8LJBDuEkHaNKgalFk+FJZZYhuiipO"
		/>
	);
}

function Test({ history }) {
	console.log("running lawyers");
	let host = "https://trusting-booth-32cc60.netlify.app";
	return (
		<MicroFrontend
			history={history}
			host={host}
			name="lawyers"
			//integrity="sha384-xgEUhh3umVoyzAS3Lml8p3Au0C8ZR8LJBDuEkHaNKgalFk+FJZZ/ly4bJYhuiipO"
			//integrity="sha384-xgEUhh3umVoyzAS3Lml8p3Au0C8ZR8LJBDuEkHaNKgalFk+FJZZYhuiipO"
		/>
	);
}

function App() {
	return (
		<div className="App">
			This is the container app
			<div className="home">
				<div className="content">
					<div className="cat">{/* <Chat /> */}</div>
					<div id="dash">
						<Dashboard />
						<div id="dashboard-container" />
					</div>
					<div id="lawyers">
						<Test />
						<div id="lawyers-container" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
