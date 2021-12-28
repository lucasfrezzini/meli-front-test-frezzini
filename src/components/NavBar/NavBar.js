import './NavBar.scss'

import logo from '../../assets/images/Logo_ML.png';
import logo2x from '../../assets/images/Logo_ML.png';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = () => {
	return (
		<header className="NavBar">
			<div className="container grid grid-cols-12">
				<img className="NavBar__logo" src={logo} alt="Mercado Libre Logo" />
				<SearchBar />
			</div>
		</header>
	)
}

export default NavBar
