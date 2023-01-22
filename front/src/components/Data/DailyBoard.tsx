//* importation des composants de Recharts
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Legend } from 'recharts'
//* Type pour les données du graphique
type PropsType = Array<{ day: string; kilogram: number; calories: number }>

//* Données par défaut pour le graphique
const defaultData: PropsType = [
	{ day: '1970-01-01', kilogram: 0, calories: 0 },
	{ day: '1970-01-02', kilogram: 0, calories: 0 },
	{ day: '1970-01-03', kilogram: 0, calories: 0 },
	{ day: '1970-01-04', kilogram: 0, calories: 0 },
	{ day: '1970-01-05', kilogram: 0, calories: 0 },
	{ day: '1970-01-06', kilogram: 0, calories: 0 },
	{ day: '1970-01-07', kilogram: 0, calories: 0 },
]

//* Exportation d'une fonction pour le graphique activites quotidiennes
export default ({ data = defaultData }: { data?: PropsType }) => {
	//* Mapping les jours pour changer leur format de date pour qu'ils soient sous forme de chiffres
	data.map((data, i) => (data.day = (++i).toString()))
	//* Fonction de personnalisation de l'infobulle qui s'affiche lorsqu'on passe la souris sur un élément du graphique
	const CustomTooltip = ({ active, payload }: { active: boolean; payload: any }) => {
		if (active && payload && payload.length) {
			return (
				<div className='tooltip'>
					<p>{`${payload[0].value}kg`}</p>
					<p>{`${payload[1].value}kCal`}</p>
				</div>
			)
		}

		return null
	}
	//* Fonction de personnalisation de la légende du graphique activites quotidiennes
	const legendContent = () => {
		return (
			<ul className='legend'>
				<li className='dotWeight'>
					<span className='weightLegend'>Poids (kg)</span>
				</li>
				<li className='dotCal'>
					<span className='calLegend'>Calories brûlées (kCal)</span>
				</li>
			</ul>
		)
	}

	return (
		<div>
			<h2 className='dbtitle'>Activité quotidienne</h2>
			<div className='dailyboard'>
				<ResponsiveContainer width='100%' height='100%'>
					<BarChart data={data} margin={{ top: 80, right: 48, bottom: 32, left: 48 }} barGap={8} maxBarSize={7} barCategoryGap='35%'>
						<CartesianGrid strokeDasharray='3 3' vertical={false} />
						<XAxis dataKey='day' dy={16} axisLine={false} tickLine={false} tickMargin={16} tick={{ fontSize: 14, fontWeight: 500 }} />
						<YAxis yAxisId='kg' dataKey='kilogram' domain={['dataMin -1', 'dataMax -1']} allowDecimals={false} dx={48} orientation='right' tickCount={3} axisLine={false} tickLine={false} tick={{ fontSize: 14, fontWeight: 500 }} />
						<YAxis yAxisId='cal' dataKey='calories' domain={[0, 'dataMax']} hide={true} />
						<Bar yAxisId='kg' dataKey='kilogram' maxBarSize={8} fill='#282D30' radius={[50, 50, 0, 0]} />
						<Bar yAxisId='cal' dataKey='calories' maxBarSize={8} fill='#E60000' radius={[50, 50, 0, 0]} />
						<Tooltip itemStyle={{ backgroundColor: '#E60000', color: 'white' }} contentStyle={{ backgroundColor: '#E60000' }} content={<CustomTooltip active payload />} allowEscapeViewBox={{ x: true, y: true }} cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }} />
						<Legend verticalAlign='top' align='right' iconType='circle' iconSize={8} content={legendContent} />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
