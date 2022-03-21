//DEFINO LAS LISTAS DE FORMAS
const formas = ['Chon-Ji', 'Dangun', 'Dosan', 'Wonhyo', 'Yulgok', 'Joongun', 'Toi-Gye', 'Hwarang', 'Choong-Moo'];

// Formas por separado
const formasPrimero = ['Kwang-Gae', 'Po-Eun', 'Gae-Baek'];
const formasSegundo = ['Euiam', 'Juche', 'Choong-Jang'];
const formasTercero = ['Yoo-Sin', 'Choi-Jong', 'Samil'];
const formasCuarto = ['Moon-Moo', 'Ul-Ji', 'Yongae'];

// Formas Unidas
const formasGupPrimero = formas.concat(formasPrimero);
const formasPriSegundo = formasGupPrimero.concat(formasSegundo);
const formasPriSegTercero = formasPriSegundo.concat(formasTercero);
const formasPriSegTerCuarto = formasPriSegTercero.concat(formasCuarto);

module.exports = {
	formasGupPrimero,
	formasPriSegundo,
	formasPriSegTercero,
	formasPriSegTerCuarto,
	formasPrimero,
	formasSegundo,
	formasTercero,
	formasCuarto,
};
