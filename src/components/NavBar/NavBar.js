import './NavBar.scss'
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

import logo from '../../assets/images/Logo_ML.png';
import logo2x from '../../assets/images/Logo_ML.png';

const NavBar = () => {
	return (
		<header className="NavBar">
			<div className="container grid grid-cols-12">
				<Link to="/" className="NavBar__logo">
					<img
						src={logo}
						srcSet={`${logo2x} 2x`}
						alt="Mercado Libre Logo"
					/>
				</Link>
				<SearchBar />
			</div>
		</header>
	)
}

export default NavBar
