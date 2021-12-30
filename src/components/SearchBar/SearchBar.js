import './SearchBar.scss'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import searchIcon from '../../assets/images/ic_Search.png';
import searchIcon2x from '../../assets/images/ic_Search@2x.png';

const SearchBar = () => {
	const [query, setQuery] = useState('')

	const handleQuery = (e) => {
		e.preventDefault()
		setQuery(e.target.value)
	}
	const cleanSearch = () => {
		setQuery('')
	}

	return (
		<form className="SearchBar">
			<input
				placeholder="Nunca dejes de buscar"
				name="search_query"
				value={query}
				onChange={handleQuery}
			/>
			<Link
				to={`/results/${query}`}
				onClick={cleanSearch}
			>
				<img
					src={searchIcon}
					srcSet={`${searchIcon2x} 2x`}
					alt="Search Form"
				/>
			</Link>
		</form>
	)
}

export default SearchBar
