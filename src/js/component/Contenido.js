import React from "react";

const Contenido = () => {
	return (
		<div className="jumbotron jum">
			<div className="spinner-grow text-success verde" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>

			<div className="spinner-grow text-danger rojo" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>

			<div className="spinner-grow text-warning amarillo" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	);
};

export default Contenido;
