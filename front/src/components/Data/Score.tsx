//* Import components from Recharts
//? importation des composants de Recharts
import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts'

//* Exporting a function that takes data for the score graph as a parameter
//* The default value is 0
//? Exportation d'une fonction qui prend en paramètre des données pour le graphique des scores
//? La valeur par défaut est 0

/**
@file Score.jsx
@module ScoreGraph
@param {Object} props
@param {Number} props.data - The data used to create the score graph. Default value is 0.
@returns {JSX.Element} - A JSX element that represents the ScoreGraph component.
@desc This component imports the Recharts library and uses it to create a radial bar chart that represents a score. The component takes a data prop as a parameter and uses it to render the graph. The default value of the data prop is 0.
*/

export default ({ data = 0 }: { data?: number }) => {
	return (
		<div className='score'>
			<div className='title_container'>
				<div className='Wcircle'>
					<h2 className='title'>Score</h2>
					<p className='sentence'>
						<span className='percentage'>{data * 100 + '%'}</span>
						<br></br> de votre objectif
					</p>
				</div>
			</div>
			<ResponsiveContainer width='100%' height='100%'>
				<RadialBarChart
					innerRadius='71%'
					outerRadius='95%'
					data={[
						{ name: 'score', value: data * 100, fill: '#E60000' },
						{ name: 'fill', value: 100, fill: '#FBFBFB' },
					]}
					startAngle={210}
					endAngle={-150}
				>
					<RadialBar background={{ fill: '#FBFBFB' }} dataKey='value' cornerRadius={50} />
				</RadialBarChart>
			</ResponsiveContainer>
		</div>
	)
}
