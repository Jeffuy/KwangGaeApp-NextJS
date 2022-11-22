const patterns = [
	{
		name: 'Chon-Ji',
		movements: '19',
		diagram: 'https://i.imgur.com/P4FN4dG.png',
		description: `Significa literalmente “El Cielo y la Tierra”. En oriente se interpreta como la creación del mundo o el comienzo de la historia humana. Por
	consiguiente, es la primera forma que ha de aprender un principiante. Esta forma consiste en dos partes similares, una representa el cielo y la otra la tierra`,
		img: '/../../assets/img/white-belt.png',
	},
	{
		name: 'Dangun',
		movements: '21',
		diagram: 'https://i.imgur.com/P4FN4dG.png',
		description: `En honor al santo del mismo nombre. Dan-Gun es el legendario fundador de Corea en el año 2333 a.C.`,
		img: '/../../assets/img/white-belt.png',
	},
	{
		name: 'Do-San',
		movements: '24',
		diagram: 'https://i.imgur.com/P4FN4dG.png',
		description: `Es el seudónimo del patriota Ahn Chang-Ho (1876-1938), los 24 movimientos representan su vida, la cual dedicó a promover la educación de Corea y su independencia.`,
		img: '/../../assets/img/white-belt.png',
	},
	{
		name: 'WonHyo',
		movements: '28',
		diagram: 'https://i.imgur.com/P4FN4dG.png',
		description: `Fue el monje que introdujo el Budismo en la dinastía Silla en el año 686 d.C.`,
		img: '/../../assets/img/white-belt.png',
	},
	{
		name: 'Yulgok',
		movements: '38',
		diagram: 'https://i.imgur.com/P4FN4dG.png',
		description: `Es el seudónimo del gran filósofo y maestro Yil (1536-1584), que fue apodado el Confucio de Corea. Los 38 movimientos de esta forma hacen referencia a su lugar de nacimiento a 38º de latitud. El diagrama representa al “Maestro”.`,
		img: '/white-belt.png',
	},
	{
		name: 'Joongun',
		movements: '32',
		diagram: 'https://i.imgur.com/P4FN4dG.png',
		description: `Recuerda al patriota Ahn Joong-Gun, que mató a Hiro-Bumi Ito, el primer gobernador general Japonés, conocido como el hombre que impulsó a la fusión de Corea y Japón. En esta forma hay 32 movimientos para representar la edad del señor Ahn cuando fue ejecutado en la prisión de Lui-Shung (1910).`,
		img: '/../../assets/img/white-belt.png',
	},
	{
		name: 'Toi Gye',
		movements: '37',
		diagram: 'https://i.imgur.com/P4FN4dG.png',
		description: `Es el seudónimo del notable maestro Yi Hwang (siglo XVI) una autoridad en el Neo Confusionismo. Los 37 movimientos de la forma hacen referencia a los 37º de latitud del lugar de nacimiento, el diagrama representa al “Maestro”.`,
		img: '/../../assets/img/white-belt.png',
	},
	{
		name: 'Hwarang',
		movements: '29',
		diagram: 'https://i.imgur.com/P4FN4dG.png',
		description: `Recuerda a un grupo de jóvenes guerreros denominados Hwa Rang, originarios de la dinastía Silla, al comienzo del siglo VII. Los 29 movimientos hacen referencia a la 29º División de Infantería, donde el Taekwon-Do floreció.`,
		img: '/../../assets/img/white-belt.png',
	},
	{
		name: 'Choong Moo',
		movements: '30',
		diagram: 'https://i.imgur.com/P4FN4dG.png',
		description: `Era el nombre dado al gran almirante Yi Soon-Sin de la dinastía Yi. Se le atribuye haber inventado la primer nave de combate blindada (Kobukson) en 1592, la que sería precursora del actual submarino. La razón por la que esta forma finaliza con un ataque con la mano izquierda es para simbolizar su tremenda muerte, por la cual no tuvo oportunidad de mostrar su gran potencial y su lealtad al Rey.`,
		img: '/../../assets/img/white-belt.png',
	},
	{
		name: 'Kwang-Gae',
		movements: '39',
		diagram: 'https://i.imgur.com/P4FN4dG.png',
		description: `Hace referencia al famoso Kwang-Gae Toh Wang, el decimonoveno rey de la dinastía Koguryo, que recuperó todos los territorios perdidos, incluyendo la mayor parte de Manchuria. El diagrama representa la expansión y recuperación del territorio perdido. Los 39 movimientos se refieren a las primeras dos cifras de 391 d.C., año en el que llegó al trono.`,
		img: '/white-belt.png',
	},
	{
		name: 'Poeun',
		movements: '36',
		diagram: 'https://i.imgur.com/P4FN4dG.png',
		description: `Es el seudónimo del famoso poeta Chong Mong-Chu (1400), quién en uno de sus poemas más famosos dice, “yo no serviré a un segundo maestro aunque fuera crucificado cien veces”. El también fue pionero en el campo de la física. El diagrama representa su inquebrantable lealtad al país y al Rey hacia fines de la dinastía Koryo.`,
		img: '/../../assets/img/white-belt.png',
	},
	{
		name: 'Gaebaek',
		movements: '44',
		diagram: 'https://i.imgur.com/P4FN4dG.png',
		description: `Hace referencia al gran General Ge-Baek, de la dinastía Baek Je (660 d.C.). El diagrama representa su severa y estricta disciplina militar.`,
		img: '/white-belt.png',
	},
	{
		name: 'Eui-Am',
		movements: '45',
		diagram: 'https://i.imgur.com/P4FN4dG.png',
		description: `Seudónimo de Son Byong Hi, líder del movimiento independentista Coreano del 1º de marzo de 1919. Los 45 movimientos se refieren a la edad de cuando cambió el nombre de Dong Hak (cultura oriental), por Chondo Kyo (religión de la vida celeste).`,
		img: '/white-belt.png',
	},
	{
		name: 'Choong-Jang',
		movements: '52',
		diagram: 'https://i.imgur.com/P4FN4dG.png',
		description: `Seudónimo del general Kim Duk Ryang quien vivió durante la dinastía Joseon en el siglo XIV. Finaliza con un ataque de mano izquierda para simbolizar la tragedia de su muerte en prisión a los 27 años, sin poder alcanzar su madurez.`,
		img: '/white-belt.png',
	},
	{
		name: 'Juche',
		movements: '45',
		diagram: 'https://i.imgur.com/P4FN4dG.png',
		description: `Es una idea filosófica según la cual el hombre es el dueño de todo. Avanza la idea de que el hombre es el dueño del mundo y de su propio destino. Se dice que esta idea surgió en el monte Paektu (la montaña más alta de Corea, 2744m), que simboliza el espíritu del pueblo coreano. El diagrama representa el monte Paektu.`,
		img: '/white-belt.png',
	},
	{
		name: 'Sam-Il',
		movements: '33',
		diagram: 'https://i.imgur.com/P4FN4dG.png',
		description: `Evoca la fecha histórica del movimiento independentista de Corea que empezó por todo el país el 1 de marzo de 1919. Los 33 movimientos representan el número de los 33 patriotas que organizaron este movimiento.`,
		img: '/white-belt.png',
	},
	{
		name: 'Yoo-Sin',
		movements: '68',
		diagram: 'https://i.imgur.com/P4FN4dG.png',
		description: `Proviene del general Kim Yoo-Sin, comandante general durante la dinastía silla. Los 68 movimientos evocan las dos últimas cifras del 668 d. C., año de unificación de corea. La preparatoria representa una espada desenvainada por la mano izquierda, simboliza el error de Yoo-Sin al seguir las órdenes del Rey y pelear con fuerzas extranjeras contra su propia nación.`,
		img: '/white-belt.png',
	},
	{
		name: 'Choi-Yong',
		movements: '46',
		diagram: 'https://i.imgur.com/P4FN4dG.png',
		description: `Nombre del general Choi Yong, primer ministro/comandante de las fuerzas armadas de la dinastía Koryo en el siglo XIV. Choi Yong era respetado por su lealtad, patriotismo y su humildad. Fue ejecutado por sus subordinados dirigidos por el general Yi Sung Gae, que llegó a ser el primer Rey de la dinastía Joseon.`,
		img: '/white-belt.png',
	},
	{
		name: 'Yon-Gae',
		movements: '49',
		diagram: 'https://i.imgur.com/P4FN4dG.png',
		description: `Recibe su nombre del general de la dinastía Koguryo, Yon Gae Somoon. Los 49 movimientos simbolizan los últimos dígitos del año 649 a.C., el año en el que expulsó a la dinastía Tang de Corea.`,
		img: '/white-belt.png',
	},
	{
		name: 'Ul-Ji',
		movements: '42',
		diagram: 'https://i.imgur.com/P4FN4dG.png',
		description: `Recibe su nombre del general Ul-Ji Moon Dok, quien defendió Corea de una invasión de ataque Tang, la cual tenía casi un millón de soldados. Los 42 movimientos representan la edad del autor cuando diseñó este tul.`,
		img: '/white-belt.png',
	},
	{
		name: 'Moon-Moo',
		movements: '61',
		diagram: 'https://i.imgur.com/P4FN4dG.png',
		description: `Fue el 30vo rey de la dinastía Silla. Su cuerpo fue enterrado cerca de Dae Wang Am (la roca del gran rey). Según la historia, fue enterrado en el mar "donde mi alma defenderá siempre mi tierra contra los japoneses". Los 61 movimientos representan los últimos dígitos del año 661 a.C, en el cual llegó al trono.`,
		img: '/white-belt.png',
	},
	{
		name: 'So-San',
		movements: '72',
		diagram: 'https://i.imgur.com/P4FN4dG.png',
		description: `Es el seudónimo del monje Choi Hyung Ung (1520-1604) durante la dinastía Lee. Los 72 movimientos se refieren a su edad cuando organizó un batallón de soldados con la ayuda de su pupilo, Sa Myunh Dang. Es la forma más larga del Taekwon-Do, teniendo 72 movimientos.`,
		img: '/white-belt.png',
	},
	{
		name: 'Sejong',
		movements: '24',
		diagram: 'https://i.imgur.com/P4FN4dG.png',
		description: `Proviene del nombre del más grande de los reyes coreanos, Se Jong quien invento el alfabeto coreano en 1443, y quien era, también un meteorólogo famoso. El diagrama significa REY mientras que los 24 movimientos se refieren a las 24 letras del alfabeto Coreano.`,
		img: '/white-belt.png',
	},
	{
		name: 'Tong-Il',
		movements: '56',
		diagram: 'https://i.imgur.com/P4FN4dG.png',
		description: `Denota la resolución de reunificar a Corea, dividida desde 1945. El diagrama simboliza la homogeneidad de la raza.`,
		img: '/white-belt.png',
	},
];

export default patterns;
