import { Link } from 'react-router-dom'
import './NavBar.scss'

import logo from '../../assets/images/Logo_ML.png';
import logo2x from '../../assets/images/Logo_ML.png';
import searchIcon from '../../assets/images/ic_Search.png';

const NavBar = () => {
	return (
		<header className="NavBar">
			<div className="container">
				<img src={logo} alt="Mercado Libre" />
				<form className="SearchBar">
					<input
						placeholder="Nunca dejes de buscar"
					/>
					<button type="submit"><img src={searchIcon} /></button>
				</form>
			</div>
		</header>
	)
}

export default NavBar
