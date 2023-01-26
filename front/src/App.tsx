import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Profile from './pages/Profile'

/**
@function
@returns {JSX.Element} - A JSX element containing the Navbar, Menu and Profile components.
*/

//Exportation d'une fonction par défaut qui retourne un élément JSX contenant les composants Navbar, Menu et Profile
export default () => {
	return (
		<>
			<Navbar />
			<Menu />
			<Profile />
		</>
	)
}

