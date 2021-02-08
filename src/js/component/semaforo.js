import React from "react";

const semaforo = () => {
	return (
		<div className="jumbotron jum">
			<div>
				<button
					type="button"
					className="btn btn-danger circuloRojo"></button>

				<div>
					<div>
						<button
							type="button"
							className="btn btn-warning circuloAmarillo"></button>
					</div>
					<button
						type="button"
						className="btn btn-success circuloVerde"></button>
				</div>
			</div>
		</div>
	);
};

export default semaforo;
