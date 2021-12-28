import './SearchBar.scss'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import searchIcon from '../../assets/images/ic_Search.png';

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
			<Link to={`/results/${query}`} onClick={cleanSearch}><img src={searchIcon} /></Link>
		</form>
	)
}

export default SearchBar
