import "../../style/css/ToolHeader.css";

const ToolHeader = (title, version) => {
	return (
		<div id="tool-header">
			<h1 id="tool-title">{title}</h1>
			<div id="tool-meta">
				<p>{version}</p>
			</div>
		</div>
	);
};

export default ToolHeader;
