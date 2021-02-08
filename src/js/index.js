//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import Navbar from "./component/Nabvar.js";
import Jumbotron from "./component/Jumbotron.js";
import Contenido from "./component/Contenido.js";
import Footer from "./component/footer.js";
import Semaforo from "./component/semaforo.js";

//render your react application
ReactDOM.render(
	<div>
		<Navbar />
		<div className="container">
			<Jumbotron />
		</div>
		<Contenido />
		<Semaforo />
		<Footer />
	</div>,
	document.querySelector("#app")
);
