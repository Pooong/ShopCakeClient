import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import router from "./router";

import HomePage from "./pages/HomePage/homepage";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<HomePage></HomePage>
		</>
	);
}

export default App;
