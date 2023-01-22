import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import App from './App'
import './styles/index.sass'

//Définition de l'URL de base pour les requêtes axios
axios.defaults.baseURL = 'http://localhost:3000/user'

/*
http://localhost:3000/user/${userId} - récupère les informations d'un utilisateur. Ce premier point d'extrémité inclut l'identifiant de l'utilisateur, les informations de l'utilisateur (prénom, nom de famille et âge), le score du jour actuel (todayScore) et les données clés (calories, macronutriments, etc.).
http://localhost:3000/user/${userId}/activity - récupère l'activité d'un utilisateur jour par jour avec les kilogrammes et les calories.
http://localhost:3000/user/${userId}/average-sessions - récupère les sessions moyennes d'un utilisateur par jour. La semaine commence le lundi.
http://localhost:3000/user/${userId}/performance - récupère les performances d'un utilisateur (énergie, endurance, etc.).
*/

//Utilisation de ReactDOM pour rendre l'élément racine avec l'élément <App /> à l'intérieur d'un élément <React.StrictMode>
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
