import "../../style/css/Tool.css";
import ResponseHelper from "../util/ResponseHelper";
import ToolHeader from "../util/ToolHeader";
import $ from "jquery";
import showResponse from "../util/ResponseUtil";
import axios from "axios";
import { API_URL } from "../util/ApiUtil";

const CyberSecuritySkills = () => {
	const onStartScrapListener = async () => {
		let jobType = $("#job-type").val();
		let jobSite = $("#job-site").val();
		const data = {
			type: jobType,
			site: jobSite,
		};
		try {
			let response = await axios.post(API_URL + "cyber-security-skills", data);
			if (!response) {
				showResponse(0, "Something went wrong!");
				return;
			}
			$("#tool-output").text(response.data);
		} catch (error) {
			showResponse(0, error);
		}
	};

	return (
		<div id="main-inner-container">
			<div id="root">
				<ResponseHelper />
				{ToolHeader("Cyber Security Skill Scrapper", "v1.0.0")}
				<div class="tool-specific-container">
					<div class="tool-input-form">
						<div class="tool-input-container">
							<select name="job-type" id="job-type">
								<option value="pentester">Pentester</option>
							</select>
							<select name="job-site" id="job-site">
								<option value="linkedin">Naukari.com</option>
							</select>
						</div>
						<button class="submit-button" onClick={onStartScrapListener}>
							Start Scrap
						</button>
					</div>
					<div class="tool-output-container">
						<p id="tool-output"></p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CyberSecuritySkills;
