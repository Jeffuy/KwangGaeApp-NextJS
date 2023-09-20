import React, { createContext, useState } from 'react';

import { formasGupPrimero, formasPriSegundo, formasPriSegTercero, formasPriSegTerCuarto, formasPrimero, formasSegundo, formasTercero, formasCuarto } from '@scripts/data/patternsList';

const PatternSelectorContext = createContext();

function PatternSelectorProvider(props) {
	const [formas, setFormas] = useState('');

	// DEFINO LA LISTA A UTILIZAR
	function grado() {
		const grado = document.querySelector('input[name="grado"]:checked').value;
		let listaDeFormas;
		if (grado == '1') {
			listaDeFormas = formasGupPrimero;
		} else if (grado == '2') {
			listaDeFormas = formasPriSegundo;
		} else if (grado == '3') {
			listaDeFormas = formasPriSegTercero;
		} else if (grado == '4') {
			listaDeFormas = formasPriSegTerCuarto;
		}
		return listaDeFormas;
	}

	// DEFINO LA LISTA DE FORMAS POR SEPARADO EN CASO DE SER NECESARIO
	function soloGrado() {
		let grado = document.querySelector('input[name="grado"]:checked').value;

		let listaSoloGrado;

		if (grado == '1') {
			listaSoloGrado = formasPrimero;
		} else if (grado == '2') {
			listaSoloGrado = formasSegundo;
		} else if (grado == '3') {
			listaSoloGrado = formasTercero;
		} else if (grado == '4') {
			listaSoloGrado = formasCuarto;
		}
		return listaSoloGrado;
	}

	// ELIJO LA FORMA EN BASE A LA DECISION DEL USUARIO
	function elegirFormas() {
		const lista = grado();
		const listaSoloGrado = soloGrado();
		const cantidad = document.querySelector('input[name="cantidad"]:checked').value;
		let mensajeFinal = '';

		//let eleccion;
		let random = 0;
		let random2 = 0;
		let random3 = 0;

		while (random == random2 || random == random3 || random2 == random3) {
			random = Math.floor(Math.random() * lista.length);
			random2 = Math.floor(Math.random() * lista.length);
			random3 = Math.floor(Math.random() * lista.length);
		}

		if (cantidad == 2) {
			mensajeFinal = `Las formas elegidas son ${lista[random]}`;
		} else if (cantidad == 3) {
			mensajeFinal = `Las formas elegidas son ${lista[random]} y ${lista[random2]}`;
		} else if (cantidad == 0) {
			random = Math.floor(Math.random() * listaSoloGrado.length);
			mensajeFinal = `Las formas elegidas son ${listaSoloGrado[random]}`;
		} else if (cantidad == 1) {
			random = Math.floor(Math.random() * listaSoloGrado.length);
			while (listaSoloGrado[random] == lista[random2]) {
				random = Math.floor(Math.random() * listaSoloGrado.length);
				random2 = Math.floor(Math.random() * lista.length);
			}
			mensajeFinal = `Las formas elegidas son ${listaSoloGrado[random]} y ${lista[random2]}`;
		}

		setFormas(mensajeFinal);
		return mensajeFinal;
	}

	return (
		<PatternSelectorContext.Provider
			value={{
				elegirFormas,
				formas,
			}}
		>
			{props.children}
		</PatternSelectorContext.Provider>
	);
}

export { PatternSelectorContext, PatternSelectorProvider };
