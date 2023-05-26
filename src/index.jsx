import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import reportWebVitals from "./reportWebVitals";
import "./style/css/Main.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Wrapper from "./components/util/ScrollToTop";
import CyberSecuritySkills from "./components/tools/cyber_security_skills";

const root = ReactDOM.createRoot(
	document.getElementById("main-outer-container")
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Wrapper>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<Home />} />
					<Route
						path="/cyber-security-skills"
						element={<CyberSecuritySkills />}
					/>
				</Routes>
			</Wrapper>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
