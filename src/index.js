import "./index.css";
import "./assests/styles/site.css";
import "./assests/styles/table.css";
import { render } from "react-dom";
import App from "./App";

// Show it on the screen
// ReactDom.render or just render (import render using destructuring)
render(<App />, document.getElementById("root"));
