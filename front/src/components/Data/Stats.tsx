//* Typage de l'objet PropsType
type PropsType = {
	name: string
	img: string
	value: number
	unit: string
}
//* Composant Stats

/**
@function Stats
@param {PropsType} props
@returns {JSX.Element}
*/

export default ({ name, img, value, unit }: PropsType) => {
	return (
		<div className='stats'>
			<img src={img} alt={name} />
			<div>
				<p>{value + unit}</p>
				<p>{name}</p>
			</div>
		</div>
	)
}
