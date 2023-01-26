import { useState, useEffect } from 'react'
import axios, { AxiosRequestConfig } from 'axios'

/**

@function
@async
@param {string} url - The URL to make a GET request to.
@param {AxiosRequestConfig} [options] - Additional options to pass to the axios.get() method.
@returns {Promise<any>} - The data received from the GET request.
@throws {Error} - If there is an error with the request, the error will be logged to the console and the error response will be returned.
*/

//* Exportation d'une fonction qui fait un requête  a l'api et retourne les données
export default (url: string, options?: AxiosRequestConfig<any>) => {
	//* Création d'un état pour stocker les données reçues de la requête
	const [data, setData] = useState<any>(null)

	//* Fonction asynchrone pour envoyer une requête GET à l'URL spécifiée avec les options fournies
	const getData = async () => {
		try {
			const response = await axios.get(url, options)
			setData(response.data)
		} catch (error: any) {
			if (error.response) {
				console.error(error.response)
				setData(error.response)
			} else if (error.request) {
				console.error(error.request)
			} else {
				console.error(error.message)
			}
		}
	}

	//* Utilisation de useEffect pour effectuer la requête lorsque la page est chargée ou lorsque l'URL ou les options de la requête sont modifiées
	useEffect(() => {
		const controller = new AbortController()

		getData()

		return controller.abort()
	}, [url, options])

	return data
}
