const questionsWhite = [
	{
		questionText: '¿En qué país se creó el Taekwon-Do?',
		answerOptions: [
			{ answerText: 'Japon', isCorrect: false },
			{ answerText: 'China', isCorrect: false },
			{ answerText: 'Corea', isCorrect: true },
			{ answerText: 'Uruguay', isCorrect: false },
		],
	},
	{
		questionText: '¿En que año se creó el Taekwon-Do?',
		answerOptions: [
			{ answerText: '1325', isCorrect: false },
			{ answerText: '1955', isCorrect: true },
			{ answerText: '1980', isCorrect: false },
			{ answerText: '1936', isCorrect: false },
		],
	},
	{
		questionText: '¿Cuántos movimientos tiene Saju Jirugi?',
		answerOptions: [
			{ answerText: '7', isCorrect: true },
			{ answerText: '8', isCorrect: false },
			{ answerText: '12', isCorrect: false },
			{ answerText: '6', isCorrect: false },
		],
	},
	{
		questionText: '¿Cuántos vueltas lleva el cinto del dobok?',
		answerOptions: [
			{ answerText: '1', isCorrect: true },
			{ answerText: '2', isCorrect: false },
			{ answerText: '3', isCorrect: false },
			{ answerText: 'Todos los que pueda', isCorrect: false },
		],
	},
	{
		questionText: '¿Cómo se llama la posición en que se realizan los movimientos de Saju Makgi?',
		answerOptions: [
			{ answerText: 'Jumbi', isCorrect: false },
			{ answerText: 'Posición de forma', isCorrect: false },
			{ answerText: 'Posición de ataque', isCorrect: false },
			{ answerText: 'Gunnun sogi', isCorrect: true },
		],
	},
	{
		questionText: '¿Cúal de estos no es un principio del Taekwon-Do?',
		answerOptions: [
			{ answerText: 'Cortesía', isCorrect: false },
			{ answerText: 'Perseverancia', isCorrect: false },
			{ answerText: 'Paciencia', isCorrect: true },
			{ answerText: 'Espíritu indomable', isCorrect: false },
		],
	},
	{
		questionText: 'Una persona tiene integridad cuando...',
		answerOptions: [
			{ answerText: '...sabe integrarse a un grupo', isCorrect: false },
			{
				answerText: '...sabe diferenciar lo correcto de lo incorrecto',
				isCorrect: true,
			},
			{ answerText: '...miente muy seguido', isCorrect: false },
			{ answerText: '...nunca se rinde', isCorrect: false },
		],
	},
	{
		questionText: '¿A qué altura va la mano que defiende al realizar una defensa media?',
		answerOptions: [
			{ answerText: 'A la boca del estómago ', isCorrect: false },
			{ answerText: 'A la del hombro', isCorrect: true },
			{ answerText: 'A la de la nariz', isCorrect: false },
			{ answerText: 'A la del cinturón', isCorrect: false },
		],
	},
	{
		questionText: '¿Quién es el creador del Taekwon-Do?',
		answerOptions: [
			{ answerText: 'Chang Yong Sae ', isCorrect: false },
			{ answerText: 'Dong Qui Kong', isCorrect: false },
			{ answerText: 'Choi Hong Hi', isCorrect: true },
			{ answerText: 'Juan Pedro Veiga', isCorrect: false },
		],
	},
	{
		questionText: 'Si el profesor me dice "Charyot"; ¿qué estoy por hacer?',
		answerOptions: [
			{ answerText: 'Saludar', isCorrect: true },
			{ answerText: 'Golpear', isCorrect: false },
			{ answerText: 'Practicar la forma', isCorrect: false },
			{ answerText: 'Comenzar un trabajo', isCorrect: false },
		],
	},
	{
		questionText: '¿Qué debo hacer si una técnica no me sale?',
		answerOptions: [
			{
				answerText: 'Buscar excusas para no tener que hacerla',
				isCorrect: false,
			},
			{
				answerText: 'Seguir practicándola exactamente igual',
				isCorrect: false,
			},
			{
				answerText: 'Pensar la razón por la que no me sale y corregir ese detalle',
				isCorrect: true,
			},
			{ answerText: 'Intentar no tener que hacerla', isCorrect: false },
		],
	},
	{
		questionText: '¿Cuál de estás opciones es falsa?',
		answerOptions: [
			{
				answerText: 'Saju Makgi tiene 8 movimientos',
				isCorrect: false,
			},
			{
				answerText: 'La yop chagi no debe usarse en lucha',
				isCorrect: true,
			},
			{
				answerText: 'Todas las formas empiezan y terminan en el mismo lugar',
				isCorrect: false,
			},
			{
				answerText: 'La insignia del dobok se usa del lado izquierdo',
				isCorrect: false,
			},
		],
	},
];

const questionsYellowStripe = [
	{
		questionText: '¿Cuántos movimientos tiene Chon-Ji?',
		answerOptions: [
			{ answerText: '7', isCorrect: false },
			{ answerText: '19', isCorrect: true },
			{ answerText: '18', isCorrect: false },
			{ answerText: '21', isCorrect: false },
		],
	},
	{
		questionText: 'Elige el ejemplo correcto de perseverancia',
		answerOptions: [
			{
				answerText: 'Ayudar a un compañero a levantarse luego de caerse',
				isCorrect: false,
			},
			{
				answerText: 'A pesar de que algo es difícil, continuar intentando',
				isCorrect: true,
			},
			{
				answerText: 'Agradecer cuando me dan un regalo',
				isCorrect: false,
			},
			{ answerText: 'Hacer todos mis deberes', isCorrect: false },
		],
	},
	{
		questionText: '¿Que pierna movemos al iniciar Chon-Ji?',
		answerOptions: [
			{ answerText: 'Ambas', isCorrect: false },
			{ answerText: 'Ninguna', isCorrect: false },
			{ answerText: 'Derecha', isCorrect: false },
			{ answerText: 'Izquierda', isCorrect: true },
		],
	},
	{
		questionText: '¿Cuántas defensas bajas hay en Chon-Ji?',
		answerOptions: [
			{ answerText: '4', isCorrect: true },
			{ answerText: '5', isCorrect: false },
			{ answerText: '6', isCorrect: false },
			{ answerText: '8', isCorrect: false },
		],
	},
	{
		questionText: '¿En qué posción realizamos las defensas medias en Chon-Ji?',
		answerOptions: [
			{ answerText: 'Gunnun Sogi', isCorrect: false },
			{ answerText: 'No tiene posiciones', isCorrect: false },
			{ answerText: 'Niunja Sogi', isCorrect: true },
			{
				answerText: 'Se puede elegir entre gunnun sogi y niunja sogi',
				isCorrect: false,
			},
		],
	},
	{
		questionText: '¿Con qué parte del pie debemos golpear al hacer una Ap Chagi?',
		answerOptions: [
			{ answerText: 'Planta del pie', isCorrect: false },
			{ answerText: 'Bola del pie o metatarso', isCorrect: true },
			{ answerText: 'Talón', isCorrect: false },
			{ answerText: 'Empeine', isCorrect: false },
		],
	},
	{
		questionText: '¿Cómo consigo un buen equilibrio en la Gunnun Sogi?',
		answerOptions: [
			{
				answerText: 'Poniendo los pies en la misma línea',
				isCorrect: false,
			},
			{
				answerText: 'Haciendo mucha fuerza a la hora de golpear',
				isCorrect: false,
			},
			{
				answerText: 'No poniendo los pies en la misma línea',
				isCorrect: true,
			},
			{
				answerText: 'Haciendo los movimientos bien rápido',
				isCorrect: false,
			},
		],
	},
	{
		questionText: '¿Cuáles son los dos tipos de competencias más comunes en Taekwon-Do?',
		answerOptions: [
			{ answerText: 'Forma y defensa personal', isCorrect: false },
			{ answerText: 'Lucha y sambo matsokgi', isCorrect: true },
			{ answerText: 'Examen y Rotura', isCorrect: false },
			{ answerText: 'Forma y lucha', isCorrect: true },
		],
	},
	{
		questionText: 'Selecciona la opción falsa: ',
		answerOptions: [
			{
				answerText: 'En la posición niunja sogi ambas piernas van flexionadas',
				isCorrect: false,
			},
			{
				answerText: 'En Chon-Ji realizamos 11 puños en total',
				isCorrect: false,
			},
			{
				answerText: 'En Chon-Ji los puños van a la altura de la nariz, para pegar más fuerte',
				isCorrect: true,
			},
			{
				answerText: 'En Chon-Ji usamos las posiciones niunja sogi y gunung sogi',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'Hanna, dul, set, net...',
		answerOptions: [
			{ answerText: 'Iosot', isCorrect: true },
			{ answerText: 'Yulgok', isCorrect: false },
			{ answerText: 'TikTok', isCorrect: false },
			{ answerText: 'Dasot', isCorrect: true },
		],
	},
	{
		questionText: '¿En qué día cumple años el Taekwon-Do?',
		answerOptions: [
			{
				answerText: '11 de abril',
				isCorrect: true,
			},
			{
				answerText: '30 de noviembre',
				isCorrect: false,
			},
			{
				answerText: '30 de febrero',
				isCorrect: false,
			},
			{ answerText: '17 de mayo', isCorrect: false },
		],
	},
	{
		questionText: '¿Cuántos años cumplirá el Taekwon-Do en 2022?',
		answerOptions: [
			{
				answerText: '67',
				isCorrect: true,
			},
			{
				answerText: '156',
				isCorrect: false,
			},
			{
				answerText: '97',
				isCorrect: false,
			},
			{
				answerText: '11',
				isCorrect: false,
			},
		],
	},
];

const questionsYellow = [
	{
		questionText: '¿A qué altura se realizan los puños en Dangun?',
		answerOptions: [
			{ answerText: 'Media', isCorrect: false },
			{ answerText: 'Alta', isCorrect: true },
			{ answerText: 'Baja', isCorrect: false },
			{ answerText: 'Depende cual puño', isCorrect: false },
		],
	},
	{
		questionText: '¿En que moción se realizan los movimientos 13 y 14 de Dangun?',
		answerOptions: [
			{ answerText: 'Rápida', isCorrect: false },
			{ answerText: 'Normal', isCorrect: false },
			{ answerText: 'Natural', isCorrect: false },
			{ answerText: 'Continua', isCorrect: true },
		],
	},
	{
		questionText: '¿Cuántos movimientos tiene Dangun?',
		answerOptions: [
			{ answerText: '21', isCorrect: true },
			{ answerText: '19', isCorrect: false },
			{ answerText: '20', isCorrect: false },
			{ answerText: '24', isCorrect: false },
		],
	},
	{
		questionText: '¿Cuántos puntos vale una patada en la cabeza en un torneo?',
		answerOptions: [
			{ answerText: '1', isCorrect: false },
			{ answerText: '2', isCorrect: false },
			{ answerText: '3', isCorrect: true },
			{ answerText: 'Advertencia', isCorrect: false },
		],
	},
	{
		questionText: '¿Cuántos oponentes me atacan en el movimiento 9 de Dangun?',
		answerOptions: [
			{ answerText: '2', isCorrect: true },
			{ answerText: 'Ninguno, yo soy el que ataca', isCorrect: false },
			{ answerText: '1', isCorrect: false },
			{ answerText: '3', isCorrect: false },
		],
	},
	{
		questionText: '¿Qué representa el color amarillo en el cinturón?',
		answerOptions: [
			{ answerText: 'El sol, que nos da energía', isCorrect: false },
			{
				answerText: 'La semilla, que se planta en la tierra',
				isCorrect: true,
			},
			{
				answerText: 'Nada. Simplemente es un color más',
				isCorrect: false,
			},
			{
				answerText: 'El brillo de uno mismo en el Taekwon-Do',
				isCorrect: false,
			},
		],
	},
	{
		questionText: '¿Cuál de estas posiciones no aparece en Dangun',
		answerOptions: [
			{ answerText: 'Gunun sogi', isCorrect: false },
			{
				answerText: 'Narani Sogi',
				isCorrect: false,
			},
			{ answerText: 'Niunja Sogi', isCorrect: false },
			{ answerText: 'Annun Sogi', isCorrect: true },
		],
	},
	{
		questionText: '¿Cuál es la diferencia entre hacer un bloqueo con mano abierta y cerrada?',
		answerOptions: [
			{
				answerText: 'La parte del cuerpo con la que se defiende',
				isCorrect: true,
			},
			{
				answerText: 'La velocidad con la que debe realizarse la técnica',
				isCorrect: false,
			},
			{ answerText: 'La posición que debe usarse', isCorrect: false },
			{ answerText: 'No hay diferencia', isCorrect: false },
		],
	},
	{
		questionText: '¿Quién era Dangun?',
		answerOptions: [
			{
				answerText: 'El legendario guerrero de Corea ',
				isCorrect: false,
			},
			{
				answerText: 'El legendario creador del Taekwon-Do',
				isCorrect: false,
			},
			{ answerText: 'El legendario gladiador de Asia', isCorrect: false },
			{ answerText: 'El legendario fundador de Corea', isCorrect: true },
		],
	},
	{
		questionText: '¿En qué orden se hace fila en la clase?',
		answerOptions: [
			{ answerText: 'Orden de cinturón', isCorrect: true },
			{ answerText: 'Orden de altura', isCorrect: false },
			{ answerText: 'Orden de edad', isCorrect: false },
			{ answerText: 'Orden alfábetico coreano', isCorrect: false },
		],
	},
	{
		questionText: '¿Cuál de estos no es un buen consejo para rotura?',
		answerOptions: [
			{
				answerText: 'Debes golpear en el medio de la madera',
				isCorrect: false,
			},
			{
				answerText: 'Debes asegurarte que la altura de la madera sea correcta antes de golpear',
				isCorrect: false,
			},
			{
				answerText: 'Debes generar velocidad y asegurarte de usar la técnica correcta',
				isCorrect: false,
			},
			{
				answerText: 'Debes hacerlo lo mas rápido posible y solo preocuparte por pegar bien fuerte',
				isCorrect: true,
			},
		],
	},
	{
		questionText: '¿Cuál de estos es un ejemplo de cortesía?',
		answerOptions: [
			{
				answerText: 'Dar el asiento a alguien mayor en el omníbus',
				isCorrect: true,
			},
			{
				answerText: 'No rendirse por más que algo sea díficil',
				isCorrect: false,
			},
			{
				answerText: 'No enojarme, por más que me molesten',
				isCorrect: false,
			},
			{
				answerText: 'Patear todos los días un poco más alto',
				isCorrect: false,
			},
		],
	},
];

const questionsGreenStripe = [
	{
		questionText: '¿Cuántas patadas hay en Dosan?',
		answerOptions: [
			{ answerText: '1', isCorrect: false },
			{ answerText: '2', isCorrect: true },
			{ answerText: '3', isCorrect: false },
			{ answerText: 'Ninguna', isCorrect: false },
		],
	},
	{
		questionText: '¿Cuántos movimientos tiene Dosan?',
		answerOptions: [
			{ answerText: '19', isCorrect: false },
			{ answerText: '21', isCorrect: false },
			{ answerText: '24', isCorrect: true },
			{ answerText: '28', isCorrect: false },
		],
	},
	{
		questionText: 'Entre niunja sogi, gunnun sogi y annun sogi: ¿qué posición es más larga?',
		answerOptions: [
			{ answerText: 'Gunnun sogi', isCorrect: true },
			{ answerText: 'Niunja sogi', isCorrect: false },
			{ answerText: 'Annun sogi', isCorrect: false },
			{ answerText: 'Las tres son iguales', isCorrect: false },
		],
	},
	{
		questionText: 'En lucha de torneo: ¿qué pasa si agarro la pierna del oponente?',
		answerOptions: [
			{ answerText: 'La pelea continúa', isCorrect: false },
			{ answerText: 'Me ponen una advertencia', isCorrect: false },
			{ answerText: 'Me ponen un punto en contra', isCorrect: true },
			{ answerText: 'Soy descalificado', isCorrect: false },
		],
	},
	{
		questionText: '¿Qué mociones encontramos en dosan?',
		answerOptions: [
			{ answerText: 'Solo normal', isCorrect: false },
			{ answerText: 'Normal y rápida', isCorrect: true },
			{ answerText: 'Natural y normal', isCorrect: false },
			{ answerText: 'Normal, rápida y continua', isCorrect: false },
		],
	},
	{
		questionText: '¿Cómo puedo llegar a cinturón negro?',
		answerOptions: [
			{
				answerText: 'Esperando hasta que sepa cuando hay exámen y en ese momento comenzar a entrenar',
				isCorrect: false,
			},
			{
				answerText: 'Esforzándome en los ejercicios más fáciles para no tener que hacer los otros',
				isCorrect: false,
			},
			{
				answerText: 'Esforzándome cuando no estoy cansado',
				isCorrect: false,
			},
			{
				answerText: 'Dando lo mejor para intentar cada día superarme un poco más',
				isCorrect: true,
			},
		],
	},
	{
		questionText: 'Quieres mejorar la POTENCIA de tu patada, ¿sobre qué elemento practicarías?',
		answerOptions: [
			{ answerText: 'Palmeta', isCorrect: false },
			{
				answerText: 'Bolsa',
				isCorrect: true,
			},
			{ answerText: 'Un compañero', isCorrect: false },
			{ answerText: 'Pateando al aire', isCorrect: false },
		],
	},
	{
		questionText: '¿A qué altura se realizan las patadas en Dosan?',
		answerOptions: [
			{ answerText: 'Zona media', isCorrect: true },
			{ answerText: 'A la del hombro', isCorrect: false },
			{ answerText: 'Lo más alto que pueda', isCorrect: false },
			{ answerText: 'Una al medio y otra alta', isCorrect: false },
		],
	},
	{
		questionText: '¿A qué altura se realiza la primer defensa de Dosan?',
		answerOptions: [
			{ answerText: 'Baja', isCorrect: false },
			{ answerText: 'Media', isCorrect: false },
			{ answerText: 'Alta', isCorrect: true },
			{ answerText: 'Por encima de la cabeza', isCorrect: false },
		],
	},
	{
		questionText: '¿Cuál de estas opciones sobre Ibo Matsokgi es falsa?',
		answerOptions: [
			{
				answerText: 'Se pueden realizar patadas y puños',
				isCorrect: false,
			},
			{
				answerText: 'Luego del último bloqueo debo contragolpear',
				isCorrect: false,
			},
			{
				answerText: 'Antes de comenzar a atacar, hacemos defensa baja',
				isCorrect: true,
			},
			{
				answerText: 'El contragolpe no debe tocar a mi compañero',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'Cuál es la forma correcta de escribir el arte marcial que practicas?',
		answerOptions: [
			{
				answerText: 'Taekwon-Do',
				isCorrect: true,
			},
			{
				answerText: 'Taekwondo',
				isCorrect: false,
			},
			{
				answerText: 'Tae Kwon Do',
				isCorrect: false,
			},
			{ answerText: 'Tae-Kwon-Do', isCorrect: false },
		],
	},
	{
		questionText: '¿Cuál de estas formas es más larga?',
		answerOptions: [
			{
				answerText: 'Chon-ji',
				isCorrect: false,
			},
			{
				answerText: 'Dangun',
				isCorrect: true,
			},
			{
				answerText: 'Saju Jirugi',
				isCorrect: false,
			},
			{
				answerText: 'Saju Makgi',
				isCorrect: false,
			},
		],
	},
];

const questionsGreen = [
	{
		questionText: '¿Cúantos movimientos tiene Wonhyo?',
		answerOptions: [
			{ answerText: '24', isCorrect: false },
			{ answerText: '22', isCorrect: false },
			{ answerText: '21', isCorrect: false },
			{ answerText: '28', isCorrect: true },
		],
	},
	{
		questionText: '¿En qué posición se realiza el movimiento número 3 de Wonhyo?',
		answerOptions: [
			{ answerText: 'Gunnun sogi', isCorrect: false },
			{ answerText: 'Niunja sogi', isCorrect: false },
			{ answerText: 'Goburyo sogi', isCorrect: false },
			{ answerText: 'Gojung sogi', isCorrect: true },
		],
	},
	{
		questionText: '¿Qué significa el color verde del cinto?',
		answerOptions: [
			{ answerText: 'La planta que crece', isCorrect: true },
			{ answerText: 'No tiene significado', isCorrect: false },
			{
				answerText: 'La mezcla del amarillo y el azul',
				isCorrect: false,
			},
			{
				answerText: 'Era el color preferido de Choi Hong Hi',
				isCorrect: false,
			},
		],
	},
	{
		questionText: '¿A qué altura se realizan las patadas de frente en Wonhyo?',
		answerOptions: [
			{ answerText: 'Alta', isCorrect: false },
			{ answerText: 'Media', isCorrect: false },
			{ answerText: 'Baja', isCorrect: true },
			{ answerText: 'Una media y otra baja', isCorrect: false },
		],
	},
	{
		questionText: '¿Cómo se reparte el peso en la posición goburyo sogi?',
		answerOptions: [
			{ answerText: 'Todo en una pierna', isCorrect: true },
			{ answerText: 'La mitad en cada pierna', isCorrect: false },
			{
				answerText: 'La mayoría del peso en la pierna de atrás',
				isCorrect: false,
			},
			{
				answerText: 'La mayoría del peso en la pierna de adelante',
				isCorrect: false,
			},
		],
	},
	{
		questionText: '¿Quién de estas personas es árbitro internacional de Taekwon-Do?',
		answerOptions: [
			{ answerText: 'Germán Cavani', isCorrect: false },
			{ answerText: 'Lucca Simone', isCorrect: false },
			{ answerText: 'Fermín Veiga', isCorrect: true },
			{ answerText: 'Lukas Calero', isCorrect: false },
		],
	},
	{
		questionText: '¿Con cuántas advertencias pierdo un punto en un torneo?',
		answerOptions: [
			{ answerText: '1', isCorrect: false },
			{ answerText: '2', isCorrect: false },
			{ answerText: '3', isCorrect: true },
			{ answerText: '4', isCorrect: false },
		],
	},
	{
		questionText: '¿Cuál de estas opciones describe el movimiento de la ondulación?',
		answerOptions: [
			{ answerText: 'Subo - bajo - subo', isCorrect: false },
			{ answerText: 'Bajo - subo', isCorrect: false },
			{ answerText: 'Subo - bajo - bajo', isCorrect: false },
			{ answerText: 'Bajo - subo - bajo', isCorrect: true },
		],
	},
	{
		questionText: '¿Cuál de estos es un ejemplo de falta de integridad?',
		answerOptions: [
			{ answerText: 'Rendirse fácilmente', isCorrect: false },
			{ answerText: 'No aceptar cuando pierdo en un juego', isCorrect: true },
			{ answerText: 'Tener miedo', isCorrect: false },
			{ answerText: 'Patear muy rápido', isCorrect: false },
		],
	},
	{
		questionText: '¿A qué altura va dirigido el movimiento número 2 de Wonhyo?',
		answerOptions: [
			{ answerText: 'Baja', isCorrect: false },
			{ answerText: 'Media', isCorrect: false },
			{ answerText: 'Alta', isCorrect: true },
			{ answerText: 'Por encima de mi cabeza', isCorrect: false },
		],
	},
	{
		questionText: '¿Cuál de estos es un mal consejo para mejorar mis técnicas?',
		answerOptions: [
			{
				answerText: 'Concentrarse en la clase y en las indicaciones de los profesores',
				isCorrect: false,
			},
			{
				answerText: 'Practicar la forma muchas veces sin corregirse',
				isCorrect: true,
			},
			{
				answerText: 'Ver videos de Taekwon-Do en Youtube para ver como lo hacen en otros lugares',
				isCorrect: false,
			},
			{ answerText: 'Preguntar a mis compañeros o profesores cómo les parece que podría mejorar', isCorrect: false },
		],
	},
	{
		questionText: '¿Cuántas defensas con canto de mano hay en Wonhyo?',
		answerOptions: [
			{
				answerText: '3',
				isCorrect: true,
			},
			{
				answerText: '7',
				isCorrect: false,
			},
			{
				answerText: '8',
				isCorrect: false,
			},
			{
				answerText: '4',
				isCorrect: false,
			},
		],
	},
];

const questionsBlueStripe = [
	{
		questionText: '¿Cuántos movimientos tiene Yulgok?',
		answerOptions: [
			{ answerText: '32', isCorrect: false },
			{ answerText: '28', isCorrect: false },
			{ answerText: '38', isCorrect: true },
			{ answerText: '21', isCorrect: false },
		],
	},
	{
		questionText: '¿Qué mociones aparecen en Yulgok?',
		answerOptions: [
			{ answerText: 'Normal y natural', isCorrect: false },
			{ answerText: 'Natural, conectada y rápida', isCorrect: false },
			{ answerText: 'Natural, rápida, conectada, normal y continuada', isCorrect: false },
			{ answerText: 'Natural, rápida, conectada y normal', isCorrect: true },
		],
	},
	{
		questionText: '¿A qué altura van las patadas de frente en Yulgok?',
		answerOptions: [
			{ answerText: 'Baja', isCorrect: true },
			{ answerText: 'Media', isCorrect: false },
			{ answerText: 'Alta', isCorrect: false },
			{ answerText: 'Una baja y una alta', isCorrect: false },
		],
	},
	{
		questionText: '¿Cuántos golpes de puño hay en Yulgok?',
		answerOptions: [
			{ answerText: '8', isCorrect: false },
			{ answerText: '15', isCorrect: false },
			{ answerText: '13', isCorrect: true },
			{ answerText: '12', isCorrect: false },
		],
	},
	{
		questionText: '¿Para que sirve la mano apoyada en el codo en los últimos dos movimientos de Yulgok?',
		answerOptions: [
			{ answerText: 'Se prepara para otro bloqueo en caso de que se precise', isCorrect: true },
			{ answerText: 'Le da más fuerza a la técnica', isCorrect: false },
			{ answerText: 'Queda bonito', isCorrect: false },
			{ answerText: 'Bloquea al mismo tiempo que la otra mano', isCorrect: false },
		],
	},
	{
		questionText: '¿En qué momento de la ondulación se debe acelerar el movimiento?',
		answerOptions: [
			{ answerText: 'Al principio, cuando estoy bajando', isCorrect: false },
			{ answerText: 'Mientras estoy subiendo', isCorrect: false },
			{ answerText: 'Todo el tiempo', isCorrect: false },
			{ answerText: 'En la parte final, luego de tomar impulso', isCorrect: true },
		],
	},
	{
		questionText: '¿Qué posición aparece en Wonhyo pero no en Yulgok?',
		answerOptions: [
			{ answerText: 'Niunja sogi', isCorrect: false },
			{
				answerText: 'Kyopcha sogi',
				isCorrect: false,
			},
			{ answerText: 'Gojung sogi', isCorrect: true },
			{ answerText: 'Goburyo sogi', isCorrect: false },
		],
	},
	{
		questionText: 'Si en un torneo el rival me agarra la pierna y yo me caigo, ¿qué se cobrará?',
		answerOptions: [
			{ answerText: 'Advertencia para mi y para mi rival', isCorrect: false },
			{ answerText: 'Punto en contra para mi rival', isCorrect: true },
			{ answerText: 'Advertencia para mi', isCorrect: false },
			{ answerText: 'Se considera un accidente y la pelea sigue sin advertencias', isCorrect: false },
		],
	},
	{
		questionText: '¿Cuál frase demuestra falta de perseverancia?',
		answerOptions: [
			{ answerText: '"No puedo"', isCorrect: true },
			{ answerText: '"Es fácil"', isCorrect: false },
			{ answerText: '"Seguiré intentando"', isCorrect: false },
			{ answerText: '"Todavía no me sale"', isCorrect: false },
		],
	},
	{
		questionText: 'Yulgok era un...',
		answerOptions: [
			{ answerText: '...guerrero', isCorrect: false },
			{ answerText: '...monje', isCorrect: false },
			{ answerText: '...santo', isCorrect: false },
			{ answerText: '...filósofo', isCorrect: true },
		],
	},
	{
		questionText: '¿Cuál es una desventaja de las patadas con giro?',
		answerOptions: [
			{
				answerText: 'Si no caigo en una buena posición puede resultar fácil contragolpearme',
				isCorrect: true,
			},
			{
				answerText: 'No tienen fuerza',
				isCorrect: false,
			},
			{
				answerText: 'Son solo para exhibiciones, no para ejecutar en la lucha',
				isCorrect: false,
			},
			{ answerText: 'Me pueden descalificar de un torneo si los utilizo', isCorrect: false },
		],
	},
	{
		questionText: 'De las siguientes formas: ¿cuál es la única que no representa a una persona?',
		answerOptions: [
			{
				answerText: 'Chon-ji',
				isCorrect: true,
			},
			{
				answerText: 'Dosan',
				isCorrect: false,
			},
			{
				answerText: 'Wonhyo',
				isCorrect: false,
			},
			{
				answerText: 'Yulgok',
				isCorrect: false,
			},
		],
	},
];

const questionsBlue = [
	{
		questionText: '¿En qué país se creó el Taekwon-Do?',
		answerOptions: [
			{ answerText: 'Japon', isCorrect: false },
			{ answerText: 'China', isCorrect: false },
			{ answerText: 'Corea', isCorrect: true },
			{ answerText: 'Uruguay', isCorrect: false },
		],
	},
	{
		questionText: '¿En que año se creó el Taekwon-Do?',
		answerOptions: [
			{ answerText: '1325', isCorrect: false },
			{ answerText: '1955', isCorrect: true },
			{ answerText: '1980', isCorrect: false },
			{ answerText: '1936', isCorrect: false },
		],
	},
	{
		questionText: '¿Cuántos movimientos tiene Saju Jirugi?',
		answerOptions: [
			{ answerText: '7', isCorrect: true },
			{ answerText: '8', isCorrect: false },
			{ answerText: '12', isCorrect: false },
			{ answerText: '6', isCorrect: false },
		],
	},
	{
		questionText: '¿Cuántos nudos lleva el cinto del dobok?',
		answerOptions: [
			{ answerText: '1', isCorrect: false },
			{ answerText: '2', isCorrect: true },
			{ answerText: '3', isCorrect: false },
			{ answerText: 'Todos los que pueda', isCorrect: false },
		],
	},
	{
		questionText: '¿Cómo se llama la posición en que se realizan los movimientos de Saju Makgi?',
		answerOptions: [
			{ answerText: 'Jumbi', isCorrect: false },
			{ answerText: 'Posición de forma', isCorrect: false },
			{ answerText: 'Posición de ataque', isCorrect: false },
			{ answerText: 'Gunnun sogi', isCorrect: true },
		],
	},
	{
		questionText: '¿Cúal de estos no es un principio del Taekwon-Do?',
		answerOptions: [
			{ answerText: 'Cortesía', isCorrect: false },
			{ answerText: 'Perseverancia', isCorrect: false },
			{ answerText: 'Paciencia', isCorrect: true },
			{ answerText: 'Espíritu indomable', isCorrect: false },
		],
	},
	{
		questionText: 'Una persona tiene integridad cuando...',
		answerOptions: [
			{ answerText: '...sabe integrarse a un grupo', isCorrect: false },
			{
				answerText: '...sabe diferenciar lo correcto de lo incorrecto',
				isCorrect: true,
			},
			{ answerText: '...miente muy seguido', isCorrect: false },
			{ answerText: '...nunca se rinde', isCorrect: false },
		],
	},
	{
		questionText: '¿A qué altura va la mano que defiende al realizar una defensa media?',
		answerOptions: [
			{ answerText: 'A la boca del estómago ', isCorrect: false },
			{ answerText: 'A la del hombro', isCorrect: true },
			{ answerText: 'A la de la nariz', isCorrect: false },
			{ answerText: 'A la del cinturón', isCorrect: false },
		],
	},
	{
		questionText: '¿Quién es el creador del Taekwon-Do?',
		answerOptions: [
			{ answerText: 'Chang Yong Sae ', isCorrect: false },
			{ answerText: 'Dong Qui Kong', isCorrect: false },
			{ answerText: 'Choi Hong Hi', isCorrect: true },
			{ answerText: 'Juan Pedro Veiga', isCorrect: false },
		],
	},
	{
		questionText: 'Si el profesor me dice "Charyot"; ¿qué estoy por hacer?',
		answerOptions: [
			{ answerText: 'Saludar', isCorrect: true },
			{ answerText: 'Golpear', isCorrect: false },
			{ answerText: 'Practicar la forma', isCorrect: false },
			{ answerText: 'Comenzar un trabajo', isCorrect: false },
		],
	},
	{
		questionText: '¿Qué debo hacer si una técnica no me sale?',
		answerOptions: [
			{
				answerText: 'Buscar excusas para no tener que hacerla',
				isCorrect: false,
			},
			{
				answerText: 'Seguir practicándola exactamente igual',
				isCorrect: false,
			},
			{
				answerText: 'Pensar la razón por la que no me sale y corregir ese detalle',
				isCorrect: true,
			},
			{ answerText: 'Intentar no tener que hacerla', isCorrect: false },
		],
	},
	{
		questionText: 'Cuál de estás opciones es falsa?',
		answerOptions: [
			{
				answerText: 'Saju Makgi tiene 8 movimientos',
				isCorrect: false,
			},
			{
				answerText: 'La yop chagi no debe usarse en lucha',
				isCorrect: false,
			},
			{
				answerText: 'Todas las formas empiezan y terminan en el mismo lugar',
				isCorrect: false,
			},
			{
				answerText: 'La insignia del dobok se usa del lado derecho',
				isCorrect: true,
			},
		],
	},
];

const questionsRedStripe = [
	{
		questionText: '¿Cuántos movimientos tiene Toi Gye?',
		answerOptions: [
			{ answerText: '32', isCorrect: false },
			{ answerText: '28', isCorrect: false },
			{ answerText: '38', isCorrect: false },
			{ answerText: '37', isCorrect: true },
		],
	},
	{
		questionText: '¿Qué representa el diagrama de Toi Gye?',
		answerOptions: [
			{ answerText: 'Guerrero', isCorrect: false },
			{ answerText: 'Instructor', isCorrect: false },
			{ answerText: 'Maestro', isCorrect: true },
			{ answerText: 'General', isCorrect: false },
		],
	},
	{
		questionText: '¿Qué mociones aparecen en Toi Gye?',
		answerOptions: [
			{ answerText: 'Normal', isCorrect: false },
			{ answerText: 'Normal, continua y lenta', isCorrect: true },
			{ answerText: 'Normal, continua y conectada', isCorrect: false },
			{ answerText: 'Normal, continua, natural y rápida', isCorrect: false },
		],
	},
	{
		questionText: '¿A qué altura se realiza la primer patada de Toi Gye?',
		answerOptions: [
			{ answerText: 'Baja', isCorrect: false },
			{ answerText: 'Media', isCorrect: true },
			{ answerText: 'Alta', isCorrect: false },
			{ answerText: 'Por encima de la cabeza', isCorrect: false },
		],
	},
	{
		questionText: '¿Cuál de estas opciones es incorrecta?',
		answerOptions: [
			{ answerText: 'Las formas comienzan y terminan en el mismo lugar', isCorrect: false },
			{ answerText: 'La respiración se debe realizar instantes después del golpe', isCorrect: true },
			{ answerText: 'Luego de una patada se debe ondular', isCorrect: false },
			{ answerText: 'Al terminar la forma debo volver a la misma posición en la que inicié', isCorrect: false },
		],
	},
	{
		questionText: '¿Cúal de estas posiciones no aparece en Toi Gye?',
		answerOptions: [
			{ answerText: 'Annun sogi', isCorrect: false },
			{ answerText: 'Gojung sogi', isCorrect: true },
			{ answerText: 'Kyopcha sogi', isCorrect: false },
			{ answerText: 'Moa sogi', isCorrect: false },
		],
	},
	{
		questionText: 'En un torneo, ¿con cuántos puntos en contra me descalifican?',
		answerOptions: [
			{ answerText: '1', isCorrect: false },
			{
				answerText: '2',
				isCorrect: false,
			},
			{ answerText: '3', isCorrect: true },
			{ answerText: '4', isCorrect: false },
		],
	},
	{
		questionText: '¿A dónde golpea el ataque con rodilla en Toi Gye?',
		answerOptions: [
			{ answerText: 'Al estómago', isCorrect: true },
			{ answerText: 'A la cabeza', isCorrect: false },
			{ answerText: 'Al cuello', isCorrect: false },
			{ answerText: 'A la pierna', isCorrect: false },
		],
	},
	{
		questionText: 'Si deseo realizar una rotura con patada descendente: ¿Con qué parte del pie debería golpear?',
		answerOptions: [
			{ answerText: 'Parte de atrás del talón', isCorrect: true },
			{ answerText: 'Filo del pie', isCorrect: false },
			{ answerText: 'Bola del pie', isCorrect: false },
			{ answerText: 'Planta del pie', isCorrect: false },
		],
	},
	{
		questionText: '¿Cómo se denomina la posición de inicio de Toy Gye?',
		answerOptions: [
			{ answerText: 'Moa sogi A', isCorrect: false },
			{ answerText: 'Moa sogi B', isCorrect: true },
			{ answerText: 'Moa sogi C', isCorrect: false },
			{ answerText: 'Posición de Toy Gye', isCorrect: false },
		],
	},
	{
		questionText: 'Si realizo una goburyo sogi preocupándome por mantener una buena postura, pierna de apoyo flexionada y mirada al frente, ¿Qué elemento de la teoría del poder estoy aplicando?',
		answerOptions: [
			{
				answerText: 'Equilibrio',
				isCorrect: true,
			},
			{
				answerText: 'Concentración',
				isCorrect: false,
			},
			{
				answerText: 'Fuerza de reacción',
				isCorrect: false,
			},
			{ answerText: 'Velocidad', isCorrect: false },
		],
	},
	{
		questionText: 'Hay seis movimientos en Toy Gye que tienen una particularidad. ¿Cuál es?',
		answerOptions: [
			{
				answerText: 'No llevan respiración',
				isCorrect: false,
			},
			{
				answerText: 'Pueden ejecutarse a diferentes alturas',
				isCorrect: false,
			},
			{
				answerText: 'La posición no tiene un nombre en particular',
				isCorrect: false,
			},
			{
				answerText: 'Se realizan con stamping o pisotón',
				isCorrect: true,
			},
		],
	},
];

const questionsRed = [
	{
		questionText: '¿Qué significa el color rojo en el cinturón?',
		answerOptions: [
			{ answerText: 'Calor', isCorrect: false },
			{ answerText: 'Peligro', isCorrect: true },
			{ answerText: 'Fuego', isCorrect: false },
			{ answerText: 'Corea', isCorrect: false },
		],
	},
	{
		questionText: '¿Cuál principio me pide que use el color del cinturón?',
		answerOptions: [
			{ answerText: 'Cortesía', isCorrect: false },
			{ answerText: 'Autocontrol', isCorrect: true },
			{ answerText: 'Perseverancia', isCorrect: false },
			{ answerText: 'Espíritu indomable', isCorrect: false },
		],
	},
	{
		questionText: '¿Cuántos movimientos tiene Hwarang?',
		answerOptions: [
			{ answerText: '28', isCorrect: false },
			{ answerText: '31', isCorrect: false },
			{ answerText: '37', isCorrect: false },
			{ answerText: '29', isCorrect: true },
		],
	},
	{
		questionText: '¿El primer movimiento de Hwarang es un ataque o un bloqueo?',
		answerOptions: [
			{ answerText: 'Depende de mi oponente', isCorrect: false },
			{ answerText: 'Un bloqueo', isCorrect: true },
			{ answerText: 'Un ataque', isCorrect: false },
			{ answerText: 'Ambos', isCorrect: false },
		],
	},
	{
		questionText: '¿Cuál de estas posiciones no aparece en Hwarang?',
		answerOptions: [
			{ answerText: 'Niunja Sogi', isCorrect: false },
			{ answerText: 'Kyopcha Sogi', isCorrect: true },
			{ answerText: 'Gojung Sogi', isCorrect: false },
			{ answerText: 'Moa sogi', isCorrect: false },
		],
	},
	{
		questionText: '¿Cómo se llama la posición en la que se realizan los movimientos 27 y 26 de Hwarang?',
		answerOptions: [
			{ answerText: 'Moa sogi', isCorrect: true },
			{ answerText: 'Sojik sogi', isCorrect: false },
			{ answerText: 'Goburyo sogi', isCorrect: false },
			{ answerText: 'Niunja sogi', isCorrect: false },
		],
	},
	{
		questionText: '¿Por qué razón el pie de atrás en la niunja sogi debe ir levemente girado hacia adentro?',
		answerOptions: [
			{ answerText: 'Para poder patear', isCorrect: false },
			{
				answerText: 'Para poder colocar la cadera correctamente sin perjudicar la rodilla',
				isCorrect: true,
			},
			{ answerText: 'Para mejorar la preparacion de las técnicas', isCorrect: false },
			{ answerText: 'Falso. No debe ir girado', isCorrect: false },
		],
	},
	{
		questionText: 'Cuándo hablamos de concentración en la teoría del poder, ¿a qué nos referimos?',
		answerOptions: [
			{ answerText: 'A concentrarnos en los trabajos', isCorrect: false },
			{ answerText: 'A concentrarnos en las indicaciones del profesor', isCorrect: false },
			{ answerText: 'A realizar las técnicas usando una superficie pequeña de nuestras manos o pies al golpear', isCorrect: true },
			{ answerText: 'A concentrarnos en nuestros estudios', isCorrect: false },
		],
	},
	{
		questionText: '¿En dónde aplicarías más el elemento concentración de la teoría del poder?',
		answerOptions: [
			{ answerText: 'En una rotura', isCorrect: true },
			{ answerText: 'En lucha de torneo', isCorrect: false },
			{ answerText: 'Al hacer ejercicios físicos como lagartijas, abdominales, etc.', isCorrect: false },
			{ answerText: 'Al realizar estiramientos', isCorrect: false },
		],
	},
	{
		questionText: 'Si el competidor rojo realiza dos patadas al cabezal, y el competidor azul tres golpes de puño y una patada a zona media, ¿Quién gana?',
		answerOptions: [
			{ answerText: 'El competidor rojo', isCorrect: true },
			{ answerText: 'El competidor azul', isCorrect: false },
			{ answerText: 'Empatan', isCorrect: false },
			{ answerText: 'El competidor rojo es descalificado por golpear el cabezal', isCorrect: false },
		],
	},
	{
		questionText: '¿Cuál de estas opciones sobre patadas saltando es falsa?',
		answerOptions: [
			{
				answerText: 'Las patadas saltando pueden usarse en torneos',
				isCorrect: false,
			},
			{
				answerText: 'En el momento del golpe ambos pies deben estar en el aire',
				isCorrect: false,
			},
			{
				answerText: 'Luego de realizar la patada, la posición en la que caigas no importa',
				isCorrect: true,
			},
			{ answerText: 'Se pueden usar para hacer roturas', isCorrect: false },
		],
	},
	{
		questionText: 'Llega un nuevo cinturón blanco a la clase y te toca entrenar con él. Tú: ',
		answerOptions: [
			{
				answerText: 'Le demuestras que eres más avanzado ganándole siempre',
				isCorrect: false,
			},
			{
				answerText: 'No le hablas mucho ya que eres más avanzado y el todavía no sabe Taekwon-Do',
				isCorrect: false,
			},
			{
				answerText: 'Lo ayudas a que aprenda de a poco. Disminuyes tu nivel si es necesario para que ambos puedan entrenar cómodos',
				isCorrect: true,
			},
			{
				answerText: 'Le avisas al profesor que se equivocó al ponerte con él. ¡Que sabon distraído!',
				isCorrect: false,
			},
		],
	},
];

const questionsBlackStripe = [
	{
		questionText: '¿En qué país se creó el Taekwon-Do?',
		answerOptions: [
			{ answerText: 'Japon', isCorrect: false },
			{ answerText: 'China', isCorrect: false },
			{ answerText: 'Corea', isCorrect: true },
			{ answerText: 'Uruguay', isCorrect: false },
		],
	},
	{
		questionText: '¿En que año se creó el Taekwon-Do?',
		answerOptions: [
			{ answerText: '1325', isCorrect: false },
			{ answerText: '1955', isCorrect: true },
			{ answerText: '1980', isCorrect: false },
			{ answerText: '1936', isCorrect: false },
		],
	},
	{
		questionText: '¿Cuántos movimientos tiene Saju Jirugi?',
		answerOptions: [
			{ answerText: '7', isCorrect: true },
			{ answerText: '8', isCorrect: false },
			{ answerText: '12', isCorrect: false },
			{ answerText: '6', isCorrect: false },
		],
	},
	{
		questionText: '¿Cuántos nudos lleva el cinto del dobok?',
		answerOptions: [
			{ answerText: '1', isCorrect: false },
			{ answerText: '2', isCorrect: true },
			{ answerText: '3', isCorrect: false },
			{ answerText: 'Todos los que pueda', isCorrect: false },
		],
	},
	{
		questionText: '¿Cómo se llama la posición en que se realizan los movimientos de Saju Makgi?',
		answerOptions: [
			{ answerText: 'Jumbi', isCorrect: false },
			{ answerText: 'Posición de forma', isCorrect: false },
			{ answerText: 'Posición de ataque', isCorrect: false },
			{ answerText: 'Gunnun sogi', isCorrect: true },
		],
	},
	{
		questionText: '¿Cúal de estos no es un principio del Taekwon-Do?',
		answerOptions: [
			{ answerText: 'Cortesía', isCorrect: false },
			{ answerText: 'Perseverancia', isCorrect: false },
			{ answerText: 'Paciencia', isCorrect: true },
			{ answerText: 'Espíritu indomable', isCorrect: false },
		],
	},
	{
		questionText: 'Una persona tiene integridad cuando...',
		answerOptions: [
			{ answerText: '...sabe integrarse a un grupo', isCorrect: false },
			{
				answerText: '...sabe diferenciar lo correcto de lo incorrecto',
				isCorrect: true,
			},
			{ answerText: '...miente muy seguido', isCorrect: false },
			{ answerText: '...nunca se rinde', isCorrect: false },
		],
	},
	{
		questionText: '¿A qué altura va la mano que defiende al realizar una defensa media?',
		answerOptions: [
			{ answerText: 'A la boca del estómago ', isCorrect: false },
			{ answerText: 'A la del hombro', isCorrect: true },
			{ answerText: 'A la de la nariz', isCorrect: false },
			{ answerText: 'A la del cinturón', isCorrect: false },
		],
	},
	{
		questionText: '¿Quién es el creador del Taekwon-Do?',
		answerOptions: [
			{ answerText: 'Chang Yong Sae ', isCorrect: false },
			{ answerText: 'Dong Qui Kong', isCorrect: false },
			{ answerText: 'Choi Hong Hi', isCorrect: true },
			{ answerText: 'Juan Pedro Veiga', isCorrect: false },
		],
	},
	{
		questionText: 'Si el profesor me dice "Charyot"; ¿qué estoy por hacer?',
		answerOptions: [
			{ answerText: 'Saludar', isCorrect: true },
			{ answerText: 'Golpear', isCorrect: false },
			{ answerText: 'Practicar la forma', isCorrect: false },
			{ answerText: 'Comenzar un trabajo', isCorrect: false },
		],
	},
	{
		questionText: '¿Qué debo hacer si una técnica no me sale?',
		answerOptions: [
			{
				answerText: 'Buscar excusas para no tener que hacerla',
				isCorrect: false,
			},
			{
				answerText: 'Seguir practicándola exactamente igual',
				isCorrect: false,
			},
			{
				answerText: 'Pensar la razón por la que no me sale y corregir ese detalle',
				isCorrect: true,
			},
			{ answerText: 'Intentar no tener que hacerla', isCorrect: false },
		],
	},
	{
		questionText: 'Cuál de estás opciones es falsa?',
		answerOptions: [
			{
				answerText: 'Saju Makgi tiene 8 movimientos',
				isCorrect: false,
			},
			{
				answerText: 'La yop chagi no debe usarse en lucha',
				isCorrect: false,
			},
			{
				answerText: 'Todas las formas empiezan y terminan en el mismo lugar',
				isCorrect: false,
			},
			{
				answerText: 'La insignia del dobok se usa del lado derecho',
				isCorrect: true,
			},
		],
	},
];

const questionsUmpire = [
	{
		questionText: '¿Cuál de las siguientes opciones no es una advertencia?',
		answerOptions: [
			{ answerText: 'Caerse', isCorrect: false },
			{ answerText: 'Saltar', isCorrect: true },
			{ answerText: 'Pegar abajo', isCorrect: false },
			{ answerText: 'Hablar', isCorrect: false },
			{ answerText: 'Salir del perímetro', isCorrect: false },
		],
	},

	{
		questionText: '¿Cuántos puntos vale una patada con giro a la cabeza?',
		answerOptions: [
			{ answerText: '5', isCorrect: false },
			{ answerText: '3', isCorrect: true },
			{ answerText: '1', isCorrect: false },
			{ answerText: '2', isCorrect: false },
			{ answerText: 'Advertencia por dar la espalda', isCorrect: false },
		],
	},

	{
		questionText: '¿Cuál de estas protecciones no es obligatoria?',
		answerOptions: [
			{ answerText: 'Bucal', isCorrect: false },
			{ answerText: 'Protector de pie', isCorrect: false },
			{ answerText: 'Cabezal', isCorrect: false },
			{ answerText: 'Inguinal', isCorrect: false },
			{ answerText: 'Tibial', isCorrect: true },
		],
	},

	{
		questionText: '¿Cuántos jueces de esquina debe haber en un combate?',
		answerOptions: [
			{ answerText: '3', isCorrect: false },
			{ answerText: '4', isCorrect: true },
			{ answerText: 'Depende de la categoría', isCorrect: false },
			{ answerText: '2', isCorrect: false },
			{
				answerText: 'Los necesarios para puntuar varios combates',
				isCorrect: false,
			},
		],
	},

	{
		questionText: '¿Cuántas formas realiza un cinto negro en competencias oficiales?',
		answerOptions: [
			{ answerText: '2', isCorrect: true },
			{ answerText: '1', isCorrect: false },
			{ answerText: 'Todas las de su grado', isCorrect: false },
			{ answerText: 'Las que el decida', isCorrect: false },
			{ answerText: 'Todas las formas que conozca', isCorrect: false },
		],
	},

	{
		questionText: '¿Con cuantas advertencias se descuenta un punto?',
		answerOptions: [
			{ answerText: '1', isCorrect: false },
			{ answerText: '2', isCorrect: false },
			{ answerText: '3', isCorrect: true },
			{ answerText: '4', isCorrect: false },
			{ answerText: '5', isCorrect: false },
		],
	},

	{
		questionText: 'Si un competidor tiene más de 3 puntos en contra directos...',
		answerOptions: [
			{
				answerText: '...sigue peleando, pero seguramente perderá',
				isCorrect: false,
			},
			{
				answerText: '...se le advierte que se controle',
				isCorrect: false,
			},
			{ answerText: '...muere', isCorrect: false },
			{ answerText: '...es descalificado', isCorrect: true },
			{
				answerText: '...se le sanciona y debe pedir permiso para competir nuevamente',
				isCorrect: false,
			},
		],
	},

	{
		questionText: 'En caso de empate: ',
		answerOptions: [
			{
				answerText: 'Se realiza un nuevo round pero se mantienen los puntos y advertencias',
				isCorrect: false,
			},
			{
				answerText: 'Gana el competidor con menos advertencias',
				isCorrect: false,
			},
			{
				answerText: 'Se realiza un nuevo round, reiniciando puntos y advertencias',
				isCorrect: true,
			},
			{
				answerText: 'Los jueces deciden entre todos un ganador',
				isCorrect: false,
			},
			{
				answerText: 'Se realiza un nuevo round, reiniciando los puntos pero manteniendo las advertencias',
				isCorrect: false,
			},
		],
	},
];

export const questionList = [
	questionsWhite,
	questionsYellowStripe,
	questionsYellow,
	questionsGreenStripe,
	questionsGreen,
	questionsBlueStripe,
	questionsBlue,
	questionsRedStripe,
	questionsRed,
	questionsBlackStripe,
	questionsUmpire,
];
