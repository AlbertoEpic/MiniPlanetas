const basePlanetData = [
	{
		slug: 'planeta-alquezar',
		name: 'Planeta Alquézar',
		image: '/planets/Planeta_Alquézar.jpg',
		image360: '/pano360/PANO_SanMiguel-Alquézar.jpg',
		description:
			'Fortaleza luminosa en roca caliza, pensada para ideas con pulso histórico.',
		tone: 'Cobalto brillante',
		orbit: 'Órbita 12',
		size: 'Compacto',
	},
	{
		slug: 'planeta-bejenado',
		name: 'Planeta Bejenado',
		image: '/planets/Planeta_Bejenado.jpg',
		image360: '/pano360/PANO_Bejenado.jpg',
		description:
			'Relieve volcánico con energía ascendente, ideal para conceptos que requieren impulso.',
		tone: 'Magenta iónico',
		orbit: 'Órbita 18',
		size: 'Denso',
	},
	{
		slug: 'planeta-castillosaumur',
		name: 'Planeta Castillo Saumur',
		image: '/planets/Planeta_CastilloSaumur.jpg',
		image360: '/pano360/PANO_Castillo-De-Saumur.jpg',
		description:
			'Arquitectura fluvial y elegancia de piedra para narrativas clásicas y claras.',
		tone: 'Arena polar',
		orbit: 'Órbita 06',
		size: 'Ligero',
	},
	{
		slug: 'planeta-castilloloarre',
		name: 'Planeta Castillo Loarre',
		image: '/planets/Planeta_CastilloLoarre.jpg',
		image360: '/pano360/PANO-DRONE_CastilloLoarre.jpg',
		description:
			'Fortificación pétrea sobre relieve alto, ideal para conceptos sólidos y monumentales.',
		tone: 'Registro nuevo',
		orbit: 'Órbita en estudio',
		size: 'Variable',
	},
	{
		slug: 'planeta-comodoto',
		name: 'Planeta Comodoto',
		image: '/planets/Planeta_Comodoto.jpg',
		image360: '/pano360/PANO_Comodoto.jpg',	
		description:
			'Textura tropical y ritmo cálido, pensado para proyectos de alto contraste.',
		tone: 'Verde aurora',
		orbit: 'Órbita 23',
		size: 'Dual',
	},
	{
		slug: 'planeta-dunedupilat',
		name: 'Planeta Dune du Pilat',
		image: '/planets/Planeta_DuneDuPilat.jpg',
		image360: '/pano360/PANO_DunaPilat.jpg',
		description:
			'Dunas doradas y horizonte abierto; perfecto para propuestas expansivas.',
		tone: 'Oro sedimentado',
		orbit: 'Órbita 29',
		size: 'Extenso',
	},
	{
		slug: 'planeta-eriste',
		name: 'Planeta Eriste',
		image: '/planets/Planeta_Eriste.jpg',
		image360: '/pano360/PANO-DRONE_Eriste.jpg',
		description:
			'Aire frío y claridad alpina para sistemas precisos y calmados.',
		tone: 'Azul glaciar',
		orbit: 'Órbita 31',
		size: 'Sereno',
	},
	{
		slug: 'planeta-porron-1',
		name: 'Planeta Porrón I',
		image: '/planets/Planeta-Porrón.jpg',
		image360: '/pano360/PANO_Porrón.jpg',
		description:
			'Crestas secas y luz oblicua, ideal para visuales austeros y directos.',
		tone: 'Registro nuevo',
		orbit: 'Órbita en estudio',
		size: 'Variable',
	},
	{
		slug: 'planeta-espelunciecha',
		name: 'Planeta Espelunciecha',
		image: '/planets/Planeta_Espelunciecha.jpg',
		image360: '/pano360/PANO-DRONE_Espelunciecha.jpg',
		description:
			'Profundidades calcáreas y ecos suaves; un planeta para ideas introspectivas.',
		tone: 'Registro nuevo',
		orbit: 'Órbita en estudio',
		size: 'Variable',
	},
	{
		slug: 'planeta-fiordo-de-montearagon',
		name: 'Planeta Fiordo de Montearagón',
		image: '/planets/Planeta_Fiordo-de-Montearagón.jpg',
		description:
			'Cauce profundo y reflejos oscuros, perfecto para proyectos con misterio.',
		tone: 'Registro nuevo',
		orbit: 'Órbita en estudio',
		size: 'Variable',
	},
	{
		slug: 'planeta-gracionepel',
		name: 'Planeta Gracionepel',
		image: '/planets/Planeta_Gracionepel.jpg',
		description:
			'Relieve sereno y vegetación tenue, equilibrado para identidades suaves.',
		tone: 'Registro nuevo',
		orbit: 'Órbita en estudio',
		size: 'Variable',
	},
	{
		slug: 'planeta-houratatere',
		name: 'Planeta Houratatere',
		image: '/planets/Planeta_Houratatere.jpg',
		Image360: '/pano360/PANO_Houratatere.jpg',
		description:
			'Tonos cálidos y respiración lenta, pensado para experiencias contemplativas.',
		tone: 'Registro nuevo',
		orbit: 'Órbita en estudio',
		size: 'Variable',
	},
	{
		slug: 'planeta-la-concha-san-sebastian',
		name: 'Planeta La Concha, San Sebastián',
		image: '/planets/Planeta_La-Concha---San-Sebastián.jpg',
		description:
			'Bahía curva y brisa salina, pensado para propuestas fluidas.',
		tone: 'Registro nuevo',
		orbit: 'Órbita en estudio',
		size: 'Variable',
	},
	{
		slug: 'planeta-lacristalliere',
		name: 'Planeta La Cristallière',
		image: '/planets/Planeta_LaCristallière.jpg',
		image360: '/pano360/PANO_LaCristallière.jpg',
		description:
			'Superficie cristalina y destellos fríos, ideal para tecnología limpia.',
		tone: 'Registro nuevo',
		orbit: 'Órbita en estudio',
		size: 'Variable',
	},
	{
		slug: 'planeta-maladeta-oriental',
		name: 'Planeta Maladeta Oriental',
		image: '/planets/Planeta_Maladeta-Oriental.jpg',
		image360: '/pano360/PANO_Maladeta-Oriental.jpg',
		description:
			'Cumbres firmes y nieve alta, pensado para conceptos robustos.',
		tone: 'Registro nuevo',
		orbit: 'Órbita en estudio',
		size: 'Variable',
	},
	{
		slug: 'planeta-peine-del-viento-san-sebastian',
		name: 'Planeta Peine del Viento, San Sebastián',
		image: '/planets/Planeta_Peine-del-Viento---San-Sebastián.jpg',
		description:
			'Oleaje y hierro, un planeta de energía mecánica y viento.',
		tone: 'Registro nuevo',
		orbit: 'Órbita en estudio',
		size: 'Variable',
	},
	{
		slug: 'planeta-pena-medio',
		name: 'Planeta Peña Medio',
		image: '/planets/Planeta_Peña-Medio.jpg',
		description:
			'Roca aislada y presencia vertical, ideal para mensajes concisos.',
		tone: 'Registro nuevo',
		orbit: 'Órbita en estudio',
		size: 'Variable',
	},
	{
		slug: 'planeta-penanevera',
		name: 'Planeta Peña Nevera',
		image: '/planets/Planeta_PeñaNevera.jpg',
		image360: '/pano360/PANO-DRONE_PeñaNevera.jpg',
		description:
			'Frío persistente y textura dura, para sistemas austeros y precisos.',
		tone: 'Registro nuevo',
		orbit: 'Órbita en estudio',
		size: 'Variable',
	},
	{
		slug: 'planeta-piedra-cobertera',
		name: 'Planeta Piedra Cobertera',
		image: '/planets/Planeta_Piedra-Cobertera.jpg',
		image360: '/pano360/PANO_Piedra-Cobertera.jpg',
		description:
			'Plataforma pétrea y sombra ancha, para ideas de refugio.',
		tone: 'Registro nuevo',
		orbit: 'Órbita en estudio',
		size: 'Variable',
	},
	{
		slug: 'planeta-pineta-120m',
		name: 'Planeta Pineta 120 m',
		image: '/planets/Planeta_Pineta120m.jpg',
		image360: '/pano360/PANO-DRONE_Pineta.jpg',
		description:
			'Valle corto y luz abierta, para proyectos ágiles.',
		tone: 'Registro nuevo',
		orbit: 'Órbita en estudio',
		size: 'Variable',
	},
	{
		slug: 'planeta-pineta-500m',
		name: 'Planeta Pineta 500 m',
		image: '/planets/Planeta_Pineta500m.jpg',
		description:
			'Profundidad y escala larga, para relatos extensos.',
		tone: 'Registro nuevo',
		orbit: 'Órbita en estudio',
		size: 'Variable',
	},
	{
		slug: 'planeta-porron-2',
		name: 'Planeta Porrón II',
		image: '/planets/Planeta_Porrón.jpg',
		image360: '/pano360/PANO_Porrón.jpg',
		description:
			'Plano mineral con sombras cortas, diseñado para composiciones densas y sólidas.',
		tone: 'Registro nuevo',
		orbit: 'Órbita en estudio',
		size: 'Variable',
	},
	{
		slug: 'planeta-punta-cochaldo',
		name: 'Planeta Punta Cochaldo',
		image: '/planets/Planeta_Punta-Cochaldo.jpg',
		image360: '/pano360/PANO-DRONE_PuntaCochaldo.jpg',
		description:
			'Arista afilada y horizonte limpio, para propuestas de alta definición.',
		tone: 'Registro nuevo',
		orbit: 'Órbita en estudio',
		size: 'Variable',
	},
	{
		slug: 'planeta-puntadelacuta',
		name: 'Planeta Punta de la Cuta',
		image: '/planets/Planeta_PuntadelaCuta.jpg',
		image360: '/pano360/PANO_PuntadelaCuta.jpg',
		description:
			'Cresta compacta y ritmo constante, pensado para estructuras sólidas.',
		tone: 'Registro nuevo',
		orbit: 'Órbita en estudio',
		size: 'Variable',
	},
	{
		slug: 'planeta-puntarbenuso',
		name: 'Planeta Punt Arbenuso',
		image: '/planets/Planeta_PuntArbenuso.jpg',
		image360: '/pano360/PANO_PuntArbenuso.jpg',
		description:
			'Punta ventosa y textura rugosa, ideal para marcas resistentes.',
		tone: 'Registro nuevo',
		orbit: 'Órbita en estudio',
		size: 'Variable',
	},
	{
		slug: 'planeta-riglos',
		name: 'Planeta Riglos',
		image: '/planets/Planeta_Riglos.jpg',
		image360: '/pano360/PANO-DRONE_Riglos.jpg',
		description:
			'Paredes rojizas y verticalidad, un planeta de carácter.',
		tone: 'Registro nuevo',
		orbit: 'Órbita en estudio',
		size: 'Variable',
	},
	{
		slug: 'planeta-tierz-niebla',
		name: 'Planeta Tierz Niebla',
		image: '/planets/Planeta_Tierz_niebla.jpg',
		description:
			'Niebla baja y luz difusa, perfecto para atmósferas suaves.',
		tone: 'Registro nuevo',
		orbit: 'Órbita en estudio',
		size: 'Variable',
	},
	{
		slug: 'planeta-tierz-nieve',
		name: 'Planeta Tierz Nieve',
		image: '/planets/Planeta_Tierz_nieve.jpg',
		description:
			'Nieve limpia y silencio, pensado para propuestas minimalistas.',
		tone: 'Registro nuevo',
		orbit: 'Órbita en estudio',
		size: 'Variable',
	},
	{
		slug: 'planeta-toronzue',
		name: 'Planeta Toronzue',
		image: '/planets/Planeta_Toronzue.jpg',
		description:
			'Relieve seco y contraste duro, para identidades de impacto.',
		tone: 'Registro nuevo',
		orbit: 'Órbita en estudio',
		size: 'Variable',
	},
	{
		slug: 'planeta-torrazaescuer',
		name: 'Planeta Torraza Escuer',
		image: '/planets/Planeta_TorrazaEscuer.jpg',
		description:
			'Terreno escalonado y profundidad, ideal para proyectos estructurados.',
		tone: 'Registro nuevo',
		orbit: 'Órbita en estudio',
		size: 'Variable',
	},
	{
		slug: 'planeta-tournelon-blanc',
		name: 'Planeta Tournelon Blanc',
		image: '/planets/Planeta_Tournelon-Blanc.jpg',
		description:
			'Cresta clara y volumen limpio, pensado para composiciones luminosas.',
		tone: 'Registro nuevo',
		orbit: 'Órbita en estudio',
		size: 'Variable',
	},
	{
		slug: 'planeta-tozal-de-las-comas-bike',
		name: 'Planeta Tozal de las Comas Bike',
		image: '/planets/Planeta_Tozal-de-Las-Comas-Bike.jpg',
		description:
			'Trayecto dinámico y polvo fino, pensado para movimiento continuo.',
		tone: 'Registro nuevo',
		orbit: 'Órbita en estudio',
		size: 'Variable',
	},
	{
		slug: 'planeta-tozal-de-las-comas',
		name: 'Planeta Tozal de las Comas',
		image: '/planets/Planeta_Tozal-de-Las-Comas.jpg',
		description:
			'Mesa alta y horizonte estable, para narrativas serenas.',
		tone: 'Registro nuevo',
		orbit: 'Órbita en estudio',
		size: 'Variable',
	},
	{
		slug: 'planeta-vadiello',
		name: 'Planeta Vadiello',
		image: '/planets/Planeta_Vadiello.jpg',
		image360: '/pano360/PANO_Vadiello.jpg',
		description:
			'Agua embalsada y roca oscura, para proyectos con densidad visual.',
		tone: 'Registro nuevo',
		orbit: 'Órbita en estudio',
		size: 'Variable',
	},
	{
		slug: 'planeta-valle-de-tena',
		name: 'Planeta Valle de Tena',
		image: '/planets/Planeta_Valle de Tena.jpg',
		image360: '/pano360/PANO-DRONE_Valle-de-Tena_Cucuraza.jpg',
		description:
			'Valle amplio y aire frío, ideal para conceptos expansivos.',
		tone: 'Registro nuevo',
		orbit: 'Órbita en estudio',
		size: 'Variable',
	},
];

export const planetData = basePlanetData.map((planet) => ({
	...planet,
	image360: planet.image360 ?? planet.image,
}));

