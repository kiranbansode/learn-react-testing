import { Skills } from "./components/skills/skills";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Skills skills={["HTML", "CSS"]} />
		</div>
	);
}

export default App;
