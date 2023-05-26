import "../style/css/Home.css";
import ResponseHelper from "./util/ResponseHelper";
import showResponse from "./util/ResponseUtil";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	const onToolClickListener = (tool) => {
		switch (tool) {
			case "cyber-security-skills":
				navigate("/" + tool);
				break;
			default:
				showResponse(0, "Wrong input");
		}
	};
	return (
		<div id="main-inner-container">
			<div id="root">
				<ResponseHelper />
				<div id="header">
					<h1 id="project-title">Panda Web Scrapper</h1>
					<p id="author">By Gaurav Saini</p>
					<div id="project-meta">
						<p>I3 2022-23 IV SEM</p>
						<p>Trainer: Ms. Layee Joshi</p>
					</div>
				</div>
				<div id="tools-container">
					<p className="category-label">Tools Available</p>
					<div
						class="tool"
						onClick={() => onToolClickListener("cyber-security-skills")}
					>
						<p class="tool-title">Cyber Security job skills requirement</p>
						<p class="tool-version-name"></p>
					</div>
					<p className="category-label">Coming Soon</p>
					<div class="tool">
						<p class="tool-title">E-Commerce product scrap</p>
						<p class="tool-version-name">_</p>
					</div>
					<div class="tool">
						<p class="tool-title">News Scrap</p>
						<p class="tool-version-name">_</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
