//* Navbar component
export default () => {
	return (
		<div className='navbar'>
			<h1>
				<img src='./images/logo.svg' alt='' />
			</h1>
			<nav>
				<ul>
					<li>
						<a href='#'>Accueil</a>
					</li>
					<li>
						<a href='#'>Profil</a>
					</li>
					<li>
						<a href='#'>Réglage</a>
					</li>
					<li>
						<a href='#'>Communauté</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}
