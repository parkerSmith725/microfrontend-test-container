import React, { useEffect } from "react";

function MicroFrontend({ name, host, history, integrity }) {
	useEffect(() => {
		const scriptId = `micro-frontend-script-${name}`;

		const renderMicroFrontend = () => {
			if (window[`render${name}`]) {
				window[`render${name}`](`${name}-container`, history);
			}
		};

		if (document.getElementById(scriptId)) {
			renderMicroFrontend();
			return;
		}

		fetch(`${host}/asset-manifest.json`)
			.then((res) => res.json())
			.then((manifest) => {
				console.log("manfiest", manifest);
				const script = document.createElement("script");
				script.id = scriptId;
				script.crossOrigin = "";
				script.src = `${host}${manifest.files["main.js"]}`;
				//script.integrity = integrity;
				script.onload = () => {
					renderMicroFrontend();
				};
				document.head.appendChild(script);
			});

		return () => {
			window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`);
		};
	});

	return <main id={`${name}-container`} />;
}

MicroFrontend.defaultProps = {
	document,
	window,
};

export default MicroFrontend;
