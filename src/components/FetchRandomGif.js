import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FetchRandomGif() {
	const [gif, setGif] = useState("Loading...");

	const apiKey = process.env.REACT_APP_API_KEY;
	const url = process.env.REACT_APP_URL;

	const fetchData = async () => {
		const response = await axios.get(`${url}${apiKey}`);
		setGif(response.data.data.image_original_url);
	};

	console.log(gif);

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<img src={gif} alt="gif" height="400px" width="400px" />
			<br />
			<button onClick={fetchData}>Get Random Gif</button>
		</div>
	);
}
