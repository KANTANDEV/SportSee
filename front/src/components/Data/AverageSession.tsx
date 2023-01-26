//* Import components from Recharts
//? importation des composants de Recharts
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

//* Type for chart data
//? Type pour les données du graphique
type PropsType = Array<{
	day: number | string
	sessionLength: number
}>

//* Default data for the chart
//? Données par défaut pour le graphique de la durée moyenne des sessions
const defaultData: PropsType = [
	{ day: 1, sessionLength: 0 },
	{ day: 2, sessionLength: 0 },
	{ day: 3, sessionLength: 0 },
	{ day: 4, sessionLength: 0 },
	{ day: 5, sessionLength: 0 },
	{ day: 6, sessionLength: 0 },
	{ day: 7, sessionLength: 0 },
]

//* Table for the abbreviations of the days of the week
//? Tableau pour les abréviations des jours de la semaine

/**
 * Table for the abbreviations of the days of the week
 * @constant
 * @type {{ [index: number]: string }}
 */

const days: { [index: number]: string } = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' }

//* Export the function for the chart
//? Exportation d'une fonction  pour le graphique

/**
 * Export the function for the chart
 * @function
 * @param {PropsType} [data=defaultData] - Data for the chart
 * @returns {JSX.Element}
 */

export default ({ data = defaultData }: { data?: PropsType }) => {
	//* Convert the day number to the abbreviation
	//? Utilisation de map pour convertir les numéros des jours en abréviations
	data.map((data) => (data && typeof data.day === 'number' ? (data.day = days[data.day]) : null))

	//* Custom Tooltip component to display the session duration in minutes
	//? Composant Tooltip personnalisé pour afficher la durée de la session en minutes
	const CustomTooltip = ({ active, payload }: { active: boolean; payload: any }) => {
		if (active && payload && payload.length) {
			return (
				<div className='tooltip'>
					<p>{`${payload[0].value} min`}</p>
				</div>
			)
		}
		return null
	}

	//* Use Recharts components to create the line chart with the provided data, customizing the layout and style options
	//? Utilisation des composants de Recharts pour créer le graphique en ligne avec les données fournies, en personnalisant les options de mise en page et de style
	return (
		<div>
			<h2 className='avgtitle'>Durée moyenne des sessions</h2>
			<div className='averageSession'>
				<ResponsiveContainer width='100%' height='100%'>
					<LineChart
						data={data}
						margin={{
							top: 0,
							right: 0,
							left: 0,
							bottom: 0,
						}}
					>
						<CartesianGrid horizontal={false} vertical={false} strokeDasharray='4 4' fill='#E60000' />
						<XAxis interval='preserveStartEnd' padding={{ right: 10, left: 10 }} dataKey='day' tickLine={false} mirror={true} tick={{ stroke: '#FFFFFF', strokeWidth: 0.5, fontSize: '12px' }} />
						<YAxis hide={true} dataKey='sessionLength' padding={{ top: 80, bottom: 50 }} />
						<Tooltip content={<CustomTooltip active={false} payload={data} />} cursor={{ stroke: 'rgba(0, 0, 0, 0.2)', strokeWidth: 32 }} />
						<Line type='natural' dataKey='sessionLength' stroke='white' strokeWidth={2} dot={false} activeDot={{ stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: '10px', r: 5 }} />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
