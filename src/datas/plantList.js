import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'

export const plantList = [
	{
		name: 'Monstera',
		category: 'Classique',
		id: '1ed',
		light: 2,
		water: 3,
		cover: monstera,
		price: 15,
    descr: "L’icône jungle ! Feuilles géantes et découpées, parfait pour un intérieur design et une ambiance tropicale. 🌿✨"
	},
	{
		name: 'Ficus Lyrata',
		category: 'Classique',
		id: '2ab',
		light: 3,
		water: 1,
		cover: lyrata,
		price: 16,
    descr: "Plante d'intérieur élégante aux feuilles larges, nervurées et brillantes, rappelant le célèbre Ficus elastica mais avec un port plus compact. Idéal pour apporter une touche tropicale à votre intérieur, il s’adapte bien à la lumière indirecte et demande peu d’entretien. Parfait pour les débutants ! 🌿"
	},

	{
		name: 'Pothos argenté',
		category: 'Classique',
		id: '3sd',
		light: 1,
		water: 2,
		cover: pothos,
		price: 9,
    descr: "Le grimpant indestructible. Feuilles panachées argentées, résistant et idéal pour les débutants ou les étagères. 🌱"
	},
	{
		name: 'Calathea',
		category: 'Classique',
		id: '4kk',
		light: 2,
		water: 3,
		cover: calathea,
		price: 20,
    descr: "La reine des motifs. Feuilles graphiques et colorées, sensible mais sublime pour un coin cosy et élégant. 🎨"
	},
	{
		name: 'Olivier',
		category: 'Extérieur',
		id: '5pl',
		light: 3,
		water: 1,
		cover: olivier,
		price: 25,
    descr: "Le méditerranéen intemporel. Symbole de paix, résistant et parfait pour un style naturel et ensoleillé. ☀️🫒"
	},

	{
		name: 'Cactus',
		category: 'Plante grasse',
		id: '8fp',
		light: 2,
		water: 1,
		cover: cactus,
		price: 6,
    descr: "Le minimaliste résistant. Silhouettes graphiques, presque sans entretien, pour une touche désertique et moderne. 🌵"
	},
	{
		name: 'Basilique',
		category: 'Extérieur',
		id: '7ie',
		light: 2,
		water: 3,
		cover: basil,
		price: 5,
    descr: "L’aromatique star. Parfum envoûtant, indispensable en cuisine et facile à cultiver en pot. 🍝"
	},
	{
		name: 'Succulente',
		category: 'Plante grasse',
		id: '9vn',
		light: 2,
		water: 1,
		cover: succulent,
		price: 8,
    descr: "La petite robuste. Formes variées et couleurs douces, parfaite pour les oublieux et les mini-jardins. 💧"
	},

	{
		name: 'Menthe',
		category: 'Extérieur',
		id: '6uo',
		light: 2,
		water: 2,
		cover: mint,
		price: 4,
    descr: "La fraîcheur instantanée. Pousse vite, parfum intense, idéale pour thés, cocktails et balcons gourmands. 🍹"
	}
]
