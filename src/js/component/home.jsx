import React, { useState } from "react";

export default function App() {
	const [tarea, setTarea] = useState("");
	const [lista, setLista] = useState([]);
	function borrar(i) {
		let resultado = lista.filter((valor, index) => {
			return index != i;
		});
		setLista(resultado);
	}
	return (
		<div className="App">
			<h1>To do list de Joana</h1>
			<input
				placeholder="escribe tu tarea"
				onChange={(e) => {
					setTarea(e.target.value);
				}}
			/>

			<button
				type="button"
				class="btn btn-primary"
				onClick={() => {
					setLista([...lista, tarea]);
				}}>
				Añadir tarea
			</button>
			<br></br>
			<br></br>
			<ul>
				{lista.map(function (valor, i) {
					return (
						<li key={i}>
							{valor}
							<button
								type="button"
								class="btn btn-danger"
								onClick={() => {
									borrar(i);
								}}>
								X
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
