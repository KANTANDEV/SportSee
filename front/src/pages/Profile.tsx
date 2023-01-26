//* Import components from React
//? Importation des modules React
import { ReactElement, useState } from 'react'

//* Import components
//? Importation des composants
import { DailyBoard, AverageSession, Performance, Score, Stats } from '../components/Data'

//* Importing the "useGetData" custom function
//? Importation de la fonction custom "useGetData"
import useGetData from '../utils/useGetData'

//* Export the Profile-page component
//? Exportation du composant Profile-page

/**
@function
@returns {React.ReactElement} - A React element containing data for user ID, user information, activity data, average data and performance data.
@throws {Error} - If there is an error with the request, the error will be logged to the console and the error response will be returned.
*/

export default (): ReactElement => {
	//* Declaration of a "userID" state with an initial state of 12
	//? Déclaration d'un state "userID" avec un état initial de 12
	const [userID, setUserID] = useState<number>(12)

	//* Declaration of a "userInformations" state with an initial state of null
	//? Utilisation de la fonction custom "useGetData" pour récupérer les données de l'utilisateur avec son ID
	const userInformations = useGetData(`/${userID}`)
	const activityData = useGetData(`/${userID}/activity`)
	const avgData = useGetData(`/${userID}/average-sessions`)
	let performanceData = useGetData(`/${userID}/performance`)

	//* We translate the data retrieved from performanceData into French
	//* We browse the performanceData.kind object and we replace the English values ​​with the French values ​​but we do not modify the performanceData object
	//? On traduit en français les données récupérées de performanceData
	//? On parcourt l'objet performanceData.kind et on remplace les valeurs en anglais par les valeurs en français mais on ne modifie pas l'objet performanceData
	performanceData = {
		...performanceData,
		kind: {
			1: 'Intensité',
			2: 'Vitesse',
			3: 'Force',
			4: 'Endurance',
			5: 'Énergie',
			6: 'Cardio',
		},
	}

	//* Return the Profile-page component
	//? On retourne le composant Profile-page
	return (
		<div className='profile-page'>
			<h2>
				Bonjour <span onClick={() => setUserID((prev) => (prev === 12 ? 18 : 12))}>{userInformations?.userInfos?.firstName ?? 'Invité'}</span>
			</h2>
			{!(userInformations && activityData && avgData && performanceData) ? <p>Une erreur s'est produite lors de la récupération des données</p> : <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>}
			<main id='data'>
				<div>
					{activityData ? <DailyBoard data={activityData.sessions} /> : <DailyBoard />}
					<div>
						{avgData ? <AverageSession data={avgData.sessions} /> : <AverageSession />}
						{performanceData ? <Performance kind={performanceData.kind} data={performanceData.data} /> : <Performance />}
						{userInformations ? <Score data={userInformations.todayScore || userInformations.score} /> : <Score />}
					</div>
				</div>
				<div id='stats'>
					<Stats name='Calories' img='./images/fire.png' value={userInformations?.keyData?.calorieCount ?? 0} unit='kCal' />
					<Stats name='Protéines' img='./images/chicken.png' value={userInformations?.keyData?.proteinCount ?? 0} unit='g' />
					<Stats name='Glucides' img='./images/apple.png' value={userInformations?.keyData?.carbohydrateCount ?? 0} unit='g' />
					<Stats name='Lipides' img='./images/burger.png' value={userInformations?.keyData?.lipidCount ?? 0} unit='g' />
				</div>
			</main>
		</div>
	)
}
