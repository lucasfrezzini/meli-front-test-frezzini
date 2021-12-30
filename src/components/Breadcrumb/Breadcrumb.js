import './Breadcrumb.scss'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Chevron from './Chevron/Chevron'

const Breadcrumb = ({categories}) => {
	const [cat, setCat] = useState([])
	console.log(categories)

	useEffect(() => {
		setCat(categories)
	}, [categories])

	return (
		<h4 className="Breadcrumb">
		{
		cat &&
		cat.map((cat, idx) => {
			return (
			<>
			<Link to={`/results/${cat.name}`} key={idx}>{cat.name}</Link>
			<Chevron />
			</>
			)
		})
		}
		</h4>
	)
}

export default Breadcrumb
