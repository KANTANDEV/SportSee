//* importation des composants de Recharts
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, LineChart } from 'recharts'

//* Typage de l'objet PropsType
type PropsType = {
	kind?: { [index: number | string]: string }
	data?: Array<{ kind: number | string; value: number }>
}

//* creation d'un objet PropsType
const defaultData: PropsType = {
	kind: {
		1: 'Intensity',
		2: 'Speed',
		3: 'Strength',
		4: 'Endurance',
		5: 'Energy',
		6: 'Cardio',
	},
	data: [
		{ kind: 1, value: 0 },
		{ kind: 2, value: 0 },
		{ kind: 3, value: 0 },
		{ kind: 4, value: 0 },
		{ kind: 5, value: 0 },
		{ kind: 6, value: 0 },
	],
}

//* Exportation d'une fonction qui prend en paramètre des données pour le graphique des performances
export default ({ kind = defaultData.kind, data = defaultData.data }: PropsType) => {
	//* On utilise la méthode map() pour parcourir les données et remplacer les valeurs numériques en valeurs textuelles
	data!.map((data) => (data && typeof data.kind === 'number' ? (data.kind = kind![data.kind]) : null))

	//* On retourne le composant graphique en utilisant les données en paramètre
	return (
		<div className='performance'>
			<ResponsiveContainer width='100%' height='100%'>
				<RadarChart outerRadius={75} data={data}>
					<PolarGrid radialLines={false} />
					<PolarAngleAxis dataKey='kind' axisLine={false} tickLine={false} dy={4} tick={{ fontSize: 12, fontWeight: 500 }} />
					<Radar dataKey='value' fill='#FF0101' fillOpacity={0.75} stroke='transparent' />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	)
}
