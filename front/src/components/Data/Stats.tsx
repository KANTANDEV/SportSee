//* Typage de l'objet PropsType
type PropsType = {
	name: string
	img: string
	value: number
	unit: string
}
//* Composant Stats
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
