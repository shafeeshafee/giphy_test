import "./App.css";
import FetchRandomGif from "./components/FetchRandomGif";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1 className="App-title">Welcome to React Giphy</h1>
			</header>
			<main>I'm going to show a random of gifs!</main>
			<FetchRandomGif />
		</div>
	);
}

export default App;
