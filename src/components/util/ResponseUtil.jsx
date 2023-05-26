import $ from "jquery";
let responseTimeout;
const showResponse = (type, message, duration = 10000) => {
	let background = "#f13031";
	if (type === 1) {
		background = "#2BB772";
	}

	$("#response-container").css({ top: "0", background: background });
	$("#response-message").text(message);

	hideResponseAfterDelay(duration);
};
const hideResponseAfterDelay = (duration) => {
	clearTimeout(responseTimeout);
	responseTimeout = setTimeout(() => {
		$("#response-container").css("top", "-100%");
	}, duration);
};

export const hideResponse = () => {
	clearTimeout(responseTimeout);
	$("#response-container").css("top", "-100%");
};

export default showResponse;
